'use client';

import React, { useRef } from 'react';

//components
import ParallaxSection from '@/app/(frontend)/components/ParallaxSection';
//data
import { parallaxImages } from '@/lib/data';

const HeroSection = () => {
    const parallaxRef = useRef<HTMLDivElement | null>(null);

    return (
        <section id='hero'>
            <div id='parallax-wrapper' ref={parallaxRef}>
                <div className='pContainer enable'>
                    <ParallaxSection
                        parallaxImage={parallaxImages.hero}
                        parallaxRef={parallaxRef}
                        parallaxTextParagraph={
                            <>
                                BMB Construction and Services Ltd - Auckland&apos;s trusted construction partner with
                                over 30 years of combined trade experience.
                                <br />
                                One call, one solution for all your building, renovation, and property maintenance
                                needs.
                            </>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
