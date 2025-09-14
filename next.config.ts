import type { NextConfig } from 'next';

import initializeBundleAnalyzer from '@next/bundle-analyzer';
import { withPayload } from '@payloadcms/next/withPayload';

// https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true'
});

// https://nextjs.org/docs/pages/api-reference/next-config-js
const nextConfig: NextConfig = {
    serverExternalPackages: ['framer-motion', 'motion-dom', 'motion-utils', 'gsap'],
    images: {
        // domains: ['localhost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com'
            }
        ],
        unoptimized: true
    }
};

export default withPayload(withBundleAnalyzer(nextConfig));
