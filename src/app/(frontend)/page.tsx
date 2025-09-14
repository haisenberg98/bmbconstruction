import React from 'react';
export const dynamic = "force-dynamic";
import HeroSection from '@/app/(frontend)/components/homepage/HeroSection';
import TestimonialSection from '@/app/(frontend)/components/homepage/TestimonialSection';
import TopThreeProjectSection from '@/app/(frontend)/components/homepage/TopThreeProjects';

const HomePage = () => {
    return (
        <main className='mb-12 px-4 xl:container md:px-8 lg:px-12 xl:mx-auto xl:px-0'>
            <HeroSection />
            <TopThreeProjectSection />
            <TestimonialSection />
        </main>
    );
};

export default HomePage;
