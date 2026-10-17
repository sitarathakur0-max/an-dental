import React from 'react';
import { Phone, MapPin, ExternalLink, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
          Location & Communication
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight">
          Contact & Location
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Reach out to AN Dental Surgery in Sector T, Civic Commercial Area, DHA Phase 2, Lahore. Telephone our clinic directly or complete our enquiry form below.
        </p>
      </div>

      {/* Main Grid: Details on Left, Form on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Official Business Details */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Clinic Address Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base font-bold text-[#0c2340]">
                  Clinic Address
                </h2>
                <address className="not-italic text-sm text-slate-600 leading-relaxed">
                  <strong>{CLINIC_INFO.name}</strong><br />
                  {CLINIC_INFO.street}<br />
                  {CLINIC_INFO.area}<br />
                  Punjab {CLINIC_INFO.postalCode}, {CLINIC_INFO.country}
                </address>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors"
              >
                <span>Get Directions with Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Direct Telephone Card */}
          <div className="bg-[#0c2340] text-white rounded-2xl p-6 sm:p-7 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Telephone Reception</h3>
                <p className="text-xs text-slate-300">Direct phone line</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-1">
              Speak directly with our clinic to ask questions or confirm consultation timing before visiting.
            </p>

            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm"
              aria-label={`Call AN Dental Surgery at ${CLINIC_INFO.phone}`}
            >
              <Phone className="w-4 h-4" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>

          {/* Official Facebook Channel */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-5 h-5 text-teal-700" />
              <h3 className="text-sm font-bold text-slate-900">Official Facebook Page</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Visit our verified Facebook presence for announcements and community updates.
            </p>
            <a
              href={CLINIC_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:underline"
            >
              <span>facebook.com/AN.Dental.Surgery.DHA.Lahore</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Practical Visiting Advice */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Visiting Guidelines</span>
            </div>
            <p className="leading-relaxed">
              To minimize waiting times, we advise contacting reception by phone in advance. Please bring any relevant past dental records or notes if applicable.
            </p>
          </div>

        </div>

        {/* Right Column: Contact & Consultation Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>
    </div>
  );
};
