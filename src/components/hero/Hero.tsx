import { useRef } from 'react';
import { ArrowDownRight, ArrowUpRight, Asterisk } from 'lucide-react';
import { Link } from 'react-router';
import { gsap, useGSAP } from '../../animations/gsap';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import './hero.css';

/** STEP 03 — standalone hero; no other homepage content. */
export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const whatsapp = getWhatsAppUrl();

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.85 }, delay: 0.18 });
    timeline
      .fromTo('[data-hero-reveal]', { y: 38, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.095, clearProps: 'all' })
      .fromTo('.hero-artwork', { y: 30, scale: 0.96, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: 1.05, clearProps: 'all' }, 0.22)
      .fromTo('.hero-bottom', { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, clearProps: 'all' }, 0.7);
  }, { scope: root });

  return (
    <main id="main-content">
      <section className="hero" ref={root} aria-labelledby="hero-title">
        <div className="container-site hero-container">
          <div className="hero-topline" data-hero-reveal>
            <span className="hero-kicker"><span className="hero-kicker-dot" aria-hidden="true" /> STUDIO CRÉATIF INDÉPENDANT</span>
            <span className="hero-index">IDENTITÉ · DIGITAL · EXPÉRIENCE</span>
          </div>

          <div className="hero-stage">
            <div className="hero-copy">
              <h1 className="hero-title" id="hero-title">
                <span className="hero-title-line" data-hero-reveal>Des idées</span>
                <span className="hero-title-line hero-title-primary" data-hero-reveal>fortes<span className="hero-title-period">.</span></span>
                <span className="hero-title-line" data-hero-reveal>Des designs</span>
                <span className="hero-title-line hero-title-last" data-hero-reveal>qui <em>marquent.</em></span>
              </h1>
            </div>

            <div className="hero-artwork" role="img" aria-label="Composition graphique originale MaintyBox : formes géométriques bleu pétrole, vert sauge et jaune doré">
              <div className="artwork-card">
                <div className="artwork-heading"><span>MAINTYBOX®</span><span>CRÉATIVITÉ<br/>AVEC INTENTION</span></div>
                <div className="artwork-orbit orbit-one" />
                <div className="artwork-orbit orbit-two" />
                <div className="artwork-disc" />
                <div className="artwork-square" />
                <Asterisk className="artwork-star" strokeWidth={1.35} aria-hidden="true" />
                <div className="artwork-footer"><span>01 / ∞</span><span>FORMES & SENS ↗</span></div>
              </div>
              <span className="artwork-caption">L'IMAGINATION PREND FORME ↗</span>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="hero-description">
              <span className="hero-description-marker" aria-hidden="true">✳</span>
              <p>Nous imaginons des identités et des expériences digitales qui donnent vie à votre marque.</p>
            </div>
            <div className="hero-actions">
              <Link className="hero-button hero-button-primary" to="/portfolio">Découvrir nos projets <ArrowUpRight size={19} aria-hidden="true" /></Link>
              {whatsapp ? (
                <a className="hero-button hero-button-outline" href={whatsapp} target="_blank" rel="noopener noreferrer">Discuter sur WhatsApp <ArrowUpRight size={19} aria-hidden="true" /></a>
              ) : (
                <span className="hero-button hero-button-outline hero-button-disabled" title="Configurez VITE_WHATSAPP_NUMBER dans .env.local">WhatsApp à configurer</span>
              )}
            </div>
          </div>

          <div className="hero-scroll-hint" aria-hidden="true"><span>FAITES DÉFILER</span><ArrowDownRight size={17} /></div>
        </div>
      </section>
    </main>
  );
}
