'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/app/(frontend)/components/Button';
//animations
import { parallaxAnimation } from '@/lib/animations';
//type
import { ParallaxSectionProps } from '@/lib/types';

//gsap
import gsap from 'gsap';
import { isMobile } from 'react-device-detect';

const ParallaxSection = ({
    parallaxImage,
    parallaxRef,

    parallaxTextParagraph
}: ParallaxSectionProps) => {
    const router = useRouter();

    useEffect(() => {
        if (isMobile) {
            parallaxAnimation(parallaxRef);
        } else {
            // Use gsap context to make sure animations are killed when the component unmounts
            const ctx = gsap.context(() => {
                parallaxAnimation(parallaxRef);
            });

            return () => ctx.revert();
        }
    }, [parallaxRef]);

    const backgroundImageStyle = {
        backgroundImage: `url(${parallaxImage})`
    };

    const handleOnClick = () => {
        router.push('/contact');
    };

    return (
        <>
            <div className='pImageContainer relative'>
                <div className='overlay'></div>
                <div className='pImage' style={backgroundImageStyle}></div>
            </div>

            <div className='pText-overlay px-7 text-foreground md:px-14 lg:pt-12 xl:px-24'>
                <div className='flex flex-col md:justify-center lg:w-full lg:justify-end'>
                    {/* <h1 className='text-foreground'>{parallaxTextTitle}</h1> */}

                    <p className='mx-auto md:flex md:w-3/4 md:justify-center lg:mt-0 lg:w-1/2'>
                        {parallaxTextParagraph || ''}
                    </p>
                    <div className='flex justify-center'>
                        <Button className='mt-10 px-20' variant='primary' text='Hire Us' onClick={handleOnClick} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParallaxSection;
