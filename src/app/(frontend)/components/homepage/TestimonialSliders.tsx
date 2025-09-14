'use client';

import React from 'react';

//components
import SliderWrapper from '@/app/(frontend)/components/SliderWrapper';
import TestimonialCard from '@/app/(frontend)/components/projects/TestimonialCard';
import { Testimonial } from '@/payload-types';

// eslint-disable-next-line import/named
import { PaginatedDocs } from 'payload';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { SwiperSlide } from 'swiper/react';

const TestimonialSliders = ({ testimonials }: { testimonials: PaginatedDocs<Testimonial> }) => {
    return (
        <section className='py-24'>
            {/* Section Header */}
            <div className='mb-12 text-center'>
                <h2 className='mb-4 text-3xl font-bold text-primary md:text-4xl'>Client Testimonials</h2>
                <p className='mx-auto max-w-xl text-primary'>
                    Hear what our satisfied clients have to say about their experience working with us.
                </p>
            </div>

            {/* Testimonials */}
            <div className='relative'>
                <SliderWrapper
                    xlSlidePerView={3}
                    largeSlidePerView={2}
                    mediumSlidePerView={2}
                    smallSlidePerView={1}
                    extraSmallSlidePerView={1}
                    spaceBetween={24}
                    autoPlay={true}>
                    {testimonials?.docs.map((item, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard {...item} />
                        </SwiperSlide>
                    ))}
                </SliderWrapper>

                {/* Navigation */}
                <div className='absolute -bottom-8 right-8 z-10 flex items-center gap-2'>
                    <button className='swiper-prev swiper-custom-navigation flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-colors hover:bg-gray-50'>
                        <FaCaretLeft className='text-primary' />
                    </button>
                    <div className='swiper-page px-3 text-sm text-primary'></div>
                    <button className='swiper-next swiper-custom-navigation flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-colors hover:bg-gray-50'>
                        <FaCaretRight className='text-primary' />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSliders;
