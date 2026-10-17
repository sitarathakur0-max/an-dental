/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { PAGE_METADATA } from './constants';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PatientInfoPage } from './pages/PatientInfoPage';
import { FaqsPage } from './pages/FaqsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

function getPageFromPath(path: string): PageId {
  const clean = path.replace(/^\/+|\/+$/g, '').toLowerCase();
  switch (clean) {
    case 'about':
      return 'about';
    case 'services':
      return 'services';
    case 'patient-info':
    case 'patient-guide':
      return 'patient-info';
    case 'faqs':
    case 'faq':
      return 'faqs';
    case 'contact':
    case 'location':
      return 'contact';
    case 'privacy':
    case 'privacy-policy':
      return 'privacy';
    case '':
    case 'home':
    default:
      return 'home';
  }
}

function getPathFromPage(page: PageId): string {
  switch (page) {
    case 'home':
      return '/';
    case 'about':
      return '/about';
    case 'services':
      return '/services';
    case 'patient-info':
      return '/patient-info';
    case 'faqs':
      return '/faqs';
    case 'contact':
      return '/contact';
    case 'privacy':
      return '/privacy';
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    return getPageFromPath(window.location.pathname);
  });

  // Handle URL changes and browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update browser document title and meta description on page change
  useEffect(() => {
    const meta = PAGE_METADATA[currentPage];
    if (meta) {
      document.title = meta.title;
      const descElement = document.querySelector('meta[name="description"]');
      if (descElement) {
        descElement.setAttribute('content', meta.description);
      }
    }
    // Scroll window smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    const newPath = getPathFromPage(page);
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Universal Top Header */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1" id="main-content">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
        {currentPage === 'patient-info' && <PatientInfoPage onNavigate={navigateTo} />}
        {currentPage === 'faqs' && <FaqsPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'privacy' && <PrivacyPolicyPage />}
      </main>

      {/* Mandatory Floating Contact Button - Fixed to Bottom-Left Corner */}
      <FloatingCallButton />

      {/* Comprehensive Clinic Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
