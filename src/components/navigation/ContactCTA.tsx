import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

type Props = { mobile?: boolean };
export default function ContactCTA({ mobile = false }: Props) {
  const url = getWhatsAppUrl();
  const cls = mobile ? 'contact-cta contact-cta-mobile' : 'contact-cta';
  if (!url) return (
    <span className={`${cls} contact-cta-disabled`} aria-label="Contact WhatsApp non configuré" title="Configurez VITE_WHATSAPP_NUMBER dans .env.local">
      <MessageCircle aria-hidden="true" size={18} /> WhatsApp à configurer
    </span>
  );
  return (
    <a className={cls} href={url} target="_blank" rel="noopener noreferrer" aria-label="Parlons de votre projet sur WhatsApp (nouvel onglet)">
      <span>Parlons de votre projet</span>
      <ArrowUpRight aria-hidden="true" size={19} strokeWidth={1.9} />
    </a>
  );
}
