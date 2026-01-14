import { ItemWithCategory } from '@/lib/types';

export function filterItems(
  items: ItemWithCategory[],
  searchTerm: string,
  section: string
): ItemWithCategory[] {
  return items.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSection = section === 'all' || item.category === section;
    
    return matchesSearch && matchesSection;
  });
}

export function sortByDate(items: ItemWithCategory[]): ItemWithCategory[] {
  return [...items].sort((a, b) => {
    const yearA = parseInt(a.dateRange.split(' ')[0]) || 0;
    const yearB = parseInt(b.dateRange.split(' ')[0]) || 0;
    return yearB - yearA;
  });
}

export function getAutocompleteSuggestions(
  searchTerm: string,
  techStack: readonly string[],
  limit: number = 5
): string[] {
  if (searchTerm.length < 1) return [];
  
  return techStack
    .filter(tech => tech.toLowerCase().startsWith(searchTerm.toLowerCase()))
    .slice(0, limit);
}