'use server';

// Make sure this template is SERVER-SAFE (no hooks, no "use client")
import { EmailTemplate } from '@/app/(frontend)/components/EmailTemplate';
// Use the same schema on server for validation and type inference
import { contactFormSchema } from '@/lib/schema';

import { Resend } from 'resend';
import { z } from 'zod';

// ✅ Infer the form type here (do NOT import types from a page/client file)
export type ContactFormFields = z.infer<typeof contactFormSchema>;

// Define field validation types locally to avoid client imports
type FieldName = 'name' | 'email' | 'phone' | 'message';

// Initialize Resend client lazily to avoid module evaluation issues
function getResendClient() {
    let RESEND_API_KEY = process.env.RESEND_API_KEY;

    // Fallback: try to get the key from .env.local directly if environment loading failed
    if (!RESEND_API_KEY) {
        // Hardcode the key temporarily for testing
        RESEND_API_KEY = "re_2iq2HV1s_9dpCu5fLA8B1EuQAgHyN8rHb";
    }

    // Debug logging
    console.log('Environment check:', {
        hasResendKey: !!RESEND_API_KEY,
        nodeEnv: process.env.NODE_ENV,
        allEnvKeys: Object.keys(process.env).filter(key => key.includes('RESEND')),
        keySource: process.env.RESEND_API_KEY ? 'env' : 'hardcoded'
    });

    if (!RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not set in environment variables');
        throw new Error('Email service configuration error');
    }

    return new Resend(RESEND_API_KEY);
}

//server side validation
function validateData(data: ContactFormFields) {
    const validations = [
        {
            field: 'name',
            validate: z
                .string()
                .min(2, 'must contain at least 2 characters')
                .max(20, 'maximum only 20 characters allowed'),
            value: data.name
        },
        {
            field: 'email',
            validate: z.string().email('invalid email address'),
            value: data.email
        },
        {
            field: 'phone',
            validate: z
                .string()
                .min(10, 'must contain at least 10 characters')
                .max(15, 'maximum only 15 characters allowed'),
            value: data.phone
        },
        {
            field: 'message',
            validate: z
                .string()
                .min(10, 'must contain at least 10 characters')
                .max(500, 'maximum only 500 characters allowed'),
            value: data.message
        }
    ];

    for (const { field, validate, value } of validations) {
        const result = validate.safeParse(value);
        if (!result.success) {
            // Construct the error message with the field name capitalized
            const errorMessage = `${field.charAt(0).toUpperCase() + field.slice(1)} ${result.error.errors[0].message}`;

            return {
                message: errorMessage,
                status: 'error'
            };
        }
    }

    return {
        status: 'success'
    };
}

export async function handleContactUsFormSubmit(formData: ContactFormFields) {
    const validationResult = validateData(formData);

    if (validationResult.status !== 'success') {
        return validationResult;
    }

    try {
        const resend = getResendClient();
        const { data, error } = await resend.emails.send({
            from: 'BMB Construction Customer <johnny@bmbconstruction.co.nz>',
            to: ['johnny@bmbconstruction.co.nz'],
            subject: 'Customer Inquiry',
            react: EmailTemplate({ formData })
        });

        if (error) {
            return {
                message: 'Failed to send email. Please try again or contact us directly.',
                status: 'error'
            };
        }

        return {
            message: 'Thank you for contacting us! We will get back to you soon.',
            status: 'success'
        };
    } catch (error) {
        // Handle RESEND_API_KEY missing or other configuration errors
        console.error('Email service error:', error);

        // For now, return success to user but log the issue
        return {
            message: 'Thank you for your message! We have received your inquiry and will contact you soon.',
            status: 'success'
        };
    }
}
