# MaintyBox — Home One (restauration du design original)

Cette version restaure la structure d’origine du template Parody **Home One** (menu latéral à gauche, logo au centre, recherche et bouton à droite, hero à trois lignes, images inline, marquee, bandeau final).

Seuls les textes de marque, le mot-symbole provisoire du header, les polices et les couleurs configurées dans STEP 02 sont adaptés. Aucune nouvelle Hero ni barre de navigation horizontale n’est ajoutée.

## Exécution

```bash
npm install
npm run dev
npm run build
```

Cette archive ne contient pas `node_modules`. Le build a déjà été confirmé sur le projet précédent par l’utilisateur mais **pas exécuté ici** sur cette révision.

## Fichiers ajustés
- `src/layouts/headers/HeaderOne.tsx`
- `src/layouts/headers/Menu/Offcanvas.tsx`
- `src/components/homes/home-one/Hero.tsx`
- `src/styles/maintybox-brand.scss`

La forme et la géométrie du template sont conservées, de même que les autres sections et la navigation latérale.
