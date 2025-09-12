import Image from 'next/image';

const partners = [
    { name: 'Partner 1', logo: '/images/partner.webp' },
    { name: 'Partner 2', logo: '/images/partner.webp' },
    { name: 'Partner 3', logo: '/images/partner.webp' },
    { name: 'Partner 4', logo: '/images/partner.webp' }
];

export default function PartnersSection() {
    return (
        <section id='our-partners' className='mt-12'>
            <h2 className='mb-4 text-2xl font-semibold'>Our Partners</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                {partners.map((partner, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            width={400}
                            height={200}
                            className='shadow-md'
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
