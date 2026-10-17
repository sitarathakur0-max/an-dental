import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { CLINIC_INFO, NAV_ITEMS } from '../constants';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single element brand wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left text-slate-900 group cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md py-1"
            aria-label="AN Dental Surgery - Return to homepage"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0c2340] flex items-center justify-center text-white font-bold text-lg tracking-wider shadow-sm group-hover:bg-[#14365d] transition-colors">
              AN
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-[#0c2340] leading-tight">
                {CLINIC_INFO.name}
              </span>
              <span className="text-xs text-slate-500 font-medium leading-none">
                {CLINIC_INFO.subtitle}
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
                    isActive
                      ? 'text-teal-700 font-semibold'
                      : 'text-slate-600 hover:text-[#0c2340]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0c2340] hover:bg-[#14365d] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-label={`Call the clinic at ${CLINIC_INFO.phone}`}
            >
              <Phone className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />
              <span>Call the Clinic</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="p-2 text-[#0c2340] hover:text-teal-700 sm:hidden"
              aria-label={`Call ${CLINIC_INFO.phone}`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-teal-600"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-teal-50 text-teal-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#0c2340] hover:bg-[#14365d] text-white font-semibold text-sm rounded-lg shadow-sm"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call the Clinic ({CLINIC_INFO.phone})</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
