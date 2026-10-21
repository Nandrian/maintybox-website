const REQUEST_MESSAGE = "Bonjour MaintyBox, j'aimerais discuter de mon projet avec vous.";

/** Accepts an international phone number (country code, no + or spaces). */
export function getWhatsAppUrl(): string | null {
  const raw = import.meta.env.VITE_WHATSAPP_NUMBER?.trim() ?? '';
  if (!/^\+?[1-9]\d{7,14}$/.test(raw.replace(/[\s().-]/g, ''))) return null;
  const number = raw.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(REQUEST_MESSAGE)}`;
}
