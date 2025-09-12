import config from '@payload-config';

import { getPayload } from 'payload';

const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;

export default async function sitemap() {
    // Initialize Payload
    const payload = await getPayload({ config });

    // Fetch projects
    const projects = await payload.find({
        collection: 'projects',
        depth: 2,
        pagination: false,
        sort: '-created_at'
    });

    // Generate project URLs
    const projectPages =
        projects.docs?.map((project) => ({
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: project.updatedAt,
            priority: 0.8
        })) || [];

    // Return the sitemap
    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            priority: 1
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            priority: 0.9
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            priority: 0.9
        },
        ...projectPages
    ];
}
