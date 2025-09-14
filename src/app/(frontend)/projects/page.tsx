import React from 'react';

import ProjectCard from '@/app/(frontend)/components/ProjectCard';
import ProjectsHeader from '@/app/(frontend)/components/projects/ProjectsHeader';
import MoreProjectsSection from '@/app/(frontend)/components/projects/MoreProjectsSection';
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
        <main className='mb-12 px-4 xl:container md:px-8 lg:px-12 xl:mx-auto xl:px-0'>
            <div className='pt-12'>
                <ProjectsHeader />

                {/* Mobile and tablet: simple responsive grid */}
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:hidden'>
                    {projects.docs.map((project) => (
                        <div key={project.id} className='transition-transform duration-300 hover:scale-[1.02]'>
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
                        <div className='mt-16'>
                            <MoreProjectsSection />
                            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                                {rest.map((project) => (
                                    <div
                                        key={project.id}
                                        className='transition-transform duration-300 hover:scale-[1.02]'>
                                        <ProjectCard {...project} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <TestimonialSection />
        </main>
    );
}
