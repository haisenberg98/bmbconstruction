import Link from 'next/link';
import { notFound } from 'next/navigation';

//components
import ProjectGallery from '@/app/(frontend)/components/projects/ProjectGallery';
import TestimonialCard from '@/app/(frontend)/components/projects/TestimonialCard';
import { Media, Project, Testimonial } from '@/payload-types';
import config from '@payload-config';

import { getPayload } from 'payload';

const mapImages = (images: (string | Media)[] = []) => {
    return images
        .filter((data): data is Media => typeof data !== 'string' && data.filename !== undefined) // Ensure it's a Media object
        .map((data, id) => ({
            key: id,
            src: data.filename || '/placeholder-image.jpg', // Fallback to a placeholder image if filename is undefined
            alt: data.alt || 'Project Image', // Use the alt text, or a fallback
            width: data.width || 400,
            height: data.height || 300
        }));
};

async function getProjectBySlug(slug: string): Promise<Project> {
    const payload = await getPayload({ config });

    const project = await payload.find({
        collection: 'projects', // required
        depth: 2,
        pagination: false, // If you want to disable pagination count, etc.
        where: { slug: { equals: slug } }, // Correctly structured `where` clause
        sort: '-created_at'
    });

    return project.docs[0];
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetails({ params }: PageProps) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    // Extract and filter testimonials
    const testimonials = (project.testimonials || []).filter(
        (t): t is { testimonial: Testimonial } => t.testimonial !== null && typeof t.testimonial !== 'string'
    );

    const imageComponents = mapImages(project.images || []);

    return (
        <main id='project-details' className='py-6'>
            <div className='overflow-hidden shadow-lg'>
                <div className='container mx-auto px-4'>
                    <Link
                        href='/projects'
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
                        Back to Projects
                    </Link>
                    <h1 className='mb-4 mt-12 text-3xl font-bold'>{project.title}</h1>

                    <div className='mb-12'>
                        <p>{project.description}</p>
                    </div>

                    {(project.keyFacts || []).length > 0 && (
                        <div className='mb-12'>
                            <h2 className='mb-2 text-lg font-semibold'>Key Facts</h2>
                            <div className='space-y-1'>
                                {(project.keyFacts || []).map((fact, id) => (
                                    <ul key={id} className='flex list-none'>
                                        <li className='w-full bg-secondary p-3'>{fact?.fact}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className='container mb-6'>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                            <ProjectGallery imageComponents={imageComponents} />
                        </div>
                    </div>
                </div>

                {testimonials.length > 0 && (
                    <div className='mt-12'>
                        <section className='mt-4 grid grid-cols-1 gap-8 md:grid-cols-2'>
                            {testimonials.map((testimonial, id) => (
                                <div key={id}>
                                    <TestimonialCard {...testimonial.testimonial} />
                                </div>
                            ))}
                        </section>
                    </div>
                )}
            </div>
        </main>
    );
}
