'use client';

import { useState } from 'react';

import Image from 'next/image';

import { ChevronDown, ChevronUp } from 'lucide-react';

interface DirectorCardProps {
    name: string;
    email: string;
    phone: string;
    about: string;
}

export default function DirectorCard({ name, email, phone, about }: DirectorCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='overflow-hidden shadow-md'>
            <div className='flex flex-col'>
                <div className='flex justify-center'>
                    <Image
                        src='/images/don.jpeg'
                        alt={`director logo`}
                        width={400}
                        height={550}
                        className='h-[430px] w-[320px] justify-center pb-4 lg:h-[550px] lg:w-[420px]'
                    />
                </div>
                <div className='grid grid-cols-2'>
                    <h3 className='mb-2 text-lg font-semibold md:text-xl'>{name}</h3>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='flex items-center border border-white bg-transparent px-2 text-xs outline-none transition-colors md:text-sm'>
                            CONTACT
                            {isOpen ? <ChevronUp className='ml-2 size-4' /> : <ChevronDown className='ml-2 size-4' />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className='py-4'>
                        <a href={`mailto:${email}`} className='mb-2 block hover:underline'>
                            {email}
                        </a>
                        <a href={`tel:${phone}`} className='block hover:underline'>
                            {phone}
                        </a>
                    </div>
                )}
                <p className='mb-4 py-4'>{about}</p>
            </div>
        </div>
    );
}
