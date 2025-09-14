'use client';

import React from 'react';

import { cn } from '@/lib/utils';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'danger';
    className?: string; // For custom styles
    icon?: React.ReactNode; // For optional icons
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    type = 'button',
    variant = 'primary',
    className = '',
    icon,
    disabled = false
}) => {
    // Tailwind CSS classes based on the variant
    const baseClasses = `px-4 py-2 font-semibold focus:outline-none transition text-background`;
    const variantClasses = {
        primary: 'bg-text-white hover:bg-[#a82a32]',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        danger: 'bg-red-500 text-white hover:bg-red-600'
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(
                `text-base ${baseClasses} ${variantClasses[variant]} ${className}`,
                disabled && `cursor-not-allowed opacity-50`,
                ''
            )}>
            {icon && <span className='mr-2'>{icon}</span>}
            {text}
        </button>
    );
};

export default Button;
