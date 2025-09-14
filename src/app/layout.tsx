import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'BMB Construction & Services Ltd',
    description: 'Professional construction services in Auckland'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}