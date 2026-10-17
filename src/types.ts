export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'patient-info'
  | 'faqs'
  | 'contact'
  | 'privacy';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
}

export interface ContactSubmission {
  name: string;
  contactMethod: 'phone' | 'email';
  contactValue: string;
  enquiryType: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  reference?: string;
  message?: string;
  error?: string;
}
