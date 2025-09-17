'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MoreServicesSection = () => {
    return (
        <div className='mb-8 text-center'>
            <motion.h2
                className='text-3xl font-bold text-primary md:text-4xl'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}>
                More Services
            </motion.h2>
            <motion.p
                className='mt-4 text-lg opacity-80'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}>
                Explore our comprehensive range of construction services
            </motion.p>
        </div>
    );
};

export default MoreServicesSection;