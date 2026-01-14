import React from 'react';
import { Search } from 'lucide-react';
import { AutocompleteDropdown } from './AutocompleteDropdown';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  suggestions: string[];
  onSelectSuggestion: (suggestion: string) => void;
  darkMode: boolean;
}

export function SearchBar({ 
  value, 
  onChange, 
  suggestions, 
  onSelectSuggestion, 
  darkMode 
}: SearchBarProps) {
  return (
    <div className="flex-1 relative">
      <Search 
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`} 
        size={20} 
      />
      <input
        type="text"
        placeholder="Search by name or tech stack..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
          darkMode 
            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
            : 'bg-white border-gray-300 text-gray-900'
        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      <AutocompleteDropdown 
        suggestions={suggestions}
        onSelect={onSelectSuggestion}
        darkMode={darkMode}
      />
    </div>
  );
}