import type { CollectionConfig } from 'payload';

export const Testimonials: CollectionConfig = {
    slug: 'testimonials',
    access: {
        read: () => true
    },
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true
        },

        {
            name: 'quote',
            label: 'Quote',
            type: 'textarea',
            required: true
        },
        {
            name: 'company',
            label: 'Company',
            type: 'text'
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media'
        }
    ]
};
