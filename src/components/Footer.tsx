import React from 'react';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { CLINIC_INFO, NAV_ITEMS } from '../constants';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0c2340] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Clinic Brand & Information */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
                AN
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {CLINIC_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Providing dedicated dental consultations, preventive guidance, and patient-focused oral healthcare in DHA Phase 2, Lahore.
            </p>
            <div className="pt-2">
              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors"
                aria-label="Visit AN Dental Surgery on Facebook"
              >
                <span>Follow AN Dental Surgery on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-4">
              Website Navigation
            </h2>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Directions */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-4">
              Clinic Location
            </h2>
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                {CLINIC_INFO.street}<br />
                {CLINIC_INFO.area}<br />
                Punjab {CLINIC_INFO.postalCode}, {CLINIC_INFO.country}
              </address>
            </div>
            <div className="mt-4">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors"
              >
                <span>Get Directions via Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Direct Telephone Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-4">
              Direct Contact
            </h2>
            <p className="text-sm text-slate-300 mb-3">
              To discuss your dental concerns or ask about consultation availability, please telephone our clinic:
            </p>
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold rounded-lg shadow-sm transition-all"
              aria-label={`Call AN Dental Surgery at ${CLINIC_INFO.phone}`}
            >
              <Phone className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              Located in Civic Commercial Area, Sector T, DHA Phase 2, Lahore.
            </p>
          </div>

        </div>

        {/* Bottom bar with legal & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Contact & Location
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
