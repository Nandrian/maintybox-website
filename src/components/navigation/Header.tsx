import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { gsap, useGSAP } from '../../animations/gsap';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import ContactCTA from './ContactCTA';
import './navigation.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const onClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => { onClose(); }, [location.pathname, onClose]);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => { if (media.matches) onClose(); };
    media.addEventListener('change', closeOnDesktop);
    return () => media.removeEventListener('change', closeOnDesktop);
  }, [onClose]);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timeline = gsap.timeline({ defaults: { duration: 0.7, ease: 'power3.out' } });
    timeline.fromTo('.header-brand', { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
      .fromTo('.desktop-nav-link', { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.06 }, 0.13)
      .fromTo('.header-cta', { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, 0.3)
      .fromTo('.mobile-menu-toggle', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, 0.2);
  }, { scope: headerRef });

  return (
    <header ref={headerRef} className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
      <div className="container-site header-inner grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-5">
        <Link to="/" className="header-brand" aria-label="MaintyBox, retour à l'accueil">
          maintybox<span className="brand-dot" aria-hidden="true">.</span>
        </Link>
        <DesktopNav />
        <div className="header-cta hidden lg:flex justify-end"><ContactCTA /></div>
        <button ref={triggerRef} type="button" className={`mobile-menu-toggle lg:hidden ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>
      <MobileNav open={open} onClose={onClose} triggerRef={triggerRef} />
    </header>
  );
}
