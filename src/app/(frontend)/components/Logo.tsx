import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href='/'>
            <div className='logo flex flex-col items-center justify-center'>
                <div>
                    <Image className='size-18' src='/images/logo-2.png' alt='logo' width={100} height={100} />
                </div>
            </div>
        </Link>
    );
};

export default Logo;
