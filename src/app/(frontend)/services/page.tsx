import React from 'react';

import ServiceCard from '@/app/(frontend)/components/ServiceCard';
import TestimonialSection from '@/app/(frontend)/components/homepage/TestimonialSection';
import ServicesHeader from '@/app/(frontend)/components/services/ServicesHeader';
import config from '@payload-config';

import { getPayload } from 'payload';

export default async function ServiceList() {
    const payload = await getPayload({ config });

    const services = await payload.find({
        collection: 'services',
        depth: 2,
        pagination: false,
        sort: 'createdAt'
    });

    // Group services into sets of 3 for the repeating pattern
    const groupedServices = [];
    for (let i = 0; i < services.docs.length; i += 3) {
        groupedServices.push(services.docs.slice(i, i + 3));
    }

    return (
        <main className='mb-20 px-4 xl:container md:px-8 lg:px-12 xl:mx-auto xl:px-0'>
            <ServicesHeader />

            {/* Mobile and tablet: simple responsive grid */}
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:hidden'>
                {services.docs.map((service) => (
                    <div key={service.id} className='transition-transform duration-300 hover:scale-[1.02]'>
                        <ServiceCard {...service} />
                    </div>
                ))}
            </div>

            {/* Desktop: repeat the same layout pattern for all services */}
            <div className='hidden md:grid md:gap-12 lg:gap-16'>
                {groupedServices.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className={`space-y-12 lg:space-y-16 ${groupIndex > 0 ? 'mt-16 lg:mt-20' : ''}`}>
                        {/* First item centered */}
                        {group[0] && (
                            <div className='grid-cols-12 gap-12 md:grid lg:gap-16'>
                                <div className='col-span-8 col-start-3 lg:col-span-6 lg:col-start-4'>
                                    <ServiceCard {...group[0]} />
                                </div>
                            </div>
                        )}

                        {/* Second and third staggered */}
                        {(group[1] || group[2]) && (
                            <div className='grid-cols-12 gap-8 md:grid lg:gap-12'>
                                {group[1] && (
                                    <div className='col-span-5'>
                                        <ServiceCard {...group[1]} />
                                    </div>
                                )}
                                {group[2] && (
                                    <div className='col-span-6 col-start-7 md:pt-16 lg:pt-20'>
                                        <ServiceCard {...group[2]} />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <TestimonialSection />
        </main>
    );
}
