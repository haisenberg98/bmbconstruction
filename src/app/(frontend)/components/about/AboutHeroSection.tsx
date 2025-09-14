'use client';

import React, { useEffect, useRef, useState } from 'react';

import ParallaxSection from '@/app/(frontend)/components/ParallaxSection';
import { parallaxImages } from '@/lib/data';

const AboutHeroSection = () => {
    const parallaxRef = useRef<HTMLDivElement | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <section id='about-hero'>
            <div id='parallax-wrapper' ref={parallaxRef}>
                <div className='pContainer enable'>
                    <ParallaxSection
                        parallaxImage={parallaxImages.hero}
                        parallaxRef={parallaxRef}
                        parallaxTextParagraph={
                            <>
                                About BMB Construction - Your trusted Auckland construction partner with over 30 years of combined trade experience.
                                <br />
                                We deliver smart design, thorough project management, and personal service that makes a difference.
                            </>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;