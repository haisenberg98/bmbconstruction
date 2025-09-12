import type { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
    slug: 'projects',

    access: {
        read: () => true
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea'
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text'
        },
        {
            name: 'buildingType',
            label: 'Building Type',
            type: 'text',
            required: true
        },
        {
            name: 'keyFacts',
            label: 'Key Facts',
            type: 'array',
            fields: [
                {
                    name: 'fact',
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
