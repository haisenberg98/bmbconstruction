'use client';

import React from 'react';

import Logo from '@/app/(frontend)/components/Logo';
import Menu from '@/app/(frontend)/components/Menu';
import MenuContent from '@/app/(frontend)/components/MenuContent';

const Header = () => {
    return (
        <>
            <header className='header flex items-center justify-between px-4 pb-12 pt-6 xl:container md:px-8 xl:mx-auto xl:px-0'>
                <Logo />
                <Menu />
            </header>
            <MenuContent />
        </>
    );
};

export default Header;
