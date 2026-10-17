import React from 'react';
import { Phone, MapPin, Calendar, Clock, ShieldCheck, ArrowRight, Check, HeartHandshake } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { PageId } from '../types';
import { ContactForm } from '../components/ContactForm';

// Use verified generated visual assets
import heroImage from '../assets/images/hero_dental_clinic_1792236848496.jpg';
import consultationImage from '../assets/images/dental_consultation_1792236864802.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-white pt-8 pb-12 sm:pt-12 sm:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline and Call to Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span>Sector T, DHA Phase 2, Lahore</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight text-balance leading-tight">
                Your Dental Health Deserves Thoughtful Care.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Contact AN Dental Surgery in DHA Phase 2, Lahore, to discuss your dental concerns and find out about available services. We provide a calm, patient-focused environment dedicated to your oral well-being.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0c2340] hover:bg-[#14365d] text-white font-semibold text-base rounded-xl shadow-md hover:shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
                  aria-label={`Call the clinic at ${CLINIC_INFO.phone}`}
                >
                  <Phone className="w-5 h-5 text-teal-400" />
                  <span>Call the Clinic</span>
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold text-base rounded-xl border border-slate-200 shadow-xs transition-colors cursor-pointer"
                >
                  <span>Enquire About Consultation</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>

              {/* Direct Quick Facts Banner */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Personalized In-Person Consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Civic Commercial Area, DHA Phase 2</span>
                </div>
              </div>
            </div>

            {/* Right Column: High Quality Dental Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 aspect-[16/10] lg:aspect-[4/3] bg-slate-100">
                <img
                  src={heroImage}
                  alt="Modern clinical dental room with ergonomic examination chair and professional lighting"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 bg-white/90 backdrop-blur-xs p-3 rounded-lg border border-white/50 text-xs text-slate-700">
                  <span className="font-semibold text-[#0c2340]">AN Dental Surgery</span> · Civic Commercial Area, DHA Phase 2
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Introduction to AN Dental Surgery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Welcome to Our Practice
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340] tracking-tight">
              Attentive Dental Care in the Heart of DHA Phase 2
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Located conveniently in Sector T of the Civic Commercial Area, AN Dental Surgery is dedicated to assisting patients in DHA Phase 2, Lahore with comprehensive dental consultations and oral health advice. We emphasize honest communication, patient comfort, and thorough dental assessments.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you are looking to schedule a routine dental examination, seeking answers about tooth discomfort, or wanting to discuss dental treatment options, our clinic welcomes your direct telephone enquiry.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors cursor-pointer"
              >
                <span>Read more about our clinic location and principles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dental Care & Consultation Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Consultations & Care
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340] tracking-tight">
            Dental Care and Guidance
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We prioritize individualized examinations where your oral concerns are carefully listened to and evaluated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-[#0c2340]">
                Initial Dental Examination
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A structured evaluation of your teeth, gums, and oral tissues to identify any areas of concern, early decay, or plaque accumulation.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <span className="text-xs text-slate-500">In-person clinical evaluation</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-[#0c2340]">
                Treatment Discussion & Advice
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear explanations regarding your options, answering all your questions regarding procedure steps and preventive maintenance.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <span className="text-xs text-slate-500">Transparent patient dialogue</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-[#0c2340]">
                Preventive Health Planning
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Actionable advice on maintaining oral hygiene at home, protecting enamel, and addressing tooth sensitivity or gum irritation.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <span className="text-xs text-slate-500">Ongoing oral health support</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors cursor-pointer"
          >
            <span>Learn how to enquire about specific treatments</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. Plan Your Visit — Patient-Friendly Contact Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c2340] text-white rounded-2xl p-8 sm:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                Arranging Your Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Plan Your Visit to AN Dental Surgery
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Visiting a dental practice is easiest when you know what to expect. Here is how you can connect with our clinic in DHA Phase 2:
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Call Reception Directly</h4>
                    <p className="text-xs text-slate-300">Dial {CLINIC_INFO.phone} to speak with our clinic and ask about consultation availability.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Describe Your Dental Question</h4>
                    <p className="text-xs text-slate-300">Let us know if you require a routine checkup, have mild discomfort, or need a specific enquiry.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Visit Sector T, DHA Phase 2</h4>
                    <p className="text-xs text-slate-300">Our clinic is located in the Civic Commercial Area with convenient road access in DHA Lahore.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/15 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-teal-300" />
                  <span>What to Ask When Calling</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                    <span>Which consultation slots are currently open</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                    <span>Whether your specific dental concern can be addressed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                    <span>Estimated fee ranges for consultation and examination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                    <span>Exact landmark directions in Sector T Civic Commercial Area</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. General Oral Health Guidance Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] bg-slate-100">
              <img
                src={consultationImage}
                alt="Doctor and patient discussing dental model in a consultation suite"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Oral Health Education
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340] tracking-tight">
              Everyday Practices for Healthy Teeth & Gums
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Good dental health begins at home with consistent habits. While regular professional assessments are vital, day-to-day care provides the foundation for preventing cavities and gum sensitivity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-slate-900 text-sm mb-1">Gentle Brushing</h4>
                <p className="text-xs text-slate-600">Brush twice daily for two minutes using a soft-bristled toothbrush to protect enamel and gum margins.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-slate-900 text-sm mb-1">Interdental Cleaning</h4>
                <p className="text-xs text-slate-600">Flossing once a day removes plaque and food particles from tight spaces where toothbrushes cannot reach.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-slate-900 text-sm mb-1">Limiting Sugary Snacks</h4>
                <p className="text-xs text-slate-600">Reducing prolonged exposure to sugary and acidic drinks significantly lowers bacterial acid attacks.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-slate-900 text-sm mb-1">Timely Consultations</h4>
                <p className="text-xs text-slate-600">Addressing mild sensitivity early helps prevent complications and more extensive treatments later.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('patient-info')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors cursor-pointer"
              >
                <span>Read our complete Patient Oral Health Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Location Section for DHA Phase 2, Lahore */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Convenient Access
              </span>
              <h2 className="text-2xl font-bold text-[#0c2340] tracking-tight">
                Find AN Dental Surgery in Sector T
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our clinic is situated in the Civic Commercial Area of Sector T in DHA Phase 2, Lahore. The location offers straightforward road access from surrounding sectors and major DHA thoroughfares.
              </p>

              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                <p className="font-semibold text-slate-900">Clinic Street Address:</p>
                <p>{CLINIC_INFO.address}</p>
                <p className="text-slate-500 pt-1">
                  Telephone: <a href={`tel:${CLINIC_INFO.phoneClean}`} className="text-teal-700 font-semibold hover:underline">{CLINIC_INFO.phone}</a>
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0c2340] hover:bg-[#14365d] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                >
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span>Open in Google Maps</span>
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 shadow-xs transition-colors cursor-pointer"
                >
                  <span>Detailed Location & Directions</span>
                </button>
              </div>
            </div>

            {/* Visual representation of address */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-center space-y-4 shadow-xs">
              <div className="flex items-center gap-3 text-slate-900 font-semibold text-base border-b border-slate-100 pb-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Civic Commercial Area, Sector T</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sector T is one of the central commercial sectors in DHA Phase 2, Lahore, featuring dedicated parking facilities and pedestrian walkways.
              </p>
              <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 space-y-1">
                <p className="font-medium text-slate-800">Visiting Advice:</p>
                <p>We recommend telephoning the clinic beforehand at <span className="font-semibold text-slate-900">{CLINIC_INFO.phone}</span> to confirm consultation timing before starting your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact the Clinic Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340] tracking-tight">
              Contact the Clinic
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We look forward to answering your questions. You can call us directly during normal daytime hours or submit an enquiry using the form.
            </p>

            <div className="bg-teal-50/70 border border-teal-200/80 rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-bold text-teal-950">Direct Telephone Call</h3>
              <p className="text-xs text-teal-900 leading-relaxed">
                Telephoning is the fastest and most direct way to speak with our clinic reception regarding available consultation times.
              </p>
              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0c2340] hover:bg-[#14365d] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
            </div>

            <div className="text-xs text-slate-500 space-y-2">
              <p className="font-semibold text-slate-700">Official Facebook Page:</p>
              <p>
                <a
                  href={CLINIC_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 hover:underline inline-flex items-center gap-1 font-medium"
                >
                  facebook.com/AN.Dental.Surgery.DHA.Lahore
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
};
