import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)'
            },
            fontFamily: {
                primary: ['var(--font-open-sans)'], //body text, paragraph etc - Open Sans for readability
                secondary: ['var(--font-work-sans)'] //heading etc - Work Sans for technical, clean feel
                // third: ['var(--font-teritary)'],// if you need third font
            }
        }
    },
    plugins: []
};
export default config;
