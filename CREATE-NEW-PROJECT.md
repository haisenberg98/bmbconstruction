# Creating a New Project from BMB Construction Template

This guide helps you create a **new separate project** for another company while keeping the BMB Construction project intact.

## Step 1: Copy the Project

```bash
# From the Projects directory
cd C:\Users\denny\Downloads\Projects

# Copy to new project (replace 'new-company-name' with actual name)
xcopy bmbconstruction new-company-name /E /I

# Navigate to new project
cd new-company-name
```

## Step 2: Clean Up New Project

```bash
# Remove old dependencies and cache
rm -rf node_modules
rm -rf .next

# Remove git history (start fresh)
rm -rf .git

# Install fresh dependencies
npm install
```

## Step 3: Update package.json

Open `package.json` and change:

```json
{
  "name": "new-company-name",
  "version": "1.0.0",
  "website": "New Company Name Ltd"
}
```

## Step 4: Create New Environment File

**IMPORTANT:** Create a **NEW** `.env` file with **DIFFERENT** values:

```bash
# Copy the example
cp .env.example .env
```

Then edit `.env`:

```env
# Generate a NEW secret (don't reuse BMB's secret!)
PAYLOAD_SECRET=generate-a-new-unique-secret-here

# Use a DIFFERENT MongoDB database
DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/new-company-db

# If using GCS, create a NEW bucket
GCS_PROJECT_ID=new-project-id
GCS_BUCKET=new-company-bucket
# ... other GCS credentials for the new project
```

## Step 5: Update Branding & Content

### A. Site Metadata (`src/app/(frontend)/layout.tsx`)

Update lines 24-42:

```typescript
export const metadata: Metadata = {
  title: "New Company Name - Your Tagline",
  description: "Description of your new company...",
  keywords: [
    "your",
    "new",
    "keywords",
  ],
};
```

### B. Footer (`src/app/(frontend)/components/Footer.tsx`)

Update:
- Company name (line 32-34)
- Email address (line 68-71)
- Phone number (line 74-78)
- Copyright (line 82-84)
- Navigation links (lines 40-55)

### C. Hero Section (`src/app/(frontend)/components/homepage/HeroSection.tsx`)

Update the hero text (lines 28-34):

```typescript
parallaxTextParagraph={
    <>
        Your new company description here...
        <br />
        Your tagline or additional info...
    </>
}
```

### D. Replace Images

```bash
# In the new project directory
# Replace these files with new company's images:
public/images/logo.png
public/images/certified-logo.png (or remove from Footer)
public/images/hero-bg.jpg (or whatever your hero image is)
```

### E. Update Colors (`src/app/(frontend)/globals.css`)

Update the color scheme for the new brand:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: YOUR_NEW_PRIMARY_COLOR;
  /* ... update other colors */
}
```

### F. Update Project Documentation

- Update `CLAUDE.md` with new project information
- Update `README.md` if you have one
- Delete or update `SETUP-NEW-PROJECT.md`

## Step 6: Update Payload CMS Config

In `src/payload.config.ts`:

1. Update GCS bucket name (line 49):
   ```typescript
   bucket: 'new-company-bucket',
   ```

2. Make sure all environment variables reference the new `.env` file

## Step 7: Clear Database & Start Fresh

### Option A: Use a Different Database (Recommended)

Update `DATABASE_URI` in `.env` to point to a **new database**. This keeps BMB Construction data separate.

### Option B: Use Same MongoDB, Different Database Name

In your MongoDB connection string, change the database name:
```
mongodb+srv://user:pass@cluster.mongodb.net/new-company-db
```

## Step 8: Initialize New Git Repository

```bash
# In the new project directory
git init
git add .
git commit -m "Initial commit - forked from BMB Construction template"

# Add your new remote
git remote add origin https://github.com/yourusername/new-company-project.git
git branch -M main
git push -u origin main
```

## Step 9: Create First Admin User

```bash
# Start the dev server
npm run dev

# Go to http://localhost:3000/admin
# Create the first admin user for the new company
```

## Step 10: Upload New Content

1. Upload new company images via Payload admin
2. Create new services
3. Add new projects/portfolio items
4. Add new testimonials

## Checklist

Use this checklist to ensure you've updated everything:

### Configuration
- [ ] `package.json` - Updated name and website
- [ ] `.env` - Created with NEW credentials (different database, new secrets)
- [ ] `src/payload.config.ts` - Updated GCS bucket name

### Branding
- [ ] `src/app/(frontend)/layout.tsx` - Updated metadata (title, description, keywords)
- [ ] `src/app/(frontend)/components/Footer.tsx` - Updated company info, contact details
- [ ] `src/app/(frontend)/components/homepage/HeroSection.tsx` - Updated hero text
- [ ] `src/app/(frontend)/globals.css` - Updated brand colors
- [ ] `public/images/logo.png` - Replaced with new logo
- [ ] `public/images/certified-logo.png` - Replaced or removed

### Database
- [ ] New MongoDB database created or using different database name
- [ ] First admin user created
- [ ] Old BMB Construction data not accessible

### Storage
- [ ] New GCS bucket created (if using cloud storage)
- [ ] OR configured for local storage

### Version Control
- [ ] Git history cleared (`rm -rf .git`)
- [ ] New git repository initialized
- [ ] Pushed to new remote repository

### Documentation
- [ ] `CLAUDE.md` - Updated project overview
- [ ] `README.md` - Updated if exists
- [ ] Removed or updated template-specific docs

## Important Notes

1. **Never reuse the same `PAYLOAD_SECRET`** - always generate a new one
2. **Use a different database** - don't mix data from different projects
3. **Create new GCS bucket** - don't share media storage between projects
4. **Test thoroughly** - Make sure there's no reference to BMB Construction

## Testing the New Project

After setup:
1. Start dev server: `npm run dev`
2. Visit `http://localhost:3000`
3. Check admin panel: `http://localhost:3000/admin`
4. Verify no BMB Construction branding appears
5. Test image uploads
6. Test all pages and functionality

## Original BMB Construction Project

Your original BMB Construction project remains at:
```
C:\Users\denny\Downloads\Projects\bmbconstruction
```

It is completely separate from your new project and continues to work independently.
