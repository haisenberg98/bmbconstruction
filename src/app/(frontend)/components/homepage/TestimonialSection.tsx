import React from 'react';

import TestimonialSliders from '@/app/(frontend)/components/homepage/TestimonialSliders';
import config from '@payload-config';

import { getPayload } from 'payload';

const TestimonialSection = async () => {
    const payload = await getPayload({ config });

    const testimonials = await payload.find({
        collection: 'testimonials',
        depth: 2,
        limit: 5,
        pagination: false,
        sort: '-created_at'
    });

    return <TestimonialSliders testimonials={testimonials} />;
};

export default TestimonialSection;
