'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { Media, Testimonial } from '@/payload-types';

const TestimonialCard = ({ name, quote, image, company }: Testimonial) => {
    const [loaded, setLoaded] = useState(false);

    // Get the first image from the array if available
    const firstImage = image ? (image as Media) : null;

    return (
        <div className='h-full overflow-hidden bg-secondary p-6 shadow-lg md:p-12'>
            <div className='flex flex-col overflow-hidden'>
                <div className='flex-shrink-0'>
                    {firstImage && firstImage.url && (
                        <div className='relative h-64'>
                            <Image
                                src={`https://storage.googleapis.com/high-end-builder-bucket-new/${firstImage.filename}`}
                                alt={firstImage.alt || 'Testimonial Image'}
                                style={{ objectFit: 'contain' }}
                                fill
                                className={`size-full transform transition duration-500 ease-in-out ${
                                    loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                } hover:scale-105`}
                                onLoad={() => setLoaded(true)}
                            />
                        </div>
                    )}
                </div>
                <div className='flex flex-col justify-between p-6 md:p-8'>
                    <div>
                        <p className='mb-4 text-lg font-bold'>Testimonial</p>
                        <blockquote className='mb-6 text-xl italic'>{quote}</blockquote>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>{name}</p>
                        <p className='text-sm'>{company}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
