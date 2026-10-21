import { useEffect, useRef } from 'react';
import { navigation } from '../../data/navigation';
import { gsap, useGSAP } from '../../animations/gsap';
import ContactCTA from './ContactCTA';
import NavLink from './NavLink';

type Props = { open: boolean; onClose: () => void; triggerRef: React.RefObject<HTMLButtonElement | null> };

export default function MobileNav({ open, onClose, triggerRef }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const main = document.querySelector('main');
    main?.setAttribute('inert', '');
    const focusFirst = () => panelRef.current?.querySelector<HTMLElement>('a[href]')?.focus();
    const frame = requestAnimationFrame(focusFirst);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); triggerRef.current?.focus(); }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const elements = [...panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')];
      const first = elements[0], last = elements[elements.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = prevOverflow;
      main?.removeAttribute('inert');
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose, triggerRef]);

  useGSAP(() => {
    const panel = panelRef.current;
    if (!panel) return;
    gsap.killTweensOf(panel);
    gsap.killTweensOf('.mobile-nav-link, .mobile-menu-extra');
    if (reducedMotion.current) {
      gsap.set(panel, { yPercent: open ? 0 : -105, autoAlpha: open ? 1 : 0 });
      return;
    }
    if (open) {
      gsap.set(panel, { visibility: 'visible' });
      const tl = gsap.timeline();
      tl.to(panel, { yPercent: 0, autoAlpha: 1, duration: 0.55, ease: 'power3.out' })
        .fromTo('.mobile-nav-link, .mobile-menu-extra', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.055, ease: 'power3.out' }, 0.15);
    } else {
      gsap.to(panel, { yPercent: -105, autoAlpha: 0, duration: 0.35, ease: 'power2.inOut' });
    }
  }, { dependencies: [open], scope: innerRef });

  return (
    <div
      id="mobile-navigation" ref={panelRef} className="mobile-menu-panel lg:hidden"
      role="dialog" aria-modal={open ? 'true' : undefined} aria-label="Menu de navigation"
      aria-hidden={!open} inert={!open}
    >
      <div ref={innerRef} className="container-site mobile-menu-inner">
        <div className="mobile-menu-eyebrow">MENU / MAINTYBOX</div>
        <nav aria-label="Navigation mobile" className="mobile-menu-links">
          {navigation.map((item, index) => <div key={item.to} className="mobile-nav-entry"><span className="mobile-nav-count">0{index + 1}</span><NavLink {...item} mobile onNavigate={onClose} /></div>)}
        </nav>
        <div className="mobile-menu-extra"><ContactCTA mobile /><p className="mobile-menu-note">Studio créatif indépendant · Madagascar</p></div>
      </div>
    </div>
  );
}
