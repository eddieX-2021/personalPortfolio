import React from 'react';
import { SectionType } from '@/lib/types';
import { SECTIONS } from '@/constants';

interface SectionTabsProps {
  selectedSection: SectionType;
  onSelectSection: (section: SectionType) => void;
  darkMode: boolean;
}

export function SectionTabs({ selectedSection, onSelectSection, darkMode }: SectionTabsProps) {
  return (
    <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
      {SECTIONS.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onSelectSection(value)}
          className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
            selectedSection === value
              ? 'bg-blue-500 text-white'
              : darkMode 
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}