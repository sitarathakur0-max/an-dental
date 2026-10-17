import React from 'react';
import { Phone, CheckCircle, HelpCircle, ArrowRight, Stethoscope, Search, Sparkles, Activity } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
          Consultation & Treatment Enquiries
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight">
          Dental Care Consultations
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          At AN Dental Surgery, dental care begins with an in-person consultation. Because individual oral conditions vary significantly, we encourage patients in DHA Phase 2, Lahore, to contact our clinic directly to discuss specific symptoms, procedure availability, and consultation arrangements.
        </p>
      </div>

      {/* Transparent Consultation Notice */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div className="space-y-2 text-sm text-slate-700">
            <h2 className="text-base font-bold text-[#0c2340]">
              How Treatment Planning Works at AN Dental Surgery
            </h2>
            <p className="leading-relaxed">
              Every mouth is unique. A clinical examination is required to properly assess tooth structure, gum health, and bite alignment before any treatment plan is agreed upon. We discuss procedure details, what to expect, and estimated timelines directly during your visit.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold text-xs sm:text-sm"
              >
                <span>Call {CLINIC_INFO.phone} to ask about consultation availability</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Areas of Enquiry */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[#0c2340] tracking-tight">
            Common Areas of Dental Enquiry
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            You may contact our reception team in DHA Phase 2 to enquire about any of the following clinical areas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. General Dental Consultations & Examinations */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0c2340]">
                Oral Examinations & General Consultations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Comprehensive clinical review of your teeth, gum line, bite, and soft tissues. Suitable for routine periodic checkups, establishing baseline dental records, or reviewing early symptoms.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-500 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Visual and tactile assessment of dental enamel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Gum health and periodontal tissue review</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">In-person assessment</span>
              <a href={`tel:${CLINIC_INFO.phoneClean}`} className="text-xs font-semibold text-teal-700 hover:underline">
                Call to enquire
              </a>
            </div>
          </div>

          {/* 2. Preventive Dental Care */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0c2340]">
                Preventive Dental Guidance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Focused on preserving natural tooth structure and preventing periodontal problems. Includes professional guidance on plaque control, interdental cleaning, and enamel remineralization.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-500 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Guidance on brushing pressure and technique</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Preventive advice for sensitive teeth and gums</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Preventive care</span>
              <a href={`tel:${CLINIC_INFO.phoneClean}`} className="text-xs font-semibold text-teal-700 hover:underline">
                Call to enquire
              </a>
            </div>
          </div>

          {/* 3. Restorative Care Enquiries */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0c2340]">
                Restorative & Discomfort Enquiries
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For patients experiencing dental discomfort, decayed teeth, chipped edges, or localized sensitivity. A clinical examination determines whether a filling, endodontic assessment, or other restorative procedure is recommended.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-500 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Cavity assessment and tooth restoration options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Evaluation of persistent tooth pain or chewing discomfort</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Clinical evaluation required</span>
              <a href={`tel:${CLINIC_INFO.phoneClean}`} className="text-xs font-semibold text-teal-700 hover:underline">
                Call to enquire
              </a>
            </div>
          </div>

          {/* 4. Cosmetic & Advanced Dental Enquiries */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0c2340]">
                Cosmetic, Implant & Imaging Enquiries
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If you are considering aesthetic improvements, missing tooth replacement (implants or bridges), or require dental radiology assessment, please call to confirm diagnostic capabilities and schedule an initial consultation.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-500 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Discussion of aesthetic goals and anatomical suitability</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Confirmation of diagnostic imaging requirements</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Confirm with clinic</span>
              <a href={`tel:${CLINIC_INFO.phoneClean}`} className="text-xs font-semibold text-teal-700 hover:underline">
                Call to enquire
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Preparing Questions for Your Visit */}
      <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
        <h3 className="text-lg font-bold text-[#0c2340] mb-3 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-teal-600" />
          <span>What to Clarify When Arranging a Service Consultation</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          When contacting AN Dental Surgery, feel free to ask our reception team:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <span className="font-semibold text-slate-900 block mb-1">1. Consultation Scheduling</span>
            Current days and hours when consultations can be booked in DHA Phase 2.
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <span className="font-semibold text-slate-900 block mb-1">2. Specific Procedure Details</span>
            Whether your particular treatment request is supported and what the first step entails.
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <span className="font-semibold text-slate-900 block mb-1">3. Estimated Consultation Fees</span>
            Information regarding standard examination fees prior to commencing any clinical work.
          </div>
        </div>
      </div>

      {/* Primary Action Card */}
      <div className="bg-[#0c2340] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Have a Dental Question?</h3>
          <p className="text-sm text-slate-300 max-w-xl">
            Telephone AN Dental Surgery directly to speak with reception or leave an online enquiry.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
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
            <span>Submit Enquiry Form</span>
          </button>
        </div>
      </div>
    </div>
  );
};
