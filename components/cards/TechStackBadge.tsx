import React from 'react';

interface TechStackBadgeProps {
  tech: string;
  darkMode: boolean;
}

export function TechStackBadge({ tech, darkMode }: TechStackBadgeProps) {
  return (
    <span
      className={`text-xs px-2 py-1 rounded ${
        darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
      }`}
    >
      {tech}
    </span>
  );
}