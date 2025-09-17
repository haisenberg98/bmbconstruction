import React from 'react';
export const dynamic = "force-dynamic";
import HeroSection from '@/app/(frontend)/components/homepage/HeroSection';
import TestimonialSection from '@/app/(frontend)/components/homepage/TestimonialSection';
import TopThreeServicesSection from '@/app/(frontend)/components/homepage/TopThreeServices';

const HomePage = () => {
    return (
        <main className='mb-12 px-4 xl:container md:px-8 lg:px-12 xl:mx-auto xl:px-0'>
            <HeroSection />
            <TopThreeServicesSection />
            <TestimonialSection />
        </main>
    );
};

export default HomePage;
