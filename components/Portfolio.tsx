'use client';

import React, { useMemo, useState } from 'react';
import { Header, Footer } from './layout';
import { HeroSection, SearchFilterSection, TimelineView, ContentGrid } from './sections';
import { useDarkMode, useSearch } from '@/lib/hooks';
import { allItems } from '@/lib/data';

export function Portfolio() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [showTimeline, setShowTimeline] = useState(false);

  // keep useSearch for normal mode (cards)
  const {
    searchTerm,
    setSearchTerm,
    selectedSection,
    setSelectedSection,
    filteredItems,
    suggestions,
  } = useSearch(allItems);

  const timelineItems = useMemo(() => {
    return filteredItems;
  }, [filteredItems]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      <HeroSection darkMode={darkMode} />

      <SearchFilterSection
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        suggestions={suggestions}
        onSelectSuggestion={setSearchTerm}
        selectedSection={selectedSection}
        onSelectSection={setSelectedSection}
        showTimeline={showTimeline}
        onToggleTimeline={() => setShowTimeline((prev) => !prev)}
        darkMode={darkMode}
      />

      <div className="max-w-6xl mx-auto px-4">
        {showTimeline ? (
          <TimelineView items={timelineItems} darkMode={darkMode} />
        ) : (
          <ContentGrid items={filteredItems} darkMode={darkMode} />
        )}
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}
