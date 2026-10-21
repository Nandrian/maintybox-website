import { ArrowUpRight, Check, MoveUpRight } from 'lucide-react';
import { Button } from '../components/Button';
import { palette } from '../data/palette';

export default function DesignSystemPreview() {
  return (
    <main>
      <section className="bg-primary text-light py-12 md:py-18">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/30 pb-6">
            <span className="font-display text-2xl font-bold tracking-[-.06em]">maintybox<span className="text-accent">.</span></span>
            <span className="type-label text-white/85">Design system / Step 01</span>
          </div>
          <div className="pt-16 pb-10 md:pt-22 md:pb-18">
            <p className="type-label mb-7 text-white/85">Creative studio · Visual foundations</p>
            <h1 className="type-display max-w-[1100px]">Du caractère.<br /><span className="text-accent">Du sens.</span></h1>
            <p className="mt-8 max-w-xl text-lg text-white/90">Une base visuelle expressive, accessible et cohérente pour le futur site MaintyBox.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/85"><Check size={17} /> Prévisualisation uniquement — aucune page finale</div>
        </div>
      </section>

      <section className="section-space container-site" aria-labelledby="palette-title">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div><p className="type-label text-primary mb-4">01 / Couleurs</p><h2 id="palette-title" className="type-h2">Palette officielle</h2></div>
          <p className="max-w-sm text-muted">Quatre couleurs de marque, préservées à l'identique.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {palette.map((color) => (
            <div key={color.hex} className="overflow-hidden rounded-2xl border border-border">
              <div style={{ backgroundColor: color.hex }} className={`flex h-44 items-end p-5 ${color.text}`}><span className="font-display text-xl font-semibold">{color.hex}</span></div>
              <div className="p-5"><h3 className="font-display text-xl font-semibold">{color.name}</h3><p className="mt-1 type-small text-muted">{color.role}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface section-space" aria-labelledby="type-title">
        <div className="container-site">
          <p className="type-label text-primary mb-4">02 / Typographie</p>
          <h2 id="type-title" className="type-h2 mb-10">Une voix éditoriale.</h2>
          <div className="grid gap-9 border-t border-border pt-10">
            <div><p className="type-label text-muted mb-3">Display · Space Grotesk</p><p className="type-display break-words">Design with purpose.</p></div>
            <div><p className="type-label text-muted mb-3">H1</p><p className="type-h1">Une identité qui marque.</p></div>
            <div><p className="type-label text-muted mb-3">H2</p><p className="type-h2">Créativité & clarté.</p></div>
            <div><p className="type-label text-muted mb-3">H3</p><p className="type-h3">Chaque détail compte.</p></div>
            <div className="max-w-2xl"><p className="type-label text-muted mb-3">Body · DM Sans</p><p>Le design donne une forme claire aux idées. Nous construisons une expérience visuelle cohérente, avec une attention particulière à la lisibilité, aux contrastes et aux détails.</p></div>
            <div><p className="type-label text-muted mb-3">Small / Label</p><p className="type-small mb-2">Texte secondaire pour informations complémentaires.</p><p className="type-label text-primary">STRATÉGIE · IDENTITÉ · DIGITAL</p></div>
          </div>
        </div>
      </section>

      <section className="section-space container-site" aria-labelledby="button-title">
        <p className="type-label text-primary mb-4">03 / Composants</p>
        <h2 id="button-title" className="type-h2 mb-4">Boutons & interactions.</h2>
        <p className="mb-9 text-muted">Styles réutilisables. Ces boutons sont des exemples visuels et ne lancent aucune action.</p>
        <div className="flex flex-wrap gap-4">
          <Button>Primary <ArrowUpRight size={18} /></Button>
          <Button variant="secondary">Secondary <MoveUpRight size={18} /></Button>
          <Button variant="accent">Accent <ArrowUpRight size={18} /></Button>
        </div>
        <div className="mt-12 rounded-2xl bg-secondary p-7 md:p-10"><p className="type-label mb-3">Responsive preview</p><p className="type-h3 max-w-2xl">Une grille adaptable, du mobile au grand écran.</p></div>
      </section>
    </main>
  );
}
