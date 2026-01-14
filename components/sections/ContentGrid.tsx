import React from 'react';
import { ItemWithCategory } from '@/lib/types';
import { ProjectCard } from '@/components/cards';

interface ContentGridProps {
  items: ItemWithCategory[];
  darkMode: boolean;
}

export function ContentGrid({ items, darkMode }: ContentGridProps) {
  if (items.length === 0) {
    return (
      <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        No items found matching your search.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <ProjectCard key={item.id} item={item} darkMode={darkMode} />
      ))}
    </div>
  );
}