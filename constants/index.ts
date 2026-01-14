import { SocialLink, SectionType } from '@/lib/types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/eddieX-2021',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hx2021/',
    icon: 'linkedin'
  },
  {
    name: 'Email',
    url: "mailto:eddiexiao77@gmail.com",
    icon: 'mail'
  }
];

export const SECTIONS: { value: SectionType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'internships', label: 'Internships' },
  { value: 'research', label: 'Research' },
  { value: 'teaching', label: 'Teaching' },
  { value: 'projects', label: 'Projects' }
];