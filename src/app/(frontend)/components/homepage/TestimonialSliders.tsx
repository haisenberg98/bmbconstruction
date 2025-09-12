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
        <div className='relative flex pb-8 pt-12 md:py-16'>
            <SliderWrapper
                xlSlidePerView={3}
                largeSlidePerView={2}
                mediumSlidePerView={2}
                smallSlidePerView={1}
                extraSmallSlidePerView={1}
                spaceBetween={20}
                autoPlay={true}>
                {testimonials?.docs.map((item, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard {...item} />
                    </SwiperSlide>
                ))}
            </SliderWrapper>
            <div className='absolute bottom-0 right-0 z-10 flex items-center pr-6'>
                <button className='swiper-prev swiper-custom-navigation bg-transparent'>
                    <FaCaretLeft className='text-xl md:text-6xl' />
                </button>
                <div className='swiper-page cursor-pointer text-white md:text-xl'></div>
                <button className='swiper-next swiper-custom-navigation bg-transparent'>
                    <FaCaretRight className='text-xl md:text-6xl' />
                </button>
            </div>
        </div>
    );
};

export default TestimonialSliders;
