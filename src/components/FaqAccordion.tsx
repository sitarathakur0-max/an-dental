import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-3" role="region" aria-label="Frequently Asked Questions">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="border border-slate-200/90 rounded-xl bg-white overflow-hidden transition-all duration-150"
          >
            <button
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="w-full flex items-center justify-between text-left p-4 sm:p-5 text-slate-900 hover:text-teal-700 font-semibold text-base sm:text-lg focus-visible:outline-teal-600 cursor-pointer"
            >
              <span className="pr-4">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'transform rotate-180 text-teal-600' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
