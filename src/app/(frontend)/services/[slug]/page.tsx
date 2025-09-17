import Link from 'next/link';
import { notFound } from 'next/navigation';

//components
import ServiceGallery from '@/app/(frontend)/components/services/ServiceGallery';
import TestimonialCard from '@/app/(frontend)/components/projects/TestimonialCard';
import { Media, Service, Testimonial } from '@/payload-types';
import config from '@payload-config';

import { getPayload } from 'payload';

const mapImages = (images: (string | Media)[] = []) => {
    return images
        .filter((data): data is Media => typeof data !== 'string' && data.url !== undefined) // Ensure it's a Media object with url
        .map((data, id) => ({
            key: id,
            src: data.url || '/placeholder-image.jpg', // Use the full URL instead of filename
            alt: data.alt || 'Service Image', // Use the alt text, or a fallback
            width: data.width || 400,
            height: data.height || 300
        }));
};

async function getServiceBySlug(slug: string): Promise<Service> {
    const payload = await getPayload({ config });

    const service = await payload.find({
        collection: 'services', // required
        depth: 2,
        pagination: false, // If you want to disable pagination count, etc.
        where: { slug: { equals: slug } }, // Correctly structured `where` clause
        sort: '-created_at'
    });

    return service.docs[0];
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ServiceDetails({ params }: PageProps) {
    const { slug } = await params;
    const service = await getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    // Extract and filter testimonials
    const testimonials = (service.testimonials || []).filter(
        (t): t is { testimonial: Testimonial } => t.testimonial !== null && typeof t.testimonial !== 'string'
    );

    const imageComponents = mapImages(service.images || []);

    return (
        <main id='service-details' className='mb-12 px-4 xl:container md:px-8 lg:px-12 xl:mx-auto xl:px-0'>
            <div>
                <Link
                    href='/services'
                    className='group mb-4 inline-flex items-center text-lg font-semibold underline-offset-4 hover:underline hover:opacity-80'>
                    <svg
                        className='mr-2 size-4 transform transition-transform duration-200 group-hover:-translate-x-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 19l-7-7m0 0l7-7m-7 7h18'
                        />
                    </svg>
                    Back to Services
                </Link>
                <h1 className='mb-4 mt-12 text-3xl font-bold'>{service.title}</h1>

                <div className='mb-12'>
                    <p>{service.description}</p>
                </div>

                {(service.keyFeatures || []).length > 0 && (
                    <div className='mb-12 rounded-lg border border-gray-100 bg-white p-6'>
                        <h2 className='mb-4 text-lg font-semibold text-primary'>Key Features</h2>
                        <div className='space-y-3'>
                            {(service.keyFeatures || []).map((feature, id) => (
                                <div key={id} className='flex items-start gap-3'>
                                    <p className='leading-relaxed text-gray-700'>{feature?.feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className='container mb-6'>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                        <ServiceGallery imageComponents={imageComponents} />
                    </div>
                </div>
            </div>

            {testimonials.length > 0 && (
                <div className='my-8'>
                    <div className='container mx-auto'>
                        <h2 className='mb-6 text-center text-2xl font-bold text-primary md:text-3xl'>
                            Client Testimonials
                        </h2>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
                            {testimonials.map((testimonial, id) => (
                                <div key={id} className='h-full'>
                                    <TestimonialCard {...testimonial.testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}