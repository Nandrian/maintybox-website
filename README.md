# MaintyBox — STEP 03: Hero Section

Continuation of STEP 02. Contains only an original editorial homepage Hero, with existing Header and minimal route placeholders.

## Run on macOS

```bash
npm install
cp .env.example .env.local
# Set VITE_WHATSAPP_NUMBER in .env.local if you use WhatsApp
npm run dev
```

Check with `npm run typecheck` and `npm run build`. No hero images or client assets were copied from Agero. The abstract hero artwork uses only MaintyBox brand tokens and CSS/SVG. ScrollTrigger remains registered for later steps; the hero entrance uses `useGSAP` with reduced-motion support. WhatsApp CTA is disabled safely when no number is configured.

## STEP 03 changes

- Added `src/components/hero/Hero.tsx`
- Added `src/components/hero/hero.css`
- Modified `src/App.tsx` to render `<Hero />` at `/`
- Kept STEP 02 Header/navigation and other route placeholders unchanged.

The Agero-inspired editorial headline and floating artwork layout are original interpretations, not pixel-verified animation recreations.
