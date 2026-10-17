import React from 'react';
import { MapPin, Phone, Shield, UserCheck, Heart, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { PageId } from '../types';

import instrumentsImage from '../assets/images/dental_instruments_1792236864620.jpg';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
          <MapPin className="w-3.5 h-3.5 text-teal-600" />
          <span>DHA Phase 2, Lahore</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight">
          About AN Dental Surgery
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          AN Dental Surgery is a dedicated dental clinic situated in Sector T, Civic Commercial Area, DHA Phase 2, Lahore. We provide an attentive, reassuring setting where patients can discuss their dental concerns and receive thorough oral assessments.
        </p>
      </div>

      {/* Main Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-[#0c2340] tracking-tight">
            Our Approach to Dental Care
          </h2>
          <p>
            Dental health plays an essential role in daily comfort, overall health, and quality of life. At AN Dental Surgery, our approach centers on listening carefully to each patient's individual symptoms and providing clear, practical guidance before recommending any course of action.
          </p>
          <p>
            We understand that visiting a dental clinic can sometimes feel daunting. Because of this, our focus is on creating a calm, orderly, and professional environment where you are fully informed at every stage of your consultation.
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h3 className="font-semibold text-slate-900 text-sm">Patient-First Communication</h3>
            <p className="text-xs text-slate-600">
              We encourage open discussions regarding symptoms, previous dental experiences, and any questions you may have. We take the time to explain our findings and review all available options openly.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] bg-slate-100">
            <img
              src={instrumentsImage}
              alt="Sterilized clinical instruments neatly arranged on a surgical steel tray in a spotless dental surgery suite"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">
            Modern, hygienic clinical standards in DHA Phase 2, Lahore.
          </p>
        </div>
      </div>

      {/* Core Principles */}
      <div className="space-y-6 pt-6 border-t border-slate-100">
        <h2 className="text-2xl font-bold text-[#0c2340] tracking-tight">
          Core Principles of Our Practice
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Cleanliness & Hygiene</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We adhere strictly to hygienic sterilization protocols and clinical cleanliness to ensure a safe, protected environment for every patient.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Patient Comfort & Respect</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every consultation is conducted with care and patience, ensuring that you feel listened to and never rushed through an examination.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Clear Advice & Transparency</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We believe patients should clearly understand their dental health status and the purpose behind any proposed clinical step.
            </p>
          </div>
        </div>
      </div>

      {/* Location & Practice Context */}
      <div className="bg-[#0c2340] text-white rounded-2xl p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
            Convenient Location in DHA Phase 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Visiting Our Surgery in Sector T
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            The clinic is located at 30-T, Civic Commercial Area, Sector T, DHA Phase 2, Lahore. The Civic Commercial Area provides convenient parking, wide access roads, and proximity to surrounding residential areas of DHA.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm rounded-xl transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call {CLINIC_INFO.phone}</span>
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all cursor-pointer"
          >
            <span>View Location Details & Directions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
