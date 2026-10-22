# MaintyBox — nettoyage Home One

Base : version MaintyBox « original layout » (structure Parody Home One conservée).

## Supprimé
- Home Two à Home Seven et variantes alternatives de homepage (pages et composants).
- Pages Blog, Blog Sidebar et Blog Details, composants Blog et données de blog.
- Section Blog de la homepage Home One.
- Liens Blog et anciennes homepages du menu.

## Conservé
- Home One, HeaderOne, Hero, sections restantes, GSAP, styles Sass, images et actifs du template.
- Les routes Portfolio, Services, À propos, Contact et autres pages internes, pour éviter des changements hors périmètre.
- Les styles Sass communs, même s'ils contiennent des classes de démos : ils sont partagés par le template.

## Vérification locale
```bash
npm install
npm run build
npm run dev
```

Les fichiers media dans public/assets/ ne sont pas supprimés lors de ce passage prudent : certains peuvent être partagés.

Deux composants anciennement stockés sous Home Five/Seven sont déplacés vers `src/components/common/` car les pages About/Service en dépendent.
