'use client';

import React from 'react';

//components
import Button from '@/app/(frontend)/components/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/app/(frontend)/components/ui/form';
import { Input } from '@/app/(frontend)/components/ui/input';
import { Textarea } from '@/app/(frontend)/components/ui/textarea';
//server actions
import { handleContactUsFormSubmit } from '@/lib/actions';
import { contactFormSchema } from '@/lib/schema';
//types
import { FieldName, FormFieldType } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

export type ContactFormFields = z.infer<typeof contactFormSchema>; //export type to use in server actions

//form fields data
const formFields: FormFieldType = [
    {
        label: 'Name',
        type: 'text',
        placeholder: 'Enter your name',
        name: 'name' as FieldName
    },
    {
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
        name: 'email' as FieldName
    },
    {
        label: 'Phone',
        type: 'tel',
        placeholder: 'Enter your phone number',
        name: 'phone' as FieldName
    },
    {
        label: 'Message',
        type: 'textarea',
        placeholder: 'Enter your message',
        name: 'message' as FieldName
    }
];

const ContactPage = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),

        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    });

    // 2. Handle form submit.
    const onMyFormSubmit = async (data: ContactFormFields) => {
        const { message, status } = await handleContactUsFormSubmit(data);

        if (status === 'error') {
            console.log(message);
            if (typeof message === 'string') {
                toast.error(message);
            } else {
                // If message is not a string, log it or show a default error message
                toast.error('An unexpected error occurred');
            }

            return;
        }

        if (typeof message === 'string') {
            toast.success(message);
        } else {
            // If message is undefined or not a string, show an error message
            toast.success('Your message has been sent successfully');
        }
        form.reset();
    };

    return (
        <main id='contact-page' className='mb-12 px-4 xl:container md:px-8 xl:mx-auto xl:px-0'>
            <h1 className='mb-12'>Get In Touch with Us</h1>

            <section className='md:container md:mx-auto md:max-w-2xl lg:px-0'>
                {/* Card wrapper mimicking ProjectCard aesthetic (subtle border, rounded, white bg) */}
                <div className='relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm'>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit((data) => onMyFormSubmit(data))}
                            className='flex flex-col space-y-6 p-4 md:p-6 lg:p-8'>
                            {/* form fields */}
                            {formFields.map((item, index) => (
                                <FormField
                                    key={index}
                                    control={form.control}
                                    name={item.name}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-formText text-xs'>{item.label}</FormLabel>
                                            <FormControl>
                                                {item.type === 'textarea' ? (
                                                    <Textarea placeholder={item.placeholder} {...field} />
                                                ) : (
                                                    <Input placeholder={item.placeholder} {...field} />
                                                )}
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            ))}
                            <div className='flex justify-between pt-2'>
                                <Button variant={'primary'} type='submit' text='Submit' />
                            </div>
                        </form>
                    </Form>
                </div>
            </section>

            <section className='mt-12 space-y-6 md:container md:mx-auto md:max-w-2xl lg:max-w-5xl lg:px-0'>
                <p>
                    BMB Construction & Services Ltd - Your Auckland construction partner for over 30 years.
                    <br />
                    Ready for your next project? Contact us today for a consultation. One call, one solution for all
                    your building, renovation, and property maintenance needs.
                </p>

                <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <div>
                        <h3 className='mb-3 text-xl font-semibold'>Contact Information</h3>
                        <div className='space-y-2'>
                            <p>
                                <strong>Company:</strong> BMB Construction & Services Ltd
                            </p>
                            <p>
                                <strong>Mobile:</strong> 022 043 8005
                            </p>
                            <p>
                                <strong>Email:</strong> johnny@bmbconstruction.co.nz
                            </p>
                            <p>
                                <strong>Service Area:</strong> Auckland Wide
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className='mb-3 text-xl font-semibold'>Our Services</h3>
                        <ul className='space-y-1 text-gray-700'>
                            <li>• Residential Builds & Renovations</li>
                            <li>• Kitchen & Bathroom Upgrades</li>
                            <li>• Villa Restoration & Heritage Homes</li>
                            <li>• Property Maintenance & Repairs</li>
                            <li>• Insurance Work & Project Management</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
