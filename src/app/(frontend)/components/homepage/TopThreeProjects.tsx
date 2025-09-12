//ini server component, jadi tidak bisa diakses langsung oleh client
import React from 'react';

import TopThreeProjectItems from '@/app/(frontend)/components/homepage/TopThreeProjectItems';
import config from '@payload-config';

import { getPayload } from 'payload';

const ProjectsSection = async () => {
    const payload = await getPayload({ config });

    const projects = await payload.find({
        collection: 'projects', // required
        depth: 2,

        limit: 3,
        pagination: false,
        where: {},
        sort: '-created_at'
    });

    return (
        <section id='projects-section' className='project-section'>
            <TopThreeProjectItems projects={projects} />
        </section>
    );
};

export default ProjectsSection;
