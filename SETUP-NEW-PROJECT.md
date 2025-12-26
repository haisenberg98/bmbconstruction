# Setup Guide for New Project

This guide will help you set up a new project based on the BMB Construction template.

## 1. Copy the Project

```bash
# Copy the entire directory to a new location
cp -r bmbconstruction your-new-project-name
cd your-new-project-name
```

## 2. Update package.json

Open `package.json` and update:
- `"name"`: Change to your new project name
- `"website"`: Update to your new website name
- Remove or update version number

## 3. Clean Up Old Data

```bash
# Remove node_modules and reinstall
rm -rf node_modules
rm -rf .next
npm install
```

## 4. Update Environment Variables

Copy `.env.example` to `.env` and update all values:

```env
# Payload CMS
PAYLOAD_SECRET=your-new-secret-key-here

# MongoDB
DATABASE_URI=your-mongodb-connection-string

# Google Cloud Storage (if using)
GCS_PROJECT_ID=your-gcs-project-id
GCS_BUCKET=your-bucket-name
GCS_CLIENT_EMAIL=your-service-account-email
GCS_PRIVATE_KEY=your-private-key
GCS_PRIVATE_KEY_ID=your-private-key-id
GCS_TYPE=service_account
GCS_CLIENT_ID=your-client-id
GCS_TOKEN_URI=https://oauth2.googleapis.com/token
GCS_UNIVERSE_DOMAIN=googleapis.com
```

## 5. Update Project Content

### Update Branding and Content

1. **Update site metadata** in `src/app/(frontend)/layout.tsx`:
   - Page title
   - Description
   - Keywords

2. **Replace logo and images**:
   - Update logo in `public/images/logo.png`
   - Update favicon/icons
   - Update certified logo or remove it from Footer

3. **Update Footer** in `src/app/(frontend)/components/Footer.tsx`:
   - Company name
   - Email address
   - Phone number
   - Address (if needed)
   - Navigation links
   - Copyright year and company name

4. **Update Hero Section** in `src/app/(frontend)/components/homepage/HeroSection.tsx`:
   - Hero text/paragraph
   - Background image

5. **Update colors** in `src/app/(frontend)/globals.css`:
   - Update CSS custom properties for your brand colors

### Clear Old Database Collections

If you're using the same MongoDB instance:
1. Either create a new database (recommended)
2. Or manually delete old collections from Payload admin panel

## 6. Update Google Cloud Storage (Optional)

If using GCS:
1. Create a new GCS bucket for your project
2. Update the bucket name in `src/payload.config.ts`
3. Update environment variables with new credentials

If NOT using GCS, disable it in `src/payload.config.ts`:
- Comment out the `gcsStorage` import
- Comment out the `gcsStorage` plugin configuration

## 7. Create New Admin User

```bash
# Start the development server
npm run dev

# Go to http://localhost:3000/admin
# Create your first admin user
```

## 8. Customize Collections (Optional)

Update Payload collections in `src/collections/` based on your needs:
- `Projects.ts` - Project portfolio items
- `Services.ts` - Services offered
- `Testimonials.ts` - Client testimonials
- `Media.ts` - Media uploads

## 9. Git Setup

```bash
# Initialize new Git repository
rm -rf .git  # Remove old git history
git init
git add .
git commit -m "Initial commit from template"

# Add your remote
git remote add origin https://github.com/yourusername/your-new-project.git
git push -u origin main
```

## 10. Deploy

Update deployment settings:
- Vercel/Netlify environment variables
- Update domain settings
- Configure CDN if needed

## Key Files to Update

- [ ] `package.json` - Project name and details
- [ ] `.env` - All environment variables
- [ ] `src/app/(frontend)/layout.tsx` - Site metadata
- [ ] `src/app/(frontend)/components/Footer.tsx` - Contact info
- [ ] `src/app/(frontend)/components/homepage/HeroSection.tsx` - Hero content
- [ ] `src/app/(frontend)/globals.css` - Brand colors
- [ ] `public/images/` - Logo and images
- [ ] `CLAUDE.md` - Update project documentation
- [ ] `README.md` - Update project readme

## Tech Stack Reference

- **Frontend**: Next.js 15, React 19, TypeScript 5
- **CMS**: Payload CMS v3
- **Database**: MongoDB
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion, GSAP
- **Storage**: Google Cloud Storage (optional)

## Troubleshooting

### React Context Errors
- Make sure all components using hooks have `'use client'` directive
- Check that Header component has `'use client'`

### Image Loading Issues
- If using GCS: Check billing and credentials
- If using local: Images should be in `public/media/`

### Database Connection Issues
- Verify MongoDB URI is correct
- Check network access in MongoDB Atlas

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## Need Help?

Refer to:
- Next.js docs: https://nextjs.org/docs
- Payload CMS docs: https://payloadcms.com/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
