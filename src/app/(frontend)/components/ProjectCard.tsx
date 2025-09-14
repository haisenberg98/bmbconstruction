'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/payload-types';

interface Media {
    url: string;
    filename: string;
    alt?: string;
}

const Card = ({ slug, title, buildingType, images }: Project) => {
    const [loaded, setLoaded] = useState(false);
    const firstImage = images && images.length > 0 ? (images[0] as Media) : null;

    return (
        <div className='group relative flex h-full flex-col overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gray-200'>
            {/* Image Container */}
            <div className='relative aspect-square w-full overflow-hidden sm:aspect-[4/3] md:aspect-[16/11] lg:aspect-[16/10] xl:aspect-[16/9]'>
                {firstImage ? (
                    <Link href={`/projects/${slug}`} className='block size-full'>
                        <Image
                            src={`https://storage.googleapis.com/high-end-builder-bucket-new/${firstImage.filename}`}
                            alt={firstImage.alt || 'Project Image'}
                            width={1000}
                            height={900}
                            className={`size-full transform object-cover transition duration-500 ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} group-hover:scale-105`}
                            onLoad={() => setLoaded(true)}
                            priority={false}
                        />
                        <div className='absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 md:group-hover:opacity-20 lg:group-hover:opacity-25' />
                    </Link>
                ) : (
                    <div className='flex size-full items-center justify-center'>
                        <span className='text-xs opacity-60 sm:text-sm md:text-base'>No image available</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className='px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-7 xl:py-8'>
                <div className='flex items-center justify-between'>
                    <span className='inline-block text-sm font-medium uppercase tracking-wide opacity-75 md:text-lg md:tracking-wider lg:tracking-widest'>
                        {buildingType}
                    </span>

                    <Link
                        href={`/projects/${slug}`}
                        className='text-right text-sm font-medium uppercase transition-opacity duration-200 hover:opacity-80 md:text-lg md:font-semibold'>
                        {title}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
