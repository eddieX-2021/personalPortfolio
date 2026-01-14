'use client';

import { useState, useMemo } from 'react';
import { ItemWithCategory, SectionType } from '@/lib/types';
import { filterItems, getAutocompleteSuggestions } from '@/lib/utils';
import { ALL_TECH_STACK } from '@/lib/data/techStack';

export function useSearch(items: ItemWithCategory[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSection, setSelectedSection] = useState<SectionType>('all');

  const filteredItems = useMemo(() => {
    return filterItems(items, searchTerm, selectedSection);
  }, [items, searchTerm, selectedSection]);

  const suggestions = useMemo(() => {
    return getAutocompleteSuggestions(searchTerm, ALL_TECH_STACK);
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    selectedSection,
    setSelectedSection,
    filteredItems,
    suggestions
  };
}