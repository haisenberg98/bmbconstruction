'use client';

// ini client component karena kita pakai 'use client', jadi bisa diakses langsung oleh client
import React from 'react';

// next imports
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// components
import Button from '@/app/(frontend)/components/Button';
import ProjectCard from '@/app/(frontend)/components/ProjectCard';
// types
import { Project } from '@/payload-types';

// eslint-disable-next-line import/named
import { PaginatedDocs } from 'payload';

const TopThreeProjectItems = ({ projects }: { projects: PaginatedDocs<Project> }) => {
    const router = useRouter();
    // console.log(projects);

    return (
        <>
            <div className='pt-12'>
                <div className='mb-6 flex flex-col space-y-4 sm:mb-8 sm:space-y-6'>
                    {/* Title and View More Link */}
                    <div className='flex items-center justify-between'>
                        <h1>Projects</h1>
                        <Link
                            href='/projects'
                            className='group inline-flex items-center text-lg font-semibold underline-offset-4 hover:underline hover:opacity-80'>
                            View More
                            <svg
                                className='ml-2 size-4 transform transition-transform duration-200 group-hover:translate-x-1'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* Description */}
                    <p className='max-w-3xl opacity-80 sm:text-lg md:text-xl'>
                        This is a list of projects that we have worked on. We are proud of the work we have done and the
                        relationships we have built with our clients.
                    </p>
                </div>

                {/* Projects Grid - Visible only on md and larger */}
                <div className='md:grid md:gap-8'>
                    {/* First project - full width */}
                    {projects.docs[0] && (
                        <div className='grid-cols-12 gap-8 md:grid'>
                            <div className='col-span-8 col-start-4'>
                                <ProjectCard {...projects.docs[0]} />
                            </div>
                        </div>
                    )}

                    {/* Second and third projects with staggered layout */}
                    <div className='relative grid-cols-12 gap-8 md:grid'>
                        {/* Second project */}
                        {projects.docs[1] && (
                            <div className='col-span-6 lg:col-span-5'>
                                <ProjectCard {...projects.docs[1]} />
                            </div>
                        )}

                        {/* Third project - positioned lower */}
                        {projects.docs[2] && (
                            <div className='col-span-6 md:grid md:pt-16 lg:col-span-7 lg:pt-24'>
                                <ProjectCard {...projects.docs[2]} />
                            </div>
                        )}
                    </div>
                </div>

                {/* More Projects Button */}
                <div className='mt-8 flex justify-center'>
                    <Button
                        onClick={() => router.push('/projects')}
                        text='More Projects'
                        variant='primary'
                        className='group relative inline-flex items-center'
                    />
                </div>
            </div>
        </>
    );
};

export default TopThreeProjectItems;
