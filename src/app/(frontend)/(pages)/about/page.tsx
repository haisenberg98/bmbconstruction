import React from 'react';

import AboutHeroSection from '@/app/(frontend)/components/about/AboutHeroSection';
import AboutStorySection from '@/app/(frontend)/components/about/AboutStorySection';
import TeamSection from '@/app/(frontend)/components/about/TeamSection';
import ValuesSection from '@/app/(frontend)/components/about/ValuesSection';

export default function AboutPage() {
    return (
        <main className='mb-12 px-4 xl:container md:px-8 lg:px-12 xl:mx-auto xl:px-0'>
            <AboutStorySection />
            {/* <TeamSection /> */}
            <ValuesSection />
        </main>
    );
}
