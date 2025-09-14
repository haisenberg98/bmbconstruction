import type { ReactNode } from 'react';

import type { Metadata } from 'next';
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

export const metadata: Metadata = {
    title: 'BMB Construction & Services Ltd - Auckland Builder',
    description: 'BMB Construction and Services Ltd - Auckland-based company with over 30 years of combined trade experience. One call, one solution for building, renovations, and property maintenance.',
    keywords: [
        'construction',
        'builder',
        'auckland',
        'renovation',
        'property maintenance',
        'residential builds',
        'kitchen renovation',
        'bathroom renovation',
        'villa restoration',
        'heritage homes',
        'project management',
        'insurance work',
        'bmb construction',
        'auckland builder'
    ]
};

//TODO
/*
 */

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <head></head>
            <body className={`${inter.variable} ${montserrat.variable} bg-background text-foreground antialiased`}>
                <Header />
                {/* main content */}
                {children}
                <Footer />
                <ToastContainer />
            </body>
        </html>
    );
};

export default Layout;
