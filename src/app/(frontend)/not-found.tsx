import React from 'react';

import Link from 'next/link';

const NotFound = () => {
    return (
        <main className='mb-10 flex min-h-screen justify-center bg-background py-4 pb-16 md:mb-20 lg:mb-0'>
            <div className='container mx-auto flex flex-col pt-20 text-center'>
                <h1 className='text-4xl font-bold'>404</h1>
                <div className='flex justify-center'>
                    <span>Page not found.</span>
                    <Link href='/'>
                        <span className='text-customPrimary ml-2 cursor-pointer'>Go back</span>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
