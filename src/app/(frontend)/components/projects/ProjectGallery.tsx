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
                    original={src}
                    thumbnail={src}
                    width={width}
                    height={height}>
                    {({ ref, open }) => (
                        <Image
                            ref={ref}
                            onClick={open}
                            src={src}
                            alt={alt}
                            width={width}
                            height={height}
                            className='h-auto cursor-pointer rounded-lg object-cover transition-transform duration-300 hover:scale-105'
                        />
                    )}
                </Item>
            ))}
        </Gallery>
    );
};

export default ProjectGallery;
