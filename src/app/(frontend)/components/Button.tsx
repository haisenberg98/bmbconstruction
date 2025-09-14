'use client';

import React from 'react';

import { motion } from 'framer-motion';
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
    const baseClasses = `px-6 py-3 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 text-background shadow-sm`;
    const variantClasses = {
        primary: 'bg-primary hover:bg-gray-800 focus:ring-gray-500 hover:shadow-md',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400'
    };

    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(
                `text-base ${baseClasses} ${variantClasses[variant]} ${className}`,
                disabled && `cursor-not-allowed opacity-50`,
                ''
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {icon && <span className='mr-2'>{icon}</span>}
            {text}
        </motion.button>
    );
};

export default Button;
