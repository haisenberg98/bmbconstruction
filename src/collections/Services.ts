import type { CollectionConfig } from 'payload';

export const Services: CollectionConfig = {
    slug: 'services',

    access: {
        read: () => true
    },
    fields: [
        {
            name: 'title',
            label: 'Service Title',
            type: 'text',
            required: true
        },
        {
            name: 'description',
            label: 'Service Description',
            type: 'textarea'
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text'
        },
        {
            name: 'serviceType',
            label: 'Service Type',
            type: 'text',
            required: true
        },
        {
            name: 'keyFeatures',
            label: 'Key Features',
            type: 'array',
            fields: [
                {
                    name: 'feature',
                    type: 'text'
                }
            ]
        },
        {
            name: 'testimonials',
            label: 'Testimonials',
            type: 'array',
            fields: [
                {
                    name: 'testimonial',
                    type: 'relationship',
                    relationTo: 'testimonials'
                }
            ]
        },
        {
            name: 'images',
            type: 'upload',
            relationTo: 'media',
            required: true,
            hasMany: true // This enables multiple images
        }
    ]
};