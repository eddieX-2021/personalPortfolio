export interface Item{
    id: string;
    title: string;
    company: string|null;
    dateRange: string;
    summary: string|null;
    description: string|null;
    techStack: string[];
    link?: string|null;
    image?:string;
}
export interface ItemWithCategory extends Item{
    category: SectionType;
}

export type SectionType = 'all' | 'internships' | 'research' | 'teaching' | 'projects';

export interface SocialLink{
    name: string;
    url: string;
    icon: string;
}