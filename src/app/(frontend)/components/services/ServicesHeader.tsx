'use client';

import React from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

const ServicesHeader = () => {
    return (
        <div className='mb-6 flex flex-col space-y-4 sm:mb-8 sm:space-y-6'>
            {/* Title and Back Link */}
            <motion.div
                className='flex items-center justify-between'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}>
                <h1 className='mb-0 text-4xl font-bold text-primary md:text-5xl lg:text-6xl'>Our Services</h1>
                <Link
                    href='/'
                    className='group inline-flex items-center text-lg font-semibold underline-offset-4 hover:underline hover:opacity-80'>
                    <svg
                        className='mr-2 size-4 transform transition-transform duration-200 group-hover:-translate-x-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 19l-7-7m0 0l7-7m-7 7h18'
                        />
                    </svg>
                    Back
                </Link>
            </motion.div>

            {/* Description */}
            <motion.p
                className='max-w-3xl opacity-80 sm:text-lg md:text-xl'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}>
                Discover our comprehensive range of construction services. We provide expert solutions tailored to meet your specific needs with quality craftsmanship and professional excellence.
            </motion.p>
        </div>
    );
};

export default ServicesHeader;