# Generic Site Template

A reusable site starter built with Next.js App Router, React, TypeScript, and Tailwind CSS v4. The included Fieldwork content is demo content intended to be replaced for each real project.

## Included

- Responsive homepage with hero, featured products, benefits, FAQ, and calls to action
- Sticky header with desktop navigation and an accessible mobile menu
- Breadcrumb navigation and reusable page sections
- Local typed product catalog
- About and contact pages
- Responsive footer with navigation and contact details
- Tailwind CSS v4 theme tokens
- ESLint and Prettier with Tailwind class sorting
- Vercel-ready Next.js configuration

This template does not include a CMS, API, database, checkout, authentication, analytics, or contact-form submission backend.

## Requirements

- Node.js 20.9.0 or later
- npm

The repository does not pin an exact Node.js version. Use a current supported Node.js LTS release.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev          # Start the development server
npm run build        # Create a production build
npm run start        # Serve the production build
npm run lint         # Run ESLint
npm run format       # Format files with Prettier
npm run format:check # Check formatting without changing files
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Main page with hero, featured products, benefits, FAQ, and CTA |
| `/products` | Full local product catalog |
| `/about` | Story, principles, and team/about content |
| `/contact` | Contact information, address, and opening hours |

Product cards currently link to anchors on `/products`. There are no product-detail routes yet.

## Project Structure

```text
src/
	app/
		about/page.tsx       About route
		contact/page.tsx     Contact route
		products/page.tsx    Product catalog route
		globals.css          Tailwind theme and global styles
		layout.tsx           Metadata and shared application shell
		page.tsx             Homepage
	components/
		breadcrumb.tsx       Accessible breadcrumb navigation
		footer.tsx           Shared footer
		header.tsx           Sticky site header
		mobile-menu.tsx      Client-side mobile navigation
		product-card.tsx     Product card UI
		product-feed.tsx     Product grid
		section.tsx           Shared page-section layout
	lib/
		products.ts          Typed local product data
public/                   Static assets
```

The `@/*` TypeScript alias resolves to `src/*`, so imports can use paths such as `@/components/header` and `@/lib/products`.

## Customization

### Brand and metadata

Update [src/app/layout.tsx](src/app/layout.tsx) to change:

- Site name and title template
- Default description
- Document language, currently `pt-BR`
- Shared header, main, and footer structure

Replace the Fieldwork name, copy, contact details, address, phone number, email address, and currency before publishing.

### Pages and components

Edit the route files in [src/app](src/app) for page-specific copy and sections. Shared UI belongs in [src/components](src/components), so changes to the header, footer, breadcrumbs, or product cards can be reused across routes.

### Product catalog

Edit [src/lib/products.ts](src/lib/products.ts) to replace the sample catalog. Each product implements:

```ts
type Product = {
	slug: string;
	name: string;
	category: string;
	description: string;
	price: string;
	mark: string;
	color: string;
};
```

The current catalog is static and local. Replace it with a server-side data source only when the project has a defined API or CMS contract.

### Styling

Theme colors and global behavior are defined in [src/app/globals.css](src/app/globals.css). This project uses Tailwind CSS v4's CSS-first configuration through `@import "tailwindcss"` and `@theme`; it does not require a `tailwind.config.js` file.

Preserve the existing semantic landmarks, visible focus states, keyboard-accessible mobile menu, and reduced-motion behavior when customizing the UI.

### Assets and SEO

Add local images, logos, fonts, and social preview assets under `public/` or an appropriate `src` directory. Use `next/image` for content images and update route metadata for each real page. Add an absolute production URL and Open Graph metadata when the brand and deployment URL are known.

## Deployment

Import the repository into [Vercel](https://vercel.com/) or deploy it to another platform that supports Next.js. The default build command is:

```bash
npm run build
```

No environment variables are currently required. Add and document them here when introducing a CMS, API, form provider, analytics, or other external service.

## License

This template is available under the [MIT License](LICENSE). Keep the license and copyright notice when redistributing it.
