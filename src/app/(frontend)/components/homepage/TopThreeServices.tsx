//ini server component, jadi tidak bisa diakses langsung oleh client
import React from 'react';

import TopThreeServiceItems from '@/app/(frontend)/components/homepage/TopThreeServiceItems';
import config from '@payload-config';

import { getPayload } from 'payload';

const ServicesSection = async () => {
    const payload = await getPayload({ config });

    const services = await payload.find({
        collection: 'services', // required
        depth: 2,

        limit: 3,
        pagination: false,
        where: {},
        sort: 'createdAt'
    });

    return (
        <section id='services-section' className='service-section'>
            <TopThreeServiceItems services={services} />
        </section>
    );
};

export default ServicesSection;