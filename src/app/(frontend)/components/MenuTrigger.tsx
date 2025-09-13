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
        <button
            className={cn('hamburger-btn', isOpen && 'open')}
            onClick={handleOpenMenu}
            aria-label="Toggle menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default NavMenuTrigger;
