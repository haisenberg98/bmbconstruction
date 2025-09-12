import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/'],
            disallow: ['/admin/*']
        },
        sitemap: `${baseUrl}/sitemap.xml`
    };
}
