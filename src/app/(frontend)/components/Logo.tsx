import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href='/'>
            <div className='logo flex flex-col items-center justify-center'>
                <div>
                    <Image className='size-18' src='/images/logo.png' alt='logo' width={100} height={100} />
                </div>
                <span className='pt-4 text-xs uppercase'>BMB Construction</span>
            </div>
        </Link>
    );
};

export default Logo;
