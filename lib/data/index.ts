import {Item, ItemWithCategory} from '@/lib/types';
import { internships } from './internships';
import { research } from './research';
import { teaching } from './teaching';
import { projects } from './projects';

export{ internships, research, teaching, projects };

export const allItems: ItemWithCategory[] = [
    ...internships.map(item => ({ ...item, category: 'internships' as const })),
    ...research.map(item => ({ ...item, category: 'research' as const })),
    ...teaching.map(item => ({ ...item, category: 'teaching' as const })),
    ...projects.map(item => ({ ...item, category: 'projects' as const })),
];