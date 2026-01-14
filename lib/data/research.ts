import { Item } from '@/lib/types';

export const research: Item[] = [
  {
    id: 'research-1',
    title: 'UVA Collaborative Robotics Lab',
    company: 'University of Virginia',
    dateRange: 'May 2025 - August 2025',
    summary: 'Human-robot interaction research using NAO robots',
    description: "Integrated Meta's Llama-2 with NAOqi for real-time dialogue. Designed theatrical interaction protocols for on-stage drama. Pioneered multi-robot collaboration with AutoGen.",
    techStack: ['NAOqi', 'AutoGen', 'Llama', 'Hugging Face', 'Python'],
    link: null,
    image: '🤖'
  },
  {
    id: 'research-2',
    title: 'Research Assistant',
    company: 'UVA Link Lab',
    dateRange: 'Sep 2025 - Present',
    summary: 'Robot teleoperation and imitation learning research',
    description: 'Built custom keyboard and SpaceMouse teleoperation controllers in robosuite/MuJoCo and developed an end-to-end data collection pipeline for imitation learning. Validated controllers across multiple robot embodiments with playback and visualization tools.',
    techStack: ['Python', 'MuJoCo', 'robosuite'],
    link: null,
    image: '🤖'
},
{
  id: 'research-3',
  title: 'Research Assistant',
  company: 'University of Virginia',
  dateRange: 'Jan 2026 - Present',
  summary: 'Machine learning research',
  description: 'Conducting machine learning research under Professor Yanjun Qi, focusing on developing and exploring data-driven models and algorithms.',
  techStack: ['Machine Learning'],
  link: null,
  image: '📊'
}


];