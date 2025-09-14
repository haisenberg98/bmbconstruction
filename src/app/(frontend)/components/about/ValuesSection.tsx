'use client';

import { motion } from 'framer-motion';

const values = [
    {
        title: 'Integrity',
        description: 'Standing by work quality and honest communication in every project we undertake.'
    },
    {
        title: 'Attention to Detail',
        description: 'Committing to thorough workmanship and finishing tasks to the highest standard.'
    },
    {
        title: 'Reliability',
        description:
            'Completing projects on time and within budget, with a two-year general defects guarantee for peace of mind.'
    },
    {
        title: 'Client-Focused',
        description:
            'Tailoring solutions and maintaining a personal approach, ensuring each project meets your unique needs.'
    }
];

export default function ValuesSection() {
    return (
        <section className='py-32'>
            {/* Section Header */}
            <div className='mb-16 text-center'>
                <motion.h1
                    className='mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-6xl'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Our Values
                </motion.h1>
                <motion.p
                    className='mx-auto max-w-3xl text-lg md:text-xl'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    The principles that guide every project and define our commitment to excellence.
                </motion.p>
            </div>

            {/* Values Grid */}
            <motion.div
                className='grid gap-8 md:grid-cols-2 lg:gap-12'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}>
                {values.map((value, index) => (
                    <motion.div
                        key={index}
                        className='group rounded-lg border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-gray-200 hover:shadow-lg'
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                        <div className='mb-6'>
                            <h3 className='text-xl font-semibold text-primary md:text-2xl'>{value.title}</h3>
                        </div>
                        <p className='text-lg leading-relaxed'>{value.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
