# MaintyBox — Step 01

React + Vite + TypeScript + Tailwind CSS v4 + GSAP + React Router + Lucide React.

## Setup (macOS)

Prerequisite: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

Check before deploying:

```bash
npm run typecheck
npm run build
npm run preview
```

`dist/` is the static build output. `base: './'` uses relative asset URLs. For future client-side deep routes hosted on DirectAdmin/Apache, configure a fallback to `index.html` or use an appropriate routing strategy. No deep routes exist in Step 01.

## Status

This template was prepared in an environment without npm registry access. Dependencies and build have **not** been verified by running `npm install` or `npm run build`. Run the commands above on your Mac to validate. Version ranges in package.json are intended compatible major versions, not a generated lockfile.

## Brand tokens

Official: Primary `#006A6E`, Light `#FFFFFF`, Secondary `#6BAB90`, Accent `#F2C14E`.

Fonts: Space Grotesk for editorial headlines, DM Sans for body.

GSAP plugin registration is in `src/animations/gsap.ts`; no animations are created at this step.
