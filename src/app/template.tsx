import type { ReactNode } from 'react';

import { Inter, Montserrat } from 'next/font/google';

import Footer from '@/app/(frontend)/components/Footer';
import Header from '@/app/(frontend)/components/Header';
import '@/app/(frontend)/globals.css';

import { ToastContainer } from 'react-toastify';

//primary (body, span, p) - Inter for modern readability
const inter = Inter({
    weight: ['400', '500', '600'],
    variable: '--font-inter',
    subsets: ['latin']
});

//secondary (heading) - Montserrat for strong, geometric feel
const montserrat = Montserrat({
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-montserrat',
    subsets: ['latin']
});

const Template = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <div className={`${inter.variable} ${montserrat.variable} bg-background text-foreground antialiased`}>
            <Header />
            {children}
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Template;