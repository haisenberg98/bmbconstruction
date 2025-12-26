'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import Button from '@/app/(frontend)/components/Button';
//animations
import { parallaxAnimation } from '@/lib/animations';
//type
import { ParallaxSectionProps } from '@/lib/types';

//gsap
import gsap from 'gsap';

const ParallaxSection = ({
    parallaxImage,
    parallaxRef,

    parallaxTextParagraph
}: ParallaxSectionProps) => {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile on client side
        setIsMobile(window.innerWidth < 768);
    }, []);

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
    }, [parallaxRef, isMobile]);

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

                    <motion.p
                        className='mx-auto text-background md:flex md:w-3/4 md:justify-center lg:mt-0 lg:w-1/2'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        {parallaxTextParagraph || ''}
                    </motion.p>
                    <motion.div
                        className='flex justify-center'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    >
                        <Button className='mt-10 px-20' variant='primary' text='Hire Us' onClick={handleOnClick} />
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default ParallaxSection;
