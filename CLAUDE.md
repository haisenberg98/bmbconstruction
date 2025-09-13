# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BMB Construction & Services Ltd is a construction company website built with Next.js 15, React 19, and Payload CMS. The site showcases construction projects, testimonials, and provides contact functionality with cloud storage integration.

## Architecture

**Tech Stack:**
- **Frontend:** Next.js 15 (App Router), React 19, TypeScript 5
- **CMS:** Payload CMS v3 with Lexical rich text editor
- **Database:** MongoDB (via Mongoose adapter)
- **Storage:** Google Cloud Storage for media files
- **Styling:** Tailwind CSS 3
- **Authentication:** Built-in Payload admin system

**App Structure:**
- `src/app/(frontend)/` - Public-facing website pages and components
- `src/app/(payload)/` - Payload CMS admin interface and API routes
- `src/collections/` - Payload CMS collection definitions (Users, Projects, Testimonials, Media)
- `src/lib/` - Shared utilities and helpers

**Key Configuration:**
- Payload CMS config: `src/payload.config.ts`
- Next.js config: `next.config.ts` (includes Payload integration and GCS image optimization)
- Path aliases: `@/*` maps to `src/*`, `@payload-config` maps to payload config

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting and formatting
npm run lint          # Run ESLint
npm run lint:fix      # Auto-fix ESLint issues
npm run format        # Format code with Prettier
```

## Environment Setup

Required environment variables (see `.env.example`):
- `PAYLOAD_SECRET` - Secret key for Payload CMS
- `DATABASE_URI` - MongoDB connection string
- `GCS_*` variables - Google Cloud Storage credentials for media uploads

## CMS Collections

The Payload CMS includes these collections:
- **Users** - Admin users for CMS access
- **Projects** - Construction project portfolio items
- **Testimonials** - Client testimonials
- **Media** & **MediaWithPrefix** - File uploads with GCS storage

Access admin panel at `/admin` after running the dev server.

## Fonts & Styling

- **Primary font:** Josefin Sans (body text, spans, paragraphs)
- **Secondary font:** Oswald (headings)
- **CSS Framework:** Tailwind CSS with custom variables for fonts
- **Components:** Basic component library in `src/app/(frontend)/components/`

## Deployment

- Configured for standalone output (`output: 'standalone'` in next.config.ts)
- Dockerfile provided for containerized deployment
- Bundle analyzer available via `BUNDLE_ANALYZER_ENABLED=true`

## Development Notes

- ESLint 9 flat config with comprehensive rule set
- Prettier with import sorting and Tailwind class sorting
- VS Code settings optimized for TypeScript and formatting
- Payload CMS generates TypeScript types automatically to `payload-types.ts`