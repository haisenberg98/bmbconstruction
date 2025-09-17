// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { gcsStorage } from '@payloadcms/storage-gcs';

import { Media } from './collections/Media';
import { MediaWithPrefix } from './collections/MediaWithPrefix';
import { Projects } from './collections/Projects';
import { Services } from './collections/Services';
import { Testimonials } from './collections/Testimonials';
import { Users } from './collections/Users';
import { mediaSlug, mediaWithPrefixSlug, prefix } from './shared';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,

        importMap: {
            baseDir: path.resolve(dirname)
        }
    },
    collections: [Users, Media, Projects, Services, Testimonials, MediaWithPrefix],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts')
    },
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || ''
    }),
    sharp,
    plugins: [
        payloadCloudPlugin(),
        gcsStorage({
            collections: {
                [mediaSlug]: true,
                [mediaWithPrefixSlug]: {
                    prefix
                }
            },
            bucket: 'bmb-construction-bucket',
            acl: 'Public',
            options: {
                projectId: process.env.GCS_PROJECT_ID,
                credentials: {
                    client_email: process.env.GCS_CLIENT_EMAIL,
                    private_key: process.env.GCS_PRIVATE_KEY,
                    private_key_id: process.env.GCS_PRIVATE_KEY_ID,
                    type: process.env.GCS_TYPE,
                    project_id: process.env.GCS_PROJECT_ID,
                    client_id: process.env.GCS_CLIENT_ID,
                    token_url: process.env.GCS_TOKEN_URI,
                    universe_domain: process.env.GCS_UNIVERSE_DOMAIN
                }
            }
        })
    ]
});
