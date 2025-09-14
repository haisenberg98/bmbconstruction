import React from 'react';

import Link from 'next/link';

import ProjectCard from '@/app/(frontend)/components/ProjectCard';
import TestimonialSection from '@/app/(frontend)/components/homepage/TestimonialSection';
import config from '@payload-config';

import { getPayload } from 'payload';

export default async function ProjectList() {
    const payload = await getPayload({ config });

    const projects = await payload.find({
        collection: 'projects',
        depth: 2,
        pagination: false,
        sort: '-created_at'
    });

    const firstThree = projects.docs.slice(0, 3);
    const rest = projects.docs.slice(3);

    return (
        <main id='projects-page' className='mb-12 px-4 xl:container md:px-8 lg:px-12 xl:mx-auto xl:px-0'>
            <div className='mb-12 w-full pt-8'>
                <div className='space-y-8'>
                    <p>
                        Checkout our projects and see the quality of our work. We take pride in our work and strive to
                        make our clients happy with the results.
                    </p>
                    <div className='mb-8 flex items-center justify-between'>
                        <h1>Our Projects</h1>
                        {/* arrow left */}
                        <Link
                            href='/'
                            className='group inline-flex items-center text-lg font-semibold underline-offset-4 hover:underline hover:opacity-80'>
                            <svg
                                className='mr-2 size-4 transform transition-transform duration-200 group-hover:-translate-x-1'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M10 19l-7-7m0 0l7-7m-7 7h18'
                                />
                            </svg>
                            Back
                        </Link>
                    </div>

                    {/* Mobile and tablet: simple responsive grid */}
                    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:hidden'>
                        {projects.docs.map((project) => (
                            <div key={project.id} className='transition-transform duration-500'>
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>

                    {/* Desktop: copy homepage layout for first three */}
                    <div className='hidden md:grid md:gap-12 lg:gap-16'>
                        {/* First item centered */}
                        {firstThree[0] && (
                            <div className='grid-cols-12 gap-12 md:grid lg:gap-16'>
                                <div className='col-span-8 col-start-3 lg:col-span-6 lg:col-start-4'>
                                    <ProjectCard {...firstThree[0]} />
                                </div>
                            </div>
                        )}

                        {/* Second and third staggered like homepage */}
                        {(firstThree[1] || firstThree[2]) && (
                            <div className='grid-cols-12 gap-8 md:grid lg:gap-12'>
                                {firstThree[1] && (
                                    <div className='col-span-5'>
                                        <ProjectCard {...firstThree[1]} />
                                    </div>
                                )}
                                {firstThree[2] && (
                                    <div className='col-span-6 col-start-7 md:pt-16 lg:pt-20'>
                                        <ProjectCard {...firstThree[2]} />
                                    </div>
                                )}
                            </div>
                        )}

                        {/* If more than 3, show a clean grid for the rest */}
                        {rest.length > 0 && (
                            <div className='mt-4'>
                                <h2 className='mb-6 text-2xl font-semibold'>More Projects</h2>
                                <div className='grid grid-cols-12 gap-8'>
                                    {rest.map((project) => (
                                        <div key={project.id} className='col-span-6 lg:col-span-4'>
                                            <ProjectCard {...project} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <TestimonialSection />
        </main>
    );
}
