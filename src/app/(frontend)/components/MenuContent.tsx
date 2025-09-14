'use client';

import React from 'react';

import Link from 'next/link';

// Zustand
import { useMenuStore } from '@/lib/store';
import { cn } from '@/lib/utils';

const NavMenuContent = () => {
    // Zustand state and actions
    const { isOpen, setMenuManual } = useMenuStore();

    const handleLinkClick = () => {
        setMenuManual(false); // Close the menu
    };

    return (
        <nav className={cn('menu', isOpen && 'open')}>
            <div className='menu-content flex h-full flex-col items-center justify-center'>
                {/* menu */}
                <ul className='flex flex-col items-center justify-center space-y-8 text-3xl !text-background'>
                    <li>
                        <Link
                            href='/projects'
                            className='py-2 text-3xl hover:underline hover:underline-offset-4'
                            onClick={handleLinkClick}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/about'
                            className='py-2 text-3xl hover:underline hover:underline-offset-4'
                            onClick={handleLinkClick}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/contact'
                            className='py-2 text-3xl hover:underline hover:underline-offset-4'
                            onClick={handleLinkClick}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavMenuContent;
