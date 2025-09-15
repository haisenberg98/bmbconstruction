'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/payload-types';

import { motion } from 'framer-motion';

interface Media {
    url: string;
    filename: string;
    alt?: string;
}

const Card = ({ slug, title, buildingType, images }: Project) => {
    const [loaded, setLoaded] = useState(false);
    const firstImage = images && images.length > 0 ? (images[0] as Media) : null;

    return (
        <motion.div
            className='group relative overflow-hidden rounded-lg shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-black/10'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1
            }}
            // whileHover={{
            //     scale: 1.02,
            //     transition: { duration: 0.3, ease: "easeOut" }
            // }}
        >
            {/* Image Container */}
            <div className='relative aspect-[4/3] overflow-hidden'>
                {firstImage ? (
                    <Link href={`/projects/${slug}`} className='block size-full'>
                        <Image
                            src={firstImage.url}
                            alt={firstImage.alt || 'Project Image'}
                            width={1000}
                            height={750}
                            className={`size-full object-cover transition-all duration-700 ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'} group-hover:scale-110`}
                            onLoad={() => setLoaded(true)}
                            priority={false}
                        />
                        {/* Thin dark overlay */}
                        <div className='absolute inset-0 bg-black/20'></div>
                        {/* Gradient overlay */}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                    </Link>
                ) : (
                    <div className='flex size-full items-center justify-center bg-gray-50'>
                        <span className='text-sm text-gray-400'>No image available</span>
                    </div>
                )}

                {/* Floating category badge */}
                <div className='absolute left-4 top-4 z-10'>
                    <span
                        className='inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm backdrop-blur-sm'
                        style={{ backgroundColor: 'rgba(49, 33, 37, 0.6)' }}>
                        {buildingType}
                    </span>
                </div>
            </div>

            {/* Content Overlay */}
            <div className='absolute inset-x-0 bottom-0 translate-y-2 p-6 text-white transition-transform duration-300 group-hover:translate-y-0'>
                <div className='relative pl-2'>
                    {/* Background blur */}
                    <div className='absolute inset-0 -m-2 rounded-lg bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'></div>

                    {/* Content */}
                    <div className='relative'>
                        <Link
                            href={`/projects/${slug}`}
                            className='block text-xl font-bold leading-tight transition-colors duration-200 hover:text-gray-200 md:text-2xl'>
                            {title}
                        </Link>
                        <div className='mt-2 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100'>
                            <div className='h-0.5 w-8 bg-white'></div>
                            <span className='text-sm text-gray-200'>View Project</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
