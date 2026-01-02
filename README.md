# Trajter - Sculptor-Designed Furniture

Premium DTC pre-sale website for sculptor-designed glazed foam tables by Jakub Trajter.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **3D**: React Three Fiber + Drei
- **CMS**: Sanity
- **Payments**: Stripe
- **Email**: Resend + React Email
- **Package Manager**: bun

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Setup

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

### Sanity Setup

1. Create a Sanity project at [sanity.io/manage](https://sanity.io/manage)
2. Copy the Project ID and add to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
3. Create an API token with write access for seeding:
   - Go to API > Tokens > Add API Token
   - Give it Editor permissions
   - Add to `.env.local` as `SANITY_API_WRITE_TOKEN`
4. Seed initial content:
   ```bash
   npx sanity exec scripts/seed-sanity.ts --with-user-token
   ```
5. Access Sanity Studio at `/studio`

### Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Dashboard
3. Add to `.env.local`:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```
4. Create products and prices in Stripe Dashboard
5. Update the `stripePriceId` values in Sanity for each product tier
6. Set up webhook for `checkout.session.completed`:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```
   Add the webhook secret to `STRIPE_WEBHOOK_SECRET`

### Resend Setup

1. Create a Resend account at [resend.com](https://resend.com)
2. Get your API key and add to `.env.local`:
   ```
   RESEND_API_KEY=re_...
   ```
3. Verify your sending domain

## Project Structure

```
src/
  app/                    # Next.js pages
    (admin)/studio/       # Sanity Studio
    api/                  # API routes
    collection/           # Product pages
  components/
    layout/               # Navigation, Footer, Container
    motion/               # Animation components
    sections/             # Homepage sections
    three/                # 3D viewer
    ui/                   # UI primitives
  emails/                 # React Email templates
  lib/                    # Utilities and clients
  sanity/schemas/         # Sanity schema definitions
  server/actions/         # Server actions
```

## Pages

- `/` - Homepage with hero, product showcase, artist story
- `/collection` - Product grid
- `/collection/[slug]` - Product detail with 3D viewer
- `/about` - Artist biography
- `/pre-sale` - Tier selection and checkout
- `/studio` - Sanity Studio (CMS)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Stripe Webhooks in Production

Update webhook endpoint to your production URL in Stripe Dashboard.

## Development Notes

- 3D model: Currently uses placeholder geometry. Replace with actual GLTF model when ready.
- Images: Upload product and artist images via Sanity Studio.
- Pre-sale tiers: Inventory tracked in Sanity, not Stripe.
