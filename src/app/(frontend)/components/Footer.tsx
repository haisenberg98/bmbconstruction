import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='border-t border-gray-200 bg-gradient-to-t from-gray-50 to-white py-12'>
            <div className='container mt-8 px-4 md:mx-auto md:flex md:max-w-5xl md:flex-row md:justify-between md:px-8'>
                <div className='flex flex-col justify-between'>
                    <Link href='/'>
                        <h2 className='mb-2 text-2xl font-bold'>
                            BMB <span className='text-primary'>CONSTRUCTION</span>
                        </h2>
                    </Link>
                    <p className='text-sm font-medium'>One call, one solution</p>

                    <nav className='my-6'>
                        <ul className='flex flex-col space-y-2 text-lg font-bold'>
                            <li>
                                <Link href='/projects' className='hover:underline hover:underline-offset-4'>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href='/about' className='hover:underline hover:underline-offset-4'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href='/contact' className='hover:underline hover:underline-offset-4'>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='space-y-2 pt-10 md:pt-0'>
                    <p className='mb-4 text-xl font-semibold'>BMB Construction & Services Ltd</p>
                    <p>
                        <Link
                            href='mailto:johnny@bmbconstruction.co.nz'
                            className='hover:underline hover:underline-offset-4'>
                            johnny@bmbconstruction.co.nz
                        </Link>
                    </p>
                    <p>
                        <Link
                            href='tel:0220438005'
                            className='text-lg font-bold hover:underline hover:underline-offset-4'>
                            022 043 8005
                        </Link>
                    </p>
                    {/* <p className='text-sm'>Service Area: Auckland Wide</p> */}
                    <p>
                        <span className='hover:underline hover:underline-offset-4'>
                            © 2025 BMB Construction & Services Ltd.
                        </span>
                    </p>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
