'use client';

import React from 'react';

import Image from 'next/image';

// PhotoSwipe
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

type ImageComponent = {
    key: number;
    src: string;
    alt: string;
    width: number;
    height: number;
};

const ProjectGallery = ({ imageComponents }: { imageComponents: ImageComponent[] }) => {
    return (
        <Gallery>
            {/* Dynamic images */}
            {imageComponents.map(({ key, src, alt, width, height }) => (
                <Item
                    key={key}
                    original={`https://storage.googleapis.com/high-end-builder-bucket-new/${src}`}
                    thumbnail={`https://storage.googleapis.com/high-end-builder-bucket-new/${src}`}
                    width={width}
                    height={height}>
                    {({ ref, open }) => (
                        <Image
                            ref={ref}
                            onClick={open}
                            src={`https://storage.googleapis.com/high-end-builder-bucket-new/${src}`}
                            alt={alt}
                            width={width}
                            height={height}
                            className='h-auto cursor-pointer object-cover'
                        />
                    )}
                </Item>
            ))}
        </Gallery>
    );
};

export default ProjectGallery;
