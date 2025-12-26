# Setup New Project from Git Clone/Fork

This guide is for setting up a new project by cloning/forking the BMB Construction repository.

## Step 1: Clone or Fork the Repository

### Method A: Fork on GitHub (Recommended)
1. Go to BMB Construction repo on GitHub
2. Click **Fork** button
3. Name it for the new company
4. Clone locally:
```bash
cd C:\Users\denny\Downloads\Projects
git clone https://github.com/your-username/new-company-name.git
cd new-company-name
```

### Method B: Clone and Change Remote
```bash
cd C:\Users\denny\Downloads\Projects
git clone https://github.com/your-username/bmbconstruction.git new-company-name
cd new-company-name

# Change the remote
git remote set-url origin https://github.com/your-username/new-company-name.git
```

### Method C: Use as Template Repository
1. On GitHub: Settings → Check "Template repository"
2. When creating new repo: "Use this template"
3. Clone the new repo

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Configure Environment Variables

**CRITICAL:** Create a **NEW** `.env` file with **DIFFERENT** credentials

```bash
# Copy example
cp .env.example .env
```

Edit `.env`:
```env
# GENERATE NEW SECRET - Don't reuse BMB's!
PAYLOAD_SECRET=your-new-unique-secret-here-minimum-32-chars

# USE DIFFERENT DATABASE - Very important!
DATABASE_URI=mongodb+srv://user:pass@cluster.mongodb.net/new-company-db

# If using GCS, create NEW bucket and credentials
GCS_PROJECT_ID=new-project-id
GCS_BUCKET=new-company-bucket
GCS_CLIENT_EMAIL=service-account@new-project.iam.gserviceaccount.com
GCS_PRIVATE_KEY=your-new-private-key
GCS_PRIVATE_KEY_ID=your-new-key-id
GCS_TYPE=service_account
GCS_CLIENT_ID=your-new-client-id
GCS_TOKEN_URI=https://oauth2.googleapis.com/token
GCS_UNIVERSE_DOMAIN=googleapis.com
```

## Step 4: Update Project Files

### A. package.json
```json
{
  "name": "new-company-name",
  "version": "1.0.0",
  "website": "New Company Name Ltd",
}
```

### B. src/payload.config.ts
Line 49 - Update bucket name:
```typescript
bucket: 'new-company-bucket',
```

### C. src/app/(frontend)/layout.tsx
Lines 23-42 - Update metadata:
```typescript
export const metadata: Metadata = {
  title: "New Company Name - Your Service",
  description: "Your new company description...",
  keywords: ["your", "new", "keywords"],
};
```

### D. src/app/(frontend)/components/Footer.tsx
Update:
- Line 32-34: Company name
- Line 68-71: Email
- Line 74-78: Phone
- Line 82-84: Copyright
- Lines 40-55: Navigation links

### E. src/app/(frontend)/components/homepage/HeroSection.tsx
Lines 28-34: Update hero text

### F. src/app/(frontend)/globals.css
Update brand colors in `:root`

### G. Replace Images
```bash
# Replace these in public/images/
- logo.png
- certified-logo.png (or remove from Footer)
- Any other branding images
```

### H. Update CLAUDE.md
Update the project overview section with new company info

## Step 5: Commit Your Changes

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Configure for New Company Name - update branding and config"

# Push to your new repository
git push origin main
```

## Step 6: Set Up Database

You have two options:

### Option A: New MongoDB Database (Recommended)
- Create a new database in MongoDB Atlas
- Update `DATABASE_URI` in `.env` with new database name
- Keeps all data completely separate

### Option B: Same Cluster, Different Database
- In connection string, change database name:
  ```
  mongodb+srv://user:pass@cluster.mongodb.net/new-company-db
  ```

## Step 7: Set Up Cloud Storage (if using)

### If Using GCS:
1. Create new GCS project in Google Cloud Console
2. Create new bucket for new company
3. Create new service account
4. Download credentials JSON
5. Update all `GCS_*` variables in `.env`

### If Using Local Storage:
Comment out GCS in `src/payload.config.ts`:
```typescript
plugins: [
    payloadCloudPlugin(),
    // gcsStorage({ ... }) // Commented out
]
```

## Step 8: Start Development Server

```bash
npm run dev
```

Visit:
- Frontend: http://localhost:3000
- Admin: http://localhost:3000/admin

## Step 9: Create First Admin User

1. Go to http://localhost:3000/admin
2. Create your first admin user for the new company
3. Login and start adding content

## Complete Checklist

### Git & Dependencies
- [ ] Repository forked/cloned
- [ ] `npm install` completed
- [ ] New git remote configured (if needed)

### Configuration Files
- [ ] `.env` created with NEW values
- [ ] `PAYLOAD_SECRET` - generated NEW secret
- [ ] `DATABASE_URI` - points to NEW database
- [ ] `GCS_*` variables - NEW bucket/credentials
- [ ] `package.json` - updated name
- [ ] `payload.config.ts` - updated bucket name

### Branding
- [ ] `layout.tsx` - metadata updated
- [ ] `Footer.tsx` - company info updated
- [ ] `HeroSection.tsx` - hero text updated
- [ ] `globals.css` - colors updated
- [ ] Logo replaced
- [ ] Images replaced

### Database & Storage
- [ ] New MongoDB database created/configured
- [ ] New GCS bucket created (if using cloud storage)
- [ ] OR GCS disabled for local storage
- [ ] First admin user created

### Documentation
- [ ] `CLAUDE.md` updated
- [ ] `README.md` updated (if exists)

### Testing
- [ ] Dev server starts without errors
- [ ] Admin panel accessible
- [ ] No BMB Construction branding visible
- [ ] Image uploads work
- [ ] Database operations work

### Git
- [ ] Changes committed
- [ ] Pushed to new repository
- [ ] Old BMB Construction repo remains intact

## Key Differences from File Copy Method

| Aspect | Git Clone/Fork | File Copy |
|--------|----------------|-----------|
| Speed | ✅ Faster | ❌ Slower |
| Size | ✅ Smaller | ❌ Includes node_modules |
| Git History | ✅ Clean | ⚠️ Needs cleanup |
| Updates | ✅ Can pull template updates | ❌ Manual sync |
| Best Practice | ✅ Yes | ❌ Not recommended |

## Keeping Template Up to Date

If you want to pull future improvements from BMB Construction:

```bash
# Add BMB Construction as upstream
git remote add upstream https://github.com/your-username/bmbconstruction.git

# Fetch updates
git fetch upstream

# Merge updates (be careful with conflicts!)
git merge upstream/main
```

## Common Issues

### 1. Database Connection Error
- Make sure you created a NEW database
- Check MongoDB Atlas network access
- Verify connection string in `.env`

### 2. GCS Billing Error
- Create NEW GCS project/bucket
- Enable billing for new project
- Update all GCS credentials in `.env`

### 3. Seeing BMB Construction Content
- Clear `.next` folder: `rm -rf .next`
- Make sure `.env` points to NEW database
- Restart dev server

### 4. Port Already in Use
- BMB Construction might be running on port 3000
- Stop it or use different port: `npm run dev -- -p 3001`

## Original BMB Construction

Your original BMB Construction repo remains at:
```
https://github.com/your-username/bmbconstruction
```

Local copy (if you have one):
```
C:\Users\denny\Downloads\Projects\bmbconstruction
```

Both projects are completely independent.
