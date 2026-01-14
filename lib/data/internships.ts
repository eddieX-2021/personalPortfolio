import {Item} from '@/lib/types';

export const internships: Item[] = [
    {
        id: 'internship-1',
        title: 'Software Engineering Intern',
        company: 'Lin Sheng',
        dateRange: 'June 2022 - August 2022',
        summary: 'Developed a Truck Queue Management System',
        description: 'Built a simple and efficient truck queue management system to improve loading and unloading efficiency for a storage company.',
        techStack: ['Java'],
        link: 'https://github.com/eddieX-2021/CarDisplay',
        image: '/images/internships/cardisplay.png'
    },
    {
        id: 'internship-2',
        title: 'Software Engineering Intern',
        company: 'University of Virginia - School of Engineering',
        dateRange: 'August 2023 - March 2024',
        summary: 'Developed Interactive Math Visualization Apps',
        description: 'Built MATLAB and Python-based GUI applications to visualize multivariable calculus and linear algebra concepts, improving student understanding and classroom engagement.',
        techStack: ['MATLAB', 'Python', 'AWS'],
        link: 'https://github.com/LearningThruGUI/MATLAB-GUI',
        image: '/images/projects/matlab.png'
    },
    {
        id: 'internship-3',
        title: 'Full Stack Developer Intern',
        company: 'Pindera',
        dateRange: 'Mar 2025 - Sep 2025',
        summary: 'Built a Full-Stack Research Visualization Platform',
        description: 'Built a full-stack React and Django application to visualize research algorithms, converting MATLAB code into Python pipelines and deploying a scalable AWS backend for fast, real-time execution.',
        techStack: ['React', 'Django', 'Python', 'MATLAB', 'AWS', 'Auth0'],
        link: 'http://3.19.197.204/',
        image: '/images/internships/pindera.png'
    }


];