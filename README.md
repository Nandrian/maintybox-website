# MaintyBox — STEP 02: Header & Navigation

Continues STEP 01 without replacing its design tokens, dependencies, or typography.

## Run locally (macOS)

Requires Node 20.19+ or 22.12+.

```bash
npm install
cp .env.example .env.local
# Add actual international WhatsApp number to .env.local
npm run dev
```

Open http://localhost:5173. Run `npm run build` to type-check and build.

## Design and behavior
- Agero-inspired spacious composition (interpretation; exact animations not verifiable).
- Desktop: wordmark, centered navigation, contact CTA. Mobile: overlay with Escape, focus wrapping, background scroll lock and route-close.
- Sticky 88px header with subtle border and shadow after scrolling.
- Reduced-motion option avoids animated transitions.
- If `VITE_WHATSAPP_NUMBER` is unset or invalid, CTA is non-clickable and displays configuration guidance rather than a fictitious number.
- Preview-only routes: `/`, `/portfolio`, `/services`, `/a-propos`, `/contact`.
- No hero, actual portfolio, actual service pages, footer, or contact page has been built.

## Deployment
SPA routes need a rewrite/fallback to index.html on DirectAdmin/Apache. A production hosting rewrite should be configured in the deployment step; it is not assumed by the Vite preview server.
