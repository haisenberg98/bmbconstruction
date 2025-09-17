import React from 'react';

import ServiceCard from '@/app/(frontend)/components/ServiceCard';
import TestimonialSection from '@/app/(frontend)/components/homepage/TestimonialSection';
import MoreServicesSection from '@/app/(frontend)/components/services/MoreServicesSection';
import ServicesHeader from '@/app/(frontend)/components/services/ServicesHeader';
import config from '@payload-config';

import { getPayload } from 'payload';

export default async function ServiceList() {
    const payload = await getPayload({ config });

    const services = await payload.find({
        collection: 'services',
        depth: 2,
        pagination: false,
        sort: '-created_at'
    });

    const firstThree = services.docs.slice(0, 3);
    const rest = services.docs.slice(3);

    return (
        <main className='mb-12 px-4 xl:container md:px-8 lg:px-12 xl:mx-auto xl:px-0'>
            <ServicesHeader />

            {/* Mobile and tablet: simple responsive grid */}
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:hidden'>
                {services.docs.map((service) => (
                    <div key={service.id} className='transition-transform duration-300 hover:scale-[1.02]'>
                        <ServiceCard {...service} />
                    </div>
                ))}
            </div>

            {/* Desktop: copy homepage layout for first three */}
            <div className='hidden md:grid md:gap-12 lg:gap-16'>
                {/* First item centered */}
                {firstThree[0] && (
                    <div className='grid-cols-12 gap-12 md:grid lg:gap-16'>
                        <div className='col-span-8 col-start-3 lg:col-span-6 lg:col-start-4'>
                            <ServiceCard {...firstThree[0]} />
                        </div>
                    </div>
                )}

                {/* Second and third staggered like homepage */}
                {(firstThree[1] || firstThree[2]) && (
                    <div className='grid-cols-12 gap-8 md:grid lg:gap-12'>
                        {firstThree[1] && (
                            <div className='col-span-5'>
                                <ServiceCard {...firstThree[1]} />
                            </div>
                        )}
                        {firstThree[2] && (
                            <div className='col-span-6 col-start-7 md:pt-16 lg:pt-20'>
                                <ServiceCard {...firstThree[2]} />
                            </div>
                        )}
                    </div>
                )}

                {/* If more than 3, show a clean grid for the rest */}
                {rest.length > 0 && (
                    <div className='mt-16'>
                        <MoreServicesSection />
                        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                            {rest.map((service) => (
                                <div key={service.id} className='transition-transform duration-300 hover:scale-[1.02]'>
                                    <ServiceCard {...service} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <TestimonialSection />
        </main>
    );
}