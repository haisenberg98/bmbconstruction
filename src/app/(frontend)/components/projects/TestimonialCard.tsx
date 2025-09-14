'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { Media, Testimonial } from '@/payload-types';

const TestimonialCard = ({ name, quote, image, company }: Testimonial) => {
    const [loaded, setLoaded] = useState(false);

    // Get the first image from the array if available
    const firstImage = image ? (image as Media) : null;

    return (
        <div className='group h-full rounded-lg border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-gray-200 hover:shadow-lg'>
            {/* Quote */}
            <div className='mb-6'>
                <svg className='mb-4 size-8 text-gray-300' fill='currentColor' viewBox='0 0 32 32'>
                    <path d='M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z' />
                </svg>
                <blockquote className='text-lg leading-relaxed text-gray-700'>{quote}</blockquote>
            </div>

            {/* Author */}
            <div className='flex items-center justify-between border-t border-gray-100 pt-4'>
                <div className='flex items-center gap-4'>
                    {firstImage && firstImage.url && (
                        <div className='relative size-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-100'>
                            <Image
                                src={firstImage.url}
                                alt={firstImage.alt || `${name} photo`}
                                fill
                                className={`object-cover transition duration-500 ease-in-out ${
                                    loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                                }`}
                                onLoad={() => setLoaded(true)}
                            />
                        </div>
                    )}
                    <div className='text-left'>
                        <p className='font-semibold text-primary'>{name}</p>
                        {company && <p className='text-sm text-gray-500'>{company}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
