# Corporate Website Frontend

A corporate website frontend built with Next.js using a clean App Router structure, reusable UI modules, locale-prefixed routing, and localized mock content.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- `next-intl`
- Embla Carousel
- Formik

## Folder Structure

```text
.
|-- public/
|-- src/
|   |-- app/
|   |-- i18n/
|   |-- lib/
|   |-- messages/
|   |-- services/
|   |-- strapi/
|   |-- types/
|   `-- ui/
|       |-- components/
|       |-- layouts/
|       `-- views/
|-- package.json
`-- README.md
```

## Main Folders

- `src/app`: route files, app shell, global loading, error, and not-found handling
- `src/ui/views`: route-level views
- `src/ui/layouts`: shared layout modules such as header and footer
- `src/ui/components`: reusable UI components for home and services
- `src/services`: app-facing service layer
- `src/strapi`: localized mock CMS-style content and content service layer
- `src/types`: shared TypeScript types
- `src/lib`: shared utilities
- `src/messages`: locale message files

## Implemented Features

- Locale-prefixed routing for English and Arabic
- Root redirect from `/` to `/en`
- Sticky transparent header with solid background on scroll
- Header navigation with localized labels and services dropdown
- Hero carousel on the home page
- Our Team carousel section on the home page
- Customers testimonial carousel section on the home page
- Shared footer with subscribe, contacts, and navigation areas
- Footer subscribe form with Formik and duplicate email checking in local state
- Global branded not-found page
- Global loading state
- Slug-based service detail pages
- Localized service detail content for all current service slugs
- Mock Strapi-style content structure for English and Arabic

## Run Locally

```bash
pnpm install
pnpm dev
```
