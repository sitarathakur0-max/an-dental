import React from 'react';
import { Shield, Phone, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
          Data & Privacy Notice
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500">
          Last updated: October 2026
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-8 text-sm text-slate-600 leading-relaxed">
        
        {/* Section 1: Introduction */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#0c2340]">
            1. Overview
          </h2>
          <p>
            This Privacy Policy explains how <strong>{CLINIC_INFO.name}</strong> ("we", "our", or "the clinic") handles information collected through this website. We respect visitor privacy and keep our data collection strictly limited to what is necessary to handle patient enquiries.
          </p>
        </section>

        {/* Section 2: Information Collected */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#0c2340]">
            2. Information Collected Through the Website
          </h2>
          <p>
            When you browse this website, you are not required to provide personal information. We collect personal information only when you voluntarily submit an enquiry through our online contact form:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-slate-700">
            <li><strong>Your name:</strong> To identify who is contacting the clinic.</li>
            <li><strong>Contact details:</strong> Your telephone number or email address, so our reception team can reply to your query.</li>
            <li><strong>Enquiry topic & message:</strong> The nature of your dental question or visit enquiry.</li>
          </ul>
          <p>
            We do not request sensitive medical history or personal financial details through this form. Please do not submit confidential medical records via the public website form.
          </p>
        </section>

        {/* Section 3: How We Use Information */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#0c2340]">
            3. How We Use Submitted Information
          </h2>
          <p>
            Information submitted via the contact form is used exclusively for:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-slate-700">
            <li>Responding to your specific question or consultation enquiry.</li>
            <li>Coordinating appointment timings should you choose to arrange a visit.</li>
            <li>General clinic record-keeping regarding patient communications.</li>
          </ul>
          <p>
            We do not sell, rent, or trade your contact information with external marketing organizations or third-party advertisers.
          </p>
        </section>

        {/* Section 4: Cookies and Analytics */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#0c2340]">
            4. Cookies and Website Telemetry
          </h2>
          <p>
            This website is designed as an informational portal. We do not use third-party advertising cookies, cross-site trackers, or commercial profiling scripts.
          </p>
        </section>

        {/* Section 5: Data Retention */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#0c2340]">
            5. Retention & Security
          </h2>
          <p>
            Enquiries received are handled by designated clinic reception personnel. While standard Internet transmissions are subject to routine technical network conditions, we apply reasonable administrative safeguards to protect messages from unauthorized access once received.
          </p>
        </section>

        {/* Section 6: Contact for Privacy Enquiries */}
        <section className="space-y-3 bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-base font-bold text-[#0c2340]">
            6. Questions About Your Information
          </h2>
          <p className="text-xs sm:text-sm">
            If you have questions regarding this privacy notice or wish to request that information submitted via an enquiry be updated or deleted, please contact AN Dental Surgery:
          </p>
          <div className="pt-2 text-xs text-slate-700 space-y-1">
            <p><strong>Clinic:</strong> {CLINIC_INFO.name}</p>
            <p><strong>Address:</strong> {CLINIC_INFO.address}</p>
            <p>
              <strong>Telephone:</strong>{' '}
              <a href={`tel:${CLINIC_INFO.phoneClean}`} className="text-teal-700 font-semibold hover:underline">
                {CLINIC_INFO.phone}
              </a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};
