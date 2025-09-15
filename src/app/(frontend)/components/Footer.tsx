'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className='border-t border-gray-200 bg-gradient-to-t from-gray-50 to-white py-12'>
            <motion.div
                className='container mt-8 px-4 md:mx-auto md:flex md:max-w-5xl md:flex-row md:justify-between md:px-8'
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
                <motion.div
                    className='flex flex-col justify-between'
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}>
                    <Link href='/'>
                        <h2 className='mb-2 text-2xl font-bold'>
                            BMB <span className='text-primary'>CONSTRUCTION</span>
                        </h2>
                    </Link>
                    <p className='text-sm font-medium'>One call, one solution</p>

                    <nav className='my-6'>
                        <ul className='flex flex-col space-y-2 text-lg font-bold'>
                            <li>
                                <Link href='/projects' className='hover:underline hover:underline-offset-4'>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href='/about' className='hover:underline hover:underline-offset-4'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href='/contact' className='hover:underline hover:underline-offset-4'>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </motion.div>
                <motion.div
                    className='space-y-2 pt-10 md:pt-0'
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}>
                    <h4 className='mb-4 text-xl font-semibold'>BMB Construction & Services Ltd</h4>
                    <p>
                        <Link
                            href='mailto:johnny@bmbconstruction.co.nz'
                            className='hover:underline hover:underline-offset-4'>
                            johnny@bmbconstruction.co.nz
                        </Link>
                    </p>
                    <p>
                        <Link
                            href='tel:0220438005'
                            className='text-lg font-bold hover:underline hover:underline-offset-4'>
                            022 043 8005
                        </Link>
                    </p>
                    {/* <p className='text-sm'>Service Area: Auckland Wide</p> */}
                    <p>
                        <span className='hover:underline hover:underline-offset-4'>
                            © 2025 BMB Construction & Services Ltd.
                        </span>
                    </p>
                    <p>All rights reserved.</p>
                </motion.div>
            </motion.div>

            {/* Partner Section */}
            <motion.div
                className='container mt-8 border-t border-gray-200 px-4 pt-8 md:mx-auto md:max-w-5xl md:px-8'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}>
                <div className='flex flex-col items-center space-y-4'>
                    <p className='text-sm font-medium text-gray-600'>Licensed & Certified</p>
                    <div className='flex items-center justify-center'>
                        <Image
                            src='/images/certified-logo.png'
                            alt='Professional License Certificate'
                            width={120}
                            height={60}
                            className='opacity-80 transition-opacity duration-300 hover:opacity-100'
                        />
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
