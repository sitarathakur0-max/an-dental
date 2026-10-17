import React from 'react';
import { AlertTriangle, CheckCircle, HelpCircle, Phone, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { PageId } from '../types';

interface PatientInfoPageProps {
  onNavigate: (page: PageId) => void;
}

export const PatientInfoPage: React.FC<PatientInfoPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
          Patient Education & Guidance
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight">
          Patient Information & Oral Care Guide
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Reliable dental health relies on daily home hygiene paired with regular professional examinations. Here we provide evidence-based guidance to help you protect your smile between clinical visits.
        </p>
      </div>

      {/* Clinical Disclaimer Callout */}
      <div className="p-5 bg-slate-50 border border-slate-200/90 rounded-2xl flex items-start gap-4">
        <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-slate-600 space-y-1">
          <p className="font-semibold text-slate-900">
            Educational Disclaimer
          </p>
          <p className="leading-relaxed">
            The guidance provided on this page is for general oral hygiene education only. It does not replace an in-person diagnostic examination by a qualified dental professional. For individualized advice or diagnosis, please consult a dentist.
          </p>
        </div>
      </div>

      {/* Section 1: Everyday Oral Hygiene */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#0c2340] tracking-tight">
          Everyday Oral Hygiene Best Practices
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-teal-600" />
              <span>Brushing Fundamentals</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Brush twice daily for a full two minutes. Use a soft-bristled toothbrush angled at 45 degrees towards the gumline. Clean all outer, inner, and chewing surfaces using gentle circular motions rather than harsh horizontal scrubbing.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-teal-600" />
              <span>Interdental Flossing</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Toothbrushes clean only about 60% of tooth surfaces. Clean between your teeth daily using dental floss or interdental brushes to remove plaque and trapped food particles where bacteria thrive.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-teal-600" />
              <span>Toothbrush Replacement</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Replace your manual toothbrush or electric toothbrush head every 3 months, or sooner if the bristles become frayed or splayed. Frayed bristles lose their cleaning efficacy and can irritate sensitive gums.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Why Preventive Checkups Matter */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0c2340] tracking-tight">
          The Role of Regular Preventive Dental Checkups
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
          Many dental conditions, including early tooth enamel demineralization and mild gingivitis, can develop silently without causing noticeable pain. Routine dental consultations allow a clinician to:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 pt-2">
          <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span>Detect early enamel decay before it reaches the dental pulp</span>
          </li>
          <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span>Identify tartar deposits that cannot be removed by brushing alone</span>
          </li>
          <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span>Examine gum health and screen for periodontal inflammation</span>
          </li>
          <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/80">
            <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span>Receive tailored advice on diet, hydration, and protective care</span>
          </li>
        </ul>
      </div>

      {/* Section 3: Understanding Dental Discomfort & Signs Requiring Prompt Assessment */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#0c2340] tracking-tight">
          Understanding Dental Discomfort & Warning Signs
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Tooth discomfort is a signal that oral tissues require attention. Certain signs indicate that you should seek prompt professional assessment rather than delaying:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <HeartPulse className="w-5 h-5 text-teal-600" />
              <span>Common Dental Symptoms</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>• <strong>Transient sensitivity:</strong> Short twinges when drinking cold or hot fluids may suggest early enamel wear or receding gums.</li>
              <li>• <strong>Bleeding during brushing:</strong> Can indicate gingivitis or plaque accumulation along the gumline.</li>
              <li>• <strong>Rough tooth edges:</strong> May indicate a minor chip or failing existing restoration.</li>
            </ul>
          </div>

          <div className="p-6 bg-amber-50/60 border border-amber-200/80 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>Situations Warranting Prompt Assessment</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-amber-900">
              <li>• <strong>Facial or gum swelling:</strong> Swelling around the jaw, cheek, or gums should be clinically evaluated promptly.</li>
              <li>• <strong>Severe, throbbing pain:</strong> Persistent pain that disrupts sleep or daily activities.</li>
              <li>• <strong>Trauma or displaced tooth:</strong> Injury resulting in loose, cracked, or knocked-out teeth.</li>
              <li>• <strong>Difficulty swallowing or breathing:</strong> Seek immediate medical hospital attention.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 4: Preparing for Your Dental Consultation */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#0c2340]">
              Preparing Questions for Your Dental Visit
            </h2>
            <p className="text-xs text-slate-500">
              Getting the most out of your clinical consultation
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          Before your visit to AN Dental Surgery in Sector T, DHA Phase 2, take note of any symptoms you have experienced. Consider asking:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            "What is the underlying cause of this symptom or discomfort?"
          </div>
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            "What are the different treatment options and their pros and cons?"
          </div>
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            "What specific steps can I take at home to protect this tooth?"
          </div>
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            "How often do you recommend I schedule follow-up examinations?"
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0c2340] hover:bg-[#14365d] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all"
          >
            <Phone className="w-4 h-4 text-teal-400" />
            <span>Call to Schedule a Consultation ({CLINIC_INFO.phone})</span>
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm rounded-xl border border-slate-200 transition-colors cursor-pointer"
          >
            <span>Ask a Question Online</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </button>
        </div>
      </div>
    </div>
  );
};
