import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export const FloatingCallButton: React.FC = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <aside
      className="fixed bottom-5 left-5 z-40 print:hidden flex flex-col items-start"
      aria-label="Quick telephone contact"
    >
      {/* Contact Card when expanded */}
      {showCard && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="contact-clinic-heading"
          className="mb-3 w-72 sm:w-80 bg-white rounded-xl shadow-xl border border-slate-200/90 p-4 animate-in fade-in slide-in-from-bottom-3 duration-150"
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 id="contact-clinic-heading" className="text-sm font-semibold text-[#0c2340]">
              Contact the Clinic
            </h2>
            <button
              onClick={() => setShowCard(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-md transition-colors"
              aria-label="Close contact popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="pt-3 space-y-2.5 text-xs text-slate-600">
            <p>
              Telephone our clinic directly to discuss your dental concerns or ask about consultation availability:
            </p>
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-[#0c2340] hover:bg-[#14365d] text-white font-semibold rounded-lg shadow-sm transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-teal-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <p className="text-[11px] text-slate-400 text-center">
              Civic Commercial Area, Sector T, DHA Phase 2, Lahore
            </p>
          </div>
        </div>
      )}

      {/* Main Floating Call Button - Strictly bottom-left */}
      <div className="flex items-center gap-2">
        <a
          href={`tel:${CLINIC_INFO.phoneClean}`}
          className="group inline-flex items-center gap-2.5 bg-[#0c2340] hover:bg-[#14365d] text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-teal-500/30 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
          aria-label={`Call AN Dental Surgery at ${CLINIC_INFO.phone}`}
        >
          <span className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white shrink-0 shadow-inner group-hover:scale-105 transition-transform">
            <Phone className="w-4 h-4" aria-hidden="true" />
          </span>
          <span className="flex flex-col text-left">
            <span className="text-xs font-bold leading-tight tracking-wide text-white">Call Clinic</span>
            <span className="text-[11px] text-teal-300 font-medium leading-none tabular-nums">
              {CLINIC_INFO.phone}
            </span>
          </span>
        </a>

        {/* Toggle details popover button */}
        <button
          onClick={() => setShowCard(!showCard)}
          className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-slate-600 border border-slate-300 shadow-md flex items-center justify-center text-xs font-semibold focus-visible:ring-2 focus-visible:ring-teal-500"
          aria-label={showCard ? 'Hide clinic contact card' : 'View clinic contact card'}
          title="Contact details"
        >
          {showCard ? <X className="w-3.5 h-3.5" /> : 'info'}
        </button>
      </div>
    </aside>
  );
};
