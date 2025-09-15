'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { Media, Testimonial } from '@/payload-types';

const TestimonialCard = ({ name, quote, image, company }: Testimonial) => {
    const [loaded, setLoaded] = useState(false);

    // Get the first image from the array if available
    const firstImage = image ? (image as Media) : null;

    return (
        <div className='group flex h-full flex-col rounded-lg border border-gray-100 bg-white p-4 transition-all duration-300 hover:border-gray-200 sm:p-6 lg:p-8'>
            {/* Quote */}
            <div className='mb-4 flex-1 sm:mb-6'>
                <svg className='mb-3 size-6 text-gray-300 sm:mb-4 sm:size-8' fill='currentColor' viewBox='0 0 32 32'>
                    <path d='M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z' />
                </svg>
                <blockquote className='text-base leading-relaxed text-gray-700 sm:text-lg'>{quote}</blockquote>
            </div>

            {/* Author */}
            <div className='pt-3 sm:pt-4'>
                <div className='flex items-center gap-3 sm:gap-4'>
                    {firstImage && firstImage.url && (
                        <div className='relative size-10 flex-shrink-0 overflow-hidden rounded-full bg-gray-100 sm:size-12'>
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
                    <div className='min-w-0 flex-1 text-left'>
                        <p className='truncate font-semibold text-primary sm:text-base'>{name}</p>
                        {company && <p className='truncate text-xs text-gray-500 sm:text-sm'>{company}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
