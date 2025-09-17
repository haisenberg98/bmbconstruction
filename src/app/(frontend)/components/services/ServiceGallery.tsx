'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageComponent {
    key: number;
    src: string;
    alt: string;
    width: number;
    height: number;
}

interface ServiceGalleryProps {
    imageComponents: ImageComponent[];
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ imageComponents }) => {
    const [selectedImage, setSelectedImage] = useState<ImageComponent | null>(null);

    const openModal = (image: ImageComponent) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            {imageComponents.map((image) => (
                <div
                    key={image.key}
                    className='group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105'
                    onClick={() => openModal(image)}>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className='aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20'></div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                        <div className='rounded-full bg-white p-2 shadow-lg'>
                            <svg className='size-6 text-gray-800' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}

            {selectedImage && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'
                    onClick={closeModal}>
                    <div className='relative max-h-[90vh] max-w-[90vw]'>
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            width={selectedImage.width}
                            height={selectedImage.height}
                            className='max-h-full max-w-full object-contain'
                        />
                        <button
                            className='absolute right-4 top-4 rounded-full bg-white p-2 text-black shadow-lg hover:bg-gray-100'
                            onClick={closeModal}>
                            <svg className='size-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServiceGallery;