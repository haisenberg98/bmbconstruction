import React from 'react';

import HeroSection from '@/app/(frontend)/components/homepage/HeroSection';
import TestimonialSection from '@/app/(frontend)/components/homepage/TestimonialSection';
import TopThreeProjectSection from '@/app/(frontend)/components/homepage/TopThreeProjects';

const HomePage = () => {
    return (
        <main className='mb-16 px-6 xl:container md:px-10 lg:px-16 xl:mx-auto xl:px-0'>
            <HeroSection />
            <TopThreeProjectSection />
            <TestimonialSection />
        </main>
    );
};

export default HomePage;
