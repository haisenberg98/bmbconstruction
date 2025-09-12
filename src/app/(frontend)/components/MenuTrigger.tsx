'use client';

import React from 'react';

//zustand
import { useMenuStore } from '@/lib/store';
import { cn } from '@/lib/utils';

const NavMenuTrigger = () => {
    //zustand state
    const { isOpen, setMenuOpen } = useMenuStore();

    const handleOpenMenu = () => {
        setMenuOpen();
    };

    return (
        <div className='hamburger-menu flex items-center justify-center'>
            <input
                id='hamburger-menu'
                type='checkbox'
                className={cn(`hamburger-menu-checkbox`, isOpen && 'open')}
                onClick={handleOpenMenu}
            />
            <label htmlFor='hamburger-menu' className={cn(`hamburger-menu-label`, isOpen && 'open')}>
                <span></span>
            </label>
        </div>
    );
};

export default NavMenuTrigger;
