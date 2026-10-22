# MaintyBox — STEP 03

Home One preserved. Only HeaderOne and Home One Hero were adapted, with scoped CSS. Original template assets are reused from `public/assets/img/hero/`.

- Navigation: `/`, `/portfolio-two-columns`, `/service`, `/about`, `/contact` (existing template routes).
- Availability is hidden by default; set `VITE_AVAILABLE_FOR_PROJECTS=true` in `.env.local` only when true.
- Optional WhatsApp URL is available in the mobile menu if `VITE_WHATSAPP_NUMBER` is configured; main contact buttons lead to existing `/contact` route until STEP 05.
- Other Home One sections remain unchanged, including demo content; they are NOT yet suitable to publish as MaintyBox testimonials/claims.

```bash
cp .env.example .env.local
npm install
npm run dev
npm run build
```
