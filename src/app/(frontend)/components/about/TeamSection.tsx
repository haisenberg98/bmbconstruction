import React from 'react';

import DirectorCard from '@/app/(frontend)/components/about/DirectorCard';

const TeamSection = () => {
    return (
        <section className='py-24'>
            {/* Section Header */}
            <div className='mb-16 text-center'>
                <h1 className='mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-6xl'>Meet Our Team</h1>
                <p className='mx-auto max-w-3xl text-lg text-primary md:text-xl'>
                    The dedicated professionals behind every successful project, bringing decades of experience and
                    passion to your construction needs.
                </p>
            </div>

            {/* Team Member */}
            <div className='mx-auto max-w-4xl'>
                <div className='rounded-lg bg-white p-8 shadow-lg'>
                    <DirectorCard
                        name='Johnny - BMB Construction'
                        email='johnny@bmbconstruction.co.nz'
                        phone='022 043 8005'
                        about='With over 30 years of combined trade experience, our team at BMB Construction delivers smart design, thorough project management, and personal service that is often missing in larger firms. We specialize in comprehensive renovation and building solutions throughout Auckland.'
                    />
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
