'use server';

//type
import { ContactFormFields } from '@/app/(frontend)/(pages)/contact/page';
//components
import { EmailTemplate } from '@/app/(frontend)/components/EmailTemplate';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const { data, error } = await resend.emails.send({
        from: 'High End Builder Customer <don@highendbuilder.co.nz>',
        to: ['don@highendbuilder.co.nz'],
        subject: 'Customer Inquiry',
        react: EmailTemplate({ formData }) as React.ReactElement
    });

    if (error) {
        return {
            message: error,
            status: 'error'
        };
    }

    return {
        message: 'Thank you for contacting us! We will get back to you soon.',
        status: 'success'
    };
}
