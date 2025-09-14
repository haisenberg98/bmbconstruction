import React from 'react';

import Image from 'next/image';

const AboutStorySection = () => {
    return (
        <section>
            {/* Section Header */}
            <div className='mb-16 text-center'>
                <h1 className='mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-6xl'>Our Story</h1>
                <p className='mx-auto max-w-3xl text-lg md:text-xl'>
                    Building Auckland&apos;s future with passion, precision, and decades of expertise.
                </p>
            </div>

            {/* Story Content */}
            <div className='mx-auto max-w-6xl'>
                <div className='space-y-12'>
                    <div>
                        <h2 className='mb-4 text-2xl font-bold text-primary md:text-3xl'>
                            Over 30 Years of Excellence
                        </h2>
                        <p className='text-lg leading-relaxed'>
                            BMB Construction and Services Ltd is an Auckland-based company with over 30 years of
                            combined trade experience, known for delivering high-quality workmanship and reliable
                            service in the construction, renovation, and property maintenance sector.
                        </p>
                    </div>

                    <div>
                        <h3 className='mb-4 text-xl font-semibold text-primary'>One Call, One Solution</h3>
                        <p className='text-lg leading-relaxed'>
                            We are committed to providing a &quot;one call, one solution&quot; approach for all your
                            building needs. Our comprehensive services eliminate the hassle of coordinating multiple
                            contractors, giving you peace of mind and exceptional results.
                        </p>
                    </div>

                    <div>
                        <h3 className='mb-4 text-xl font-semibold text-primary'>Personal Service</h3>
                        <p className='text-lg leading-relaxed'>
                            Our team delivers smart design, thorough project management, and personal service that is
                            often missing in larger firms. We specialize in comprehensive renovation and building
                            solutions throughout Auckland.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStorySection;
