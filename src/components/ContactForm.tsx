import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { ContactSubmission, ApiResponse } from '../types';
import { CLINIC_INFO } from '../constants';

interface FormErrors {
  name?: string;
  contactValue?: string;
  enquiryType?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    contactMethod: 'phone',
    contactValue: '',
    enquiryType: 'General Consultation Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<ApiResponse | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    if (!formData.contactValue.trim()) {
      newErrors.contactValue =
        formData.contactMethod === 'phone'
          ? 'Please enter your telephone number.'
          : 'Please enter your email address.';
    } else {
      if (formData.contactMethod === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.contactValue.trim())) {
          newErrors.contactValue = 'Please enter a valid email address (e.g., name@example.com).';
        }
      } else {
        const phoneDigits = formData.contactValue.replace(/[\s\-\(\)\+]/g, '');
        if (phoneDigits.length < 7) {
          newErrors.contactValue = 'Please enter a valid telephone number with area/country code.';
        }
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message or enquiry question.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a little more detail (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (response.ok && data.success) {
        setSubmitResult({
          success: true,
          reference: data.reference,
          message: data.message || 'Your enquiry has been received by our clinic reception team.',
        });
        // Clear form on confirmed server success
        setFormData({
          name: '',
          contactMethod: 'phone',
          contactValue: '',
          enquiryType: 'General Consultation Enquiry',
          message: '',
        });
        setErrors({});
      } else {
        setSubmitResult({
          success: false,
          error: data.error || 'The server could not process your enquiry. Please call us directly.',
        });
      }
    } catch {
      setSubmitResult({
        success: false,
        error: `Could not connect to the clinic reception server. Please call us directly at ${CLINIC_INFO.phone}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
      <h3 className="text-xl font-bold text-[#0c2340] mb-1">
        Send a Consultation Enquiry
      </h3>
      <p className="text-sm text-slate-600 mb-6">
        Have questions about visiting or dental care? Leave your message below and our clinic reception will get back to you.
      </p>

      {/* Confirmed Server Success State */}
      {submitResult && submitResult.success && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 p-5 bg-teal-50/90 border border-teal-200 rounded-xl text-teal-900"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-sm">
              <p className="font-semibold text-teal-950">
                Enquiry Successfully Received
              </p>
              <p className="text-teal-800">
                {submitResult.message}
              </p>
              {submitResult.reference && (
                <p className="text-xs text-teal-700 font-mono pt-1">
                  Reference: <span className="font-bold">{submitResult.reference}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Server Failure State */}
      {submitResult && !submitResult.success && (
        <div
          role="alert"
          className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold">Unable to Deliver Message</p>
              <p className="text-amber-800">{submitResult.error}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Patient / Visitor Name */}
        <div>
          <label htmlFor="patient-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="patient-name"
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            placeholder="e.g., Tariq Mehmood"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors ${
              errors.name
                ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100'
            }`}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600 font-medium">
              {errors.name}
            </p>
          )}
        </div>

        {/* Contact Method Selector */}
        <div>
          <span className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Preferred Contact Method <span className="text-red-500">*</span>
          </span>
          <div className="grid grid-cols-2 gap-3 mb-2">
            <button
              type="button"
              onClick={() => {
                setFormData({ ...formData, contactMethod: 'phone' });
                setErrors({ ...errors, contactValue: undefined });
              }}
              className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center cursor-pointer ${
                formData.contactMethod === 'phone'
                  ? 'bg-[#0c2340] text-white border-[#0c2340] shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Telephone / Mobile
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({ ...formData, contactMethod: 'email' });
                setErrors({ ...errors, contactValue: undefined });
              }}
              className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center cursor-pointer ${
                formData.contactMethod === 'email'
                  ? 'bg-[#0c2340] text-white border-[#0c2340] shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Email Address
            </button>
          </div>

          <label htmlFor="contact-value" className="sr-only">
            {formData.contactMethod === 'phone' ? 'Telephone Number' : 'Email Address'}
          </label>
          <input
            id="contact-value"
            type={formData.contactMethod === 'email' ? 'email' : 'tel'}
            value={formData.contactValue}
            onChange={(e) => {
              setFormData({ ...formData, contactValue: e.target.value });
              if (errors.contactValue) setErrors({ ...errors, contactValue: undefined });
            }}
            placeholder={
              formData.contactMethod === 'phone'
                ? 'e.g., +92 300 1234567 or 0300 1234567'
                : 'e.g., patient@example.com'
            }
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors ${
              errors.contactValue
                ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100'
            }`}
            aria-invalid={errors.contactValue ? 'true' : 'false'}
            aria-describedby={errors.contactValue ? 'contact-error' : undefined}
          />
          {errors.contactValue && (
            <p id="contact-error" className="mt-1 text-xs text-red-600 font-medium">
              {errors.contactValue}
            </p>
          )}
        </div>

        {/* Enquiry Type */}
        <div>
          <label htmlFor="enquiry-type" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Topic of Enquiry
          </label>
          <select
            id="enquiry-type"
            value={formData.enquiryType}
            onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          >
            <option value="General Consultation Enquiry">General Consultation Enquiry</option>
            <option value="Oral Examination & Checkup">Oral Examination & Routine Checkup</option>
            <option value="Treatment Information & Procedure Query">Treatment Information / Procedure Query</option>
            <option value="Consultation Availability Question">Consultation Availability Question</option>
            <option value="Location & Visiting Guidance">Location & Visiting Guidance</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="patient-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Question or Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="patient-message"
            rows={4}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            placeholder="Please describe what you would like to ask our clinic about (e.g., consultation schedule, general dental question)..."
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors ${
              errors.message
                ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100'
            }`}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-600 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        {/* Privacy notice */}
        <p className="text-xs text-slate-500 leading-normal">
          We respect your privacy. The information provided is used exclusively to respond to your specific enquiry and is not shared with outside parties.
        </p>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-teal-500 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Transmitting Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-white" />
              <span>Submit Enquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
