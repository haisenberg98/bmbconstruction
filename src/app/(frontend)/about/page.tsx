import React from 'react';

import AboutStorySection from '@/app/(frontend)/components/about/AboutStorySection';
import ValuesSection from '@/app/(frontend)/components/about/ValuesSection';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
    return (
        <main className='mb-12 px-4 xl:container md:px-8 lg:px-12 xl:mx-auto xl:px-0'>
            <AboutStorySection />
            {/* <TeamSection /> */}
            <ValuesSection />
        </main>
    );
}
