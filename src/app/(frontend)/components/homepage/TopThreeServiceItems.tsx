'use client';

// ini client component karena kita pakai 'use client', jadi bisa diakses langsung oleh client
import React from 'react';

// next imports
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// components
import Button from '@/app/(frontend)/components/Button';
import ServiceCard from '@/app/(frontend)/components/ServiceCard';
// types
import { Service } from '@/payload-types';

import { motion } from 'framer-motion';
// eslint-disable-next-line import/named
import { PaginatedDocs } from 'payload';

const TopThreeServiceItems = ({ services }: { services: PaginatedDocs<Service> }) => {
    const router = useRouter();
    // console.log(services);

    return (
        <>
            <div className='pt-32'>
                <div className='mb-6 flex flex-col space-y-4 sm:mb-8 sm:space-y-6'>
                    {/* Title and View More Link */}
                    <motion.div
                        className='flex items-center justify-between'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}>
                        <h1 className='mb-0'>Services</h1>
                        <Link
                            href='/services'
                            className='group inline-flex items-center text-lg font-semibold underline-offset-4 hover:underline hover:opacity-80'>
                            View More
                            <svg
                                className='ml-2 size-4 transform transition-transform duration-200 group-hover:translate-x-1'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                                />
                            </svg>
                        </Link>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className='max-w-3xl opacity-80 sm:text-lg md:text-xl'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}>
                        These are the services we offer. We are proud of our expertise and the quality solutions we
                        provide to our clients.
                    </motion.p>
                </div>

                {/* Mobile Services Grid */}
                <motion.div
                    className='space-y-8 md:hidden'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}>
                    {services.docs.slice(0, 3).map((service, index) => (
                        <motion.div
                            key={service.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}>
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Desktop Services Grid - Visible only on md and larger */}
                <div className='hidden md:grid md:gap-12 lg:gap-16'>
                    {/* First service - full width */}
                    {services.docs[0] && (
                        <div className='grid-cols-12 gap-12 md:grid lg:gap-16'>
                            <div className='col-span-8 col-start-3 lg:col-span-6 lg:col-start-4'>
                                <ServiceCard {...services.docs[0]} />
                            </div>
                        </div>
                    )}

                    {/* Second and third services with staggered layout */}
                    <div className='relative grid-cols-12 gap-8 md:grid lg:gap-12'>
                        {/* Second service */}
                        {services.docs[1] && (
                            <div className='col-span-5'>
                                <ServiceCard {...services.docs[1]} />
                            </div>
                        )}

                        {/* Third service - positioned lower */}
                        {services.docs[2] && (
                            <div className='col-span-6 col-start-7 md:pt-16 lg:pt-20'>
                                <ServiceCard {...services.docs[2]} />
                            </div>
                        )}
                    </div>
                </div>

                {/* More Services Button */}
                <div className='mt-8 flex justify-center'>
                    <Button
                        onClick={() => router.push('/services')}
                        text='More Services'
                        variant='primary'
                        className='group relative inline-flex items-center'
                    />
                </div>
            </div>
        </>
    );
};

export default TopThreeServiceItems;
