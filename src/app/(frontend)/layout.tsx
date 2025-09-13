import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Work_Sans, Open_Sans } from 'next/font/google';

import Footer from '@/app/(frontend)/components/Footer';
import Header from '@/app/(frontend)/components/Header';
import '@/app/(frontend)/globals.css';

import { ToastContainer } from 'react-toastify';

//primary (body, span, p) - Open Sans for readability
const openSans = Open_Sans({
    weight: ['400', '600'],
    variable: '--font-open-sans',
    subsets: ['latin']
});

//secondary (heading) - Work Sans for technical, clean feel
const workSans = Work_Sans({
    weight: ['400', '500', '600', '700'],
    variable: '--font-work-sans',
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
            <body className={`${openSans.variable} ${workSans.variable} bg-background text-foreground antialiased`}>
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
