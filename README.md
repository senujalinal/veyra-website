# Veyra website

The marketing and legal website for Veyra, a customizable browser new-tab workspace.

## Included

- Responsive landing page with product showcase, feature comparison, reviews, pricing and FAQ
- Privacy, terms, cookie, refund, licence and support pages
- Search and social metadata
- GitHub Actions checks for every pull request and main-branch update

## Managing the slideshow

Add image files to `public/slides`, then add or remove their entries in `data/slides.ts`. The landing page will automatically include every item in that list and rotate through them every 4.8 seconds.

## Local development

Use Node.js 22 or newer.

```bash
npm install
npm run dev
```

Before accepting payments, connect the pricing buttons to the real checkout URLs and have the legal pages reviewed for the final business and payment setup.
