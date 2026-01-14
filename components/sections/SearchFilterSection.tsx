import React from 'react';
import { Calendar } from 'lucide-react';
import { SectionType } from '@/lib/types';
import { SearchBar, SectionTabs, Button } from '@/components/ui';

interface SearchFilterSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  suggestions: string[];
  onSelectSuggestion: (suggestion: string) => void;
  selectedSection: SectionType;
  onSelectSection: (section: SectionType) => void;
  showTimeline: boolean;
  onToggleTimeline: () => void;
  darkMode: boolean;
}

export function SearchFilterSection({
  searchTerm,
  onSearchChange,
  suggestions,
  onSelectSuggestion,
  selectedSection,
  onSelectSection,
  showTimeline,
  onToggleTimeline,
  darkMode
}: SearchFilterSectionProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <SearchBar
          value={searchTerm}
          onChange={onSearchChange}
          suggestions={suggestions}
          onSelectSuggestion={onSelectSuggestion}
          darkMode={darkMode}
        />
        <Button
          onClick={onToggleTimeline}
          variant="primary"
          darkMode={darkMode}
        >
          <Calendar size={20} />
          {showTimeline ? 'Hide' : 'Show'} Timeline
        </Button>
      </div>

      <SectionTabs
        selectedSection={selectedSection}
        onSelectSection={onSelectSection}
        darkMode={darkMode}
      />
    </section>
  );
}