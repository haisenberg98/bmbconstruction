import DirectorCard from '@/app/(frontend)/components/about/DirectorCard';
import PartnersSection from '@/app/(frontend)/components/about/PartnerSection';
import TeamPicture from '@/app/(frontend)/components/about/TeamPicture';
import ValuesSection from '@/app/(frontend)/components/about/ValuesSection';

export default function AboutPage() {
    return (
        <main
            id='about-page'
            className='mb-12 px-4 py-6 xl:container md:px-8 lg:space-y-16 lg:px-12 xl:mx-auto xl:space-y-24 xl:px-0'>
            <p>
                BMB Construction and Services Ltd is an Auckland-based company with over 30 years of combined trade
                experience, known for delivering high-quality workmanship and reliable service in the construction,
                renovation, and property maintenance sector. We are committed to providing a &quot;one call, one
                solution&quot; approach for all your building needs.
            </p>

            <section
                id='our-director'
                className='container mx-auto my-12 flex flex-col space-y-8 lg:max-w-6xl lg:flex-row lg:space-x-16 lg:space-y-0'>
                <div className='w-full'>
                    <h2 className='mb-4 text-2xl font-semibold'>Our Team</h2>
                    <DirectorCard
                        name='Johnny - BMB Construction'
                        email='johnny@bmbconstruction.co.nz'
                        phone='022 043 8005'
                        about='With over 30 years of combined trade experience, our team at BMB Construction delivers smart design, thorough project management, and personal service that is often missing in larger firms. We specialize in comprehensive renovation and building solutions throughout Auckland.'
                    />
                </div>
                {/* <div className='w-full'>
                    <h2 className='mb-4 text-2xl font-semibold'>Our Team</h2>
                    <TeamPicture
                        src='/images/team.webp'
                        alt='Our Team'
                        caption='Our dedicated team working together to achieve greatness'
                    />
                </div> */}
            </section>

            <ValuesSection />

            {/* <PartnersSection /> */}
        </main>
    );
}
