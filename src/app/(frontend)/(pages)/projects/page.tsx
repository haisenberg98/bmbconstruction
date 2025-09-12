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

                    {/* Mobile and tablet view */}
                    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:hidden lg:hidden'>
                        {projects.docs.map((project) => (
                            <div key={project.id} className='transition-transform duration-500'>
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>

                    {/* Large screen view */}
                    <div className='hidden gap-8 md:grid lg:grid'>
                        {projects.docs.map((project, index) => {
                            const groupPosition = index % 3;

                            if (groupPosition === 0) {
                                return (
                                    <div key={project.id} className='grid grid-cols-12 gap-8'>
                                        <div className='col-span-8 col-start-2 transition-transform duration-500'>
                                            <ProjectCard {...project} />
                                        </div>
                                        <div className='col-span-12 grid grid-cols-12 gap-8'>
                                            {projects.docs[index + 1] && (
                                                <div className='col-span-5 transition-transform duration-500'>
                                                    <ProjectCard {...projects.docs[index + 1]} />
                                                </div>
                                            )}
                                            {projects.docs[index + 2] && (
                                                <div className='col-span-7 transition-transform duration-500'>
                                                    <ProjectCard {...projects.docs[index + 2]} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            }

                            return null;
                        })}
                    </div>
                </div>
            </div>
            <TestimonialSection />
        </main>
    );
}
