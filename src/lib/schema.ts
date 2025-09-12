import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.'
    }),
    email: z.string().email({
        message: 'Invalid email address.'
    }),
    phone: z
        .string()
        .min(10, {
            message: 'Phone number must be at least 10 characters.'
        })
        .max(15, {
            message: 'Phone number must be at most 15 characters.'
        }),
    message: z
        .string()
        .min(10, {
            message: 'Message must be at least 10 characters.'
        })
        .max(500, {
            message: 'Message must be at most 500 characters.'
        })
});
