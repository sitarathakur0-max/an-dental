import { NavItem, PageId } from './types';

export const CLINIC_INFO = {
  name: 'AN Dental Surgery',
  subtitle: 'Dental Care · DHA Phase 2, Lahore',
  address: '30-T, Civic Commercial Area, Sector T, DHA Phase 2, Lahore, Punjab 54810, Pakistan',
  street: '30-T, Civic Commercial Area, Sector T',
  area: 'DHA Phase 2, Lahore',
  postalCode: '54810',
  country: 'Pakistan',
  phone: '+92 320 5707708',
  phoneClean: '+923205707708',
  facebookUrl: 'https://www.facebook.com/AN.Dental.Surgery.DHA.Lahore/',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=30-T+Civic+Commercial+Area+Sector+T+DHA+Phase+2+Lahore+Punjab+54810+Pakistan',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'patient-info', label: 'Patient Guide', href: '/patient-info' },
  { id: 'faqs', label: 'FAQs', href: '/faqs' },
  { id: 'contact', label: 'Contact & Location', href: '/contact' },
];

export const PAGE_METADATA: Record<PageId, { title: string; description: string }> = {
  home: {
    title: 'AN Dental Surgery – Dental Care in DHA Phase 2, Lahore',
    description: 'AN Dental Surgery provides professional dental consultations and oral care guidance in Civic Commercial Area, Sector T, DHA Phase 2, Lahore. Call +92 320 5707708.',
  },
  about: {
    title: 'About the Clinic – AN Dental Surgery, DHA Phase 2, Lahore',
    description: 'Learn about AN Dental Surgery, a professional dental practice located in Sector T, Civic Commercial Area, DHA Phase 2, Lahore.',
  },
  services: {
    title: 'Dental Care & Consultations – AN Dental Surgery, Lahore',
    description: 'Enquire about dental consultations, oral examinations, and clinical care options at AN Dental Surgery in DHA Phase 2, Lahore.',
  },
  'patient-info': {
    title: 'Patient Guide & Oral Health – AN Dental Surgery, Lahore',
    description: 'General oral health guidance, daily hygiene routines, preventive advice, and preparing for your dental consultation.',
  },
  faqs: {
    title: 'Frequently Asked Questions – AN Dental Surgery, DHA Phase 2',
    description: 'Practical questions regarding visiting AN Dental Surgery, contacting the clinic, location in DHA Phase 2, and arranging a consultation.',
  },
  contact: {
    title: 'Contact & Location – AN Dental Surgery, DHA Phase 2, Lahore',
    description: 'Find AN Dental Surgery at 30-T Civic Commercial Area, Sector T, DHA Phase 2, Lahore. Call +92 320 5707708 or send an enquiry.',
  },
  privacy: {
    title: 'Privacy Policy – AN Dental Surgery, DHA Phase 2, Lahore',
    description: 'How AN Dental Surgery handles visitor information and contact enquiries submitted through the clinic website.',
  },
};
