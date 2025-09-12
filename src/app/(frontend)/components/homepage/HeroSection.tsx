'use client';

import React, { useEffect, useRef, useState } from 'react';

//components
import ParallaxSection from '@/app/(frontend)/components/ParallaxSection';
//data
import { parallaxImages } from '@/lib/data';

const HeroSection = () => {
    const parallaxRef = useRef<HTMLDivElement | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // Render nothing on the server

    return (
        <section id='hero'>
            <div id='parallax-wrapper' ref={parallaxRef}>
                <div className='pContainer enable'>
                    <ParallaxSection
                        parallaxImage={parallaxImages.hero}
                        parallaxRef={parallaxRef}
                        parallaxTextParagraph={
                            <>
                                BMB Construction and Services Ltd - Auckland's trusted construction partner with over 30 years of combined trade experience.
                                <br />
                                One call, one solution for all your building, renovation, and property maintenance needs.
                            </>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
