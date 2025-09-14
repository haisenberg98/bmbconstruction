'use client';

import React, { useEffect, useRef } from 'react';

import Image from 'next/image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutStorySection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const contentRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 80%',
                        once: true
                    }
                }
            );

            // Content sections staggered animation
            contentRefs.current.forEach((ref, index) => {
                if (ref) {
                    gsap.fromTo(
                        ref,
                        { opacity: 0, y: 30 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            delay: index * 0.2,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: ref,
                                start: 'top 85%',
                                once: true
                            }
                        }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el: HTMLDivElement) => {
        if (el && !contentRefs.current.includes(el)) {
            contentRefs.current.push(el);
        }
    };

    return (
        <section ref={sectionRef}>
            {/* Section Header */}
            <div className='mb-16 text-center'>
                <h1 ref={headingRef} className='mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-6xl'>
                    Our Story
                </h1>
                <p className='mx-auto max-w-3xl text-lg md:text-xl'>
                    Building Auckland&apos;s future with passion, precision, and decades of expertise.
                </p>
            </div>

            {/* Story Content */}
            <div className='mx-auto max-w-6xl'>
                <div className='space-y-12'>
                    <div ref={addToRefs}>
                        <h2 className='mb-4 text-2xl font-bold text-primary md:text-3xl'>
                            Over 30 Years of Excellence
                        </h2>
                        <p className='text-lg leading-relaxed'>
                            BMB Construction and Services Ltd is an Auckland-based company with over 30 years of
                            combined trade experience, known for delivering high-quality workmanship and reliable
                            service in the construction, renovation, and property maintenance sector.
                        </p>
                    </div>

                    <div ref={addToRefs}>
                        <h3 className='mb-4 text-xl font-semibold text-primary'>One Call, One Solution</h3>
                        <p className='text-lg leading-relaxed'>
                            We are committed to providing a &quot;one call, one solution&quot; approach for all your
                            building needs. Our comprehensive services eliminate the hassle of coordinating multiple
                            contractors, giving you peace of mind and exceptional results.
                        </p>
                    </div>

                    <div ref={addToRefs}>
                        <h3 className='mb-4 text-xl font-semibold text-primary'>Personal Service</h3>
                        <p className='text-lg leading-relaxed'>
                            Our team delivers smart design, thorough project management, and personal service that is
                            often missing in larger firms. We specialize in comprehensive renovation and building
                            solutions throughout Auckland.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStorySection;
