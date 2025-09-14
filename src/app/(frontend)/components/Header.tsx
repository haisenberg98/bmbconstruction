import React from 'react';

import Logo from '@/app/(frontend)/components/Logo';
import Menu from '@/app/(frontend)/components/Menu';
import MenuContent from '@/app/(frontend)/components/MenuContent';

const Header = () => {
    return (
        <>
            <header className='header flex justify-between px-6 pb-20 pt-8 xl:container md:px-10 xl:mx-auto xl:px-0'>
                <Logo />
                <Menu />
            </header>
            <MenuContent />
        </>
    );
};

export default Header;
