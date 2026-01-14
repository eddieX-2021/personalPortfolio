import React from 'react';

interface AutocompleteDropdownProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
  darkMode: boolean;
}

export function AutocompleteDropdown({ suggestions, onSelect, darkMode }: AutocompleteDropdownProps) {
  if (suggestions.length === 0) return null;

  return (
    <div className={`absolute w-full mt-1 rounded-lg shadow-lg border z-10 ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      {suggestions.map((suggestion, idx) => (
        <div
          key={idx}
          onClick={() => onSelect(suggestion)}
          className={`px-4 py-2 cursor-pointer ${
            darkMode ? 'hover:bg-gray-700 text-gray-200' : 'hover:bg-gray-50 text-gray-800'
          }`}
        >
          {suggestion}
        </div>
      ))}
    </div>
  );
}