import config from '@payload-config';

import { getPayload } from 'payload';

const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;

export default async function sitemap() {
    // Initialize Payload
    const payload = await getPayload({ config });

    // Fetch services
    const services = await payload.find({
        collection: 'services',
        depth: 2,
        pagination: false,
        sort: '-created_at'
    });

    // Generate service URLs
    const servicePages =
        services.docs?.map((service) => ({
            url: `${baseUrl}/services/${service.slug}`,
            lastModified: service.updatedAt,
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
        ...servicePages
    ];
}
