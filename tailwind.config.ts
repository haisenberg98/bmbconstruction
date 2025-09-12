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
                primary: ['var(--font-josefin-sans)'], //body text, paragraph etc
                secondary: ['var(--font-oswald)'] //heading etc
                // third: ['var(--font-teritary)'],// if you need third font
            }
        }
    },
    plugins: []
};
export default config;
