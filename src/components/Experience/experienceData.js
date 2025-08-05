// src/data/experienceData.js
const experiences = [
  {
    title: 'Applied Math MATLAB App Development',
    link: 'https://github.com/Ai4Math/MATLAB-GUI',
    image: require('../../assets/Experience/matlab.png'),
    dateRange: '2023 – Present',
    summary: 'Built GUIs to visualize multivariable calculus & linear algebra.',
    bullets: [
      'Designed MATLAB & Python GUIs for teaching math concepts.',
      'Presented to 200+ students each semester to boost comprehension.',
      'Planning AWS deployment for wider access.',
    ],
    tags: [
      { name: 'MATLAB' },
      { name: 'Python' },
      { name: 'AWS' },
    ],
  },
  {
    title: 'Truck Readiness App',
    link: 'https://github.com/eddieX-2021/CarDisplay',
    image: require('../../assets/Experience/cardisplay.png'),
    dateRange: '2021 – 2022',
    summary: 'Logistics control system to assess truck readiness.',
    bullets: [
      'Centralized real-time truck status updates.',
      'Delivered a production system still in use.',
    ],
    tags: [
      { name: 'Java' },
    ],
  },
  {
    title: 'Pindera App',
    link: 'http://3.19.197.204/',
    image: require('../../assets/Experience/fvdam.png'),
    dateRange: '2025 – Present',
    summary: 'Full-stack research outreach with physics simulations.',
    bullets: [
      'Led backend conversion from MATLAB to Python.',
      'Crafted React frontend with AWS S3 storage.',
      'Deployed on AWS ECS/EC2 with containerized services.',
    ],
    tags: [
      { name: 'AWS' },
      { name: 'React' },
      { name: 'Auth0' },
      { name: 'Python' },
      { name: 'MATLAB' },
    ],
  },
  {
    title: 'UVA Collaborative Robotics Lab',
    link: null,
    image: require('../../assets/Experience/nao.jpg'),
    dateRange: '2025 – Present',
    summary: 'Human–robot interaction research using NAO robots.',
    bullets: [
      "Integrated Meta's Llama-2 with NAOqi for real-time dialogue.",
      'Designed theatrical interaction protocols for on-stage drama.',
      'Pioneered multi-robot collaboration with AutoGen.',
    ],
    tags: [
      { name: 'NAOqi' },
      { name: 'AutoGen' },
      { name: 'Llama' },
      { name: 'Hugging Face' },
    ],
  },
];

export default experiences;
