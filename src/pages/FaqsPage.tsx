import React from 'react';
import { Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { PageId } from '../types';
import { FaqAccordion, FaqItem } from '../components/FaqAccordion';

interface FaqsPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({ onNavigate }) => {
  const faqList: FaqItem[] = [
    {
      id: 'contact-method',
      question: 'How do I contact AN Dental Surgery?',
      answer: (
        <div className="space-y-2">
          <p>
            You can telephone our clinic directly at{' '}
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="font-semibold text-teal-700 hover:underline"
            >
              {CLINIC_INFO.phone}
            </a>
            . Calling is the fastest way to speak with reception. You may also submit an online enquiry via our Contact page or message through our official Facebook page.
          </p>
        </div>
      ),
    },
    {
      id: 'clinic-location',
      question: 'Where in DHA Phase 2 is the clinic located?',
      answer: (
        <div className="space-y-2">
          <p>
            AN Dental Surgery is located at{' '}
            <strong>30-T, Civic Commercial Area, Sector T, DHA Phase 2, Lahore, Punjab 54810, Pakistan</strong>.
          </p>
          <p>
            The Civic Commercial Area offers accessible parking and straightforward connectivity from surrounding sectors of DHA Lahore.
          </p>
          <p>
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:underline pt-1"
            >
              <span>View exact location on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      ),
    },
    {
      id: 'treatment-enquiry',
      question: 'How can I enquire about a particular dental treatment?',
      answer: (
        <div className="space-y-2">
          <p>
            Because individual dental needs and tooth conditions differ, we advise calling our clinic at {CLINIC_INFO.phone} to describe your specific concerns or requirements.
          </p>
          <p>
            Our reception team can inform you about our clinical examination process and help you arrange an in-person consultation so a thorough clinical assessment can be conducted.
          </p>
        </div>
      ),
    },
    {
      id: 'consultation-availability',
      question: 'How do I confirm consultation availability before visiting?',
      answer: (
        <div className="space-y-2">
          <p>
            We strongly recommend telephoning the clinic at{' '}
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="font-semibold text-teal-700 hover:underline"
            >
              {CLINIC_INFO.phone}
            </a>{' '}
            prior to arriving. This ensures you can confirm the current consultation times and secure a dedicated slot with reception.
          </p>
        </div>
      ),
    },
    {
      id: 'treatment-fees',
      question: 'How can I ask about treatment fees and consultation costs?',
      answer: (
        <div className="space-y-2">
          <p>
            Dental fees depend on the specific nature and extent of the required procedure, which can only be accurately determined during an in-person examination.
          </p>
          <p>
            When you call {CLINIC_INFO.phone}, you can ask about standard consultation fees and general cost considerations for your specific inquiry.
          </p>
        </div>
      ),
    },
    {
      id: 'call-preparation',
      question: 'What information should I have ready when calling the clinic?',
      answer: (
        <div className="space-y-2">
          <p>When calling AN Dental Surgery, it helps to be ready with:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
            <li>A brief summary of your symptoms (e.g., tooth sensitivity, routine checkup, pain when chewing)</li>
            <li>How long you have experienced the symptom</li>
            <li>Any previous dental treatments related to the area</li>
            <li>Your preferred day and time window for a consultation visit</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'social-channels',
      question: 'Does AN Dental Surgery have an official social media presence?',
      answer: (
        <div className="space-y-2">
          <p>
            Yes, our verified public page is hosted on Facebook. You can find announcements, community updates, and clinic details at:
          </p>
          <p>
            <a
              href={CLINIC_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-teal-700 hover:underline"
            >
              <span>facebook.com/AN.Dental.Surgery.DHA.Lahore</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
          Help & Answers
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Find practical answers about contacting AN Dental Surgery, finding our clinic in DHA Phase 2, Lahore, and arranging a dental consultation.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="max-w-4xl">
        <FaqAccordion items={faqList} />
      </div>

      {/* Direct Contact Callout */}
      <div className="max-w-4xl bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-[#0c2340]">
            Still have a question?
          </h2>
          <p className="text-sm text-slate-600">
            Our clinic reception is pleased to answer any specific questions you may have.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0c2340] hover:bg-[#14365d] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-teal-400" />
            <span>Call {CLINIC_INFO.phone}</span>
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold rounded-lg border border-slate-200 transition-colors cursor-pointer"
          >
            <span>Contact Form</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </button>
        </div>
      </div>
    </div>
  );
};
