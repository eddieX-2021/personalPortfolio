import { Item } from '@/lib/types';

export const projects: Item[] = [
  {
    id: 'project-1',
    title: 'Recipe Finder',
    company: 'Personal Project',
    dateRange: 'August 2022 - June 2023',
    summary: 'Android app for personalized recipe recommendations',
    description: 'Built an Android application that suggests recipes using ingredient-based search, featuring a clean UI to improve meal planning and user retention.',
    techStack: ['Android Studio', 'Java', 'Figma'],
    link: 'https://www.youtube.com/watch?v=FlYsB-SBM1s',
    image: '🍳'
    },

    {
    id: 'project-2',
    title: 'Eggs By The Dozen',
    company: 'School Project',
    dateRange: 'January 2024 - May 2024',
    summary: 'Computer vision tool for parasite detection in eggs',
    description: 'Developed a computer vision pipeline to detect parasites in egg images using machine learning, improving inspection accuracy and reducing manual review time.',
    techStack: ['Computer Vision', 'PyTorch', 'Python','C','GitHub'],
    link: 'https://github.com/3amBEANS/EggsByTheDozen',
    image: '/images/projects/egg.png'
    }
,
{
  id: 'project-3',
  title: 'To-Do List App',
  company: 'Personal Project',
  dateRange: 'August 2023 - March 2024',
  summary: 'Flask-based task management application',
  description: 'Developed a task management web app with a Flask backend and responsive HTML/JavaScript frontend, supporting task creation, editing, and data persistence.',
  techStack: ['Flask', 'HTML', 'JavaScript', 'Node.js'],
  link: 'https://github.com/eddieX-2021/TodoList',
  image: '/images/projects/todo.png'
},
{
  id: 'project-4',
  title: 'Restaurant Recommendation',
  company: 'Personal Project',
  dateRange: 'December 2024 - March 2025',
  summary: 'Personalized restaurant recommendation system',
  description: 'Built a machine learning system to recommend restaurants based on user preferences, integrating Google Maps API for location-based results.',
  techStack: ['Machine Learning', 'Google Maps API', 'Python'],
  link: 'https://github.com/eddieX-2021/restaurant-recommandation',
  image: '/images/projects/restu.png'
},
{
  id: 'project-5',
  title: 'Course Review Website',
  company: 'School Project',
  dateRange: 'August 2024 - December 2025',
  summary: 'Java-based platform for course reviews',
  description: 'Implemented a Java and SQL-backed web platform allowing users to submit ratings and reviews with a clean, navigable user interface.',
  techStack: ['Java', 'SQL', 'Spring Boot', 'HTML', 'CSS'],
  link: 'https://github.com/orgs/uva-cs3140-fa24/teams/hw6-pym4ns-uyh9nu-mgn3uh',
  image: '/images/projects/course.png'
},
{
  id: 'project-6',
  title: 'Early-Career Salary Prediction & ROI Analysis',
  company: 'Research Project',
  dateRange: 'August 2024 - December 2025',
  summary: 'College salary ROI analysis using machine learning',
  description: 'Built a Random Forest regression model using R to predict early-career salaries and computed ROI metrics to rank colleges across states.',
  techStack: ['R', 'Machine Learning', 'Feature Engineering'],
  link: 'https://github.com/huygnguyen04/Early-Career-Salary-Prediction-and-ROI-Analysis',
  image: '/images/projects/ROI.png'
},
{
  id: 'project-7',
  title: 'Linear Regression App',
  company: 'School Project',
  dateRange: 'August 2024 - December 2025',
  summary: 'Interactive Shiny app for linear regression',
  description: 'Developed an R Shiny app allowing CSV uploads and dynamic variable selection with real-time regression metrics and visualization.',
  techStack: ['R', 'Shiny', 'Machine Learning'],
  link: 'https://huynguyen1211.shinyapps.io/APMA3150-ExtraCreditProject/',
  image: '/images/projects/shiny.png'
},
{
  id: 'project-8',
  title: 'Predict Next Word',
  company: 'Personal Project',
  dateRange: 'March 2025 - June 2025',
  summary: 'LSTM-based next-word prediction model',
  description: 'Implemented an LSTM network trained on Shakespeare text and deployed via Streamlit with full ML lifecycle management.',
  techStack: ['Deep Learning', 'LSTM', 'Streamlit', 'Conda','Python'],
  link: 'https://github.com/eddieX-2021/PredictNextWord',
  image: '/images/projects/predict.png'
},
{
  id: 'project-9',
  title: 'Anime Review Sentiment Analysis',
  company: 'Personal Project',
  dateRange: 'March 2025 - June 2025',
  summary: 'Sentiment analysis using Simple RNN',
  description: 'Built a Simple RNN-based NLP pipeline for sentiment classification and deployed it using Streamlit for interactive analysis.',
  techStack: ['Deep Learning', 'Simple RNN', 'Streamlit', 'Conda','Python'],
  link: 'https://github.com/eddieX-2021/SimpleRNNReview',
  image: '/images/projects/simple.png'
},
{
  id: 'project-10',
  title: 'Heart Disease Prediction (ANN)',
  company: 'Personal Project',
  dateRange: 'March 2025 - June 2025',
  summary: 'ANN-based heart disease risk prediction',
  description: 'Built an end-to-end ANN model with TensorFlow and scikit-learn, deployed through Streamlit for real-time predictions.',
  techStack: ['Artificial Neural Networks', 'Deep Learning', 'Streamlit', 'TensorFlow', 'scikit-learn','Python'],
  link: 'https://github.com/eddieX-2021/HeartDiseaseWithANN',
  image: '/images/projects/heart.png'
},
{
  id: 'project-11',
  title: 'Gear Share',
  company: 'School Project',
  dateRange: 'January 2025 - May 2025',
  summary: 'Community-based outdoor gear sharing platform',
  description: 'Built a Django web application enabling users to share and manage outdoor gear, integrating AWS S3 for secure media storage.',
  techStack: ['Django', 'AWS', 'Bootstrap', 'JavaScript'],
  link: 'https://github.com/eddieX-2021/GearShare',
  image: '/images/projects/gearshare.jpg'
},
{
  id: 'project-12',
  title: 'Scoutio',
  company: 'Personal Project',
  dateRange: 'December 2025 - Present',
  summary: 'Full-stack travel and social discovery platform',
  description: 'Built a Spring Boot and PostgreSQL/PostGIS platform supporting authentication, reviews, bucket lists, and geospatial search across 5K+ locations. Designed containerized REST APIs with Docker and environment-based configuration.',
  techStack: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'PostGIS', 'Docker', 'AWS S3', 'JWT', 'JPA/Hibernate'],
  link: 'https://github.com/eddieX-2021/Scoutio',
  image: '🗺️'
},
{
  id: 'project-13',
  title: 'GoSustainYourself',
  company: 'Hackathon Project',
  dateRange: 'March 2025 - March 2025',
  summary: 'Computer vision system for recyclable material classification',
  description: 'Trained an Xception-based image classifier achieving ~94% accuracy for recyclable material recognition and deployed real-time inference through a Django REST API with confidence scoring.',
  techStack: ['PyTorch', 'Machine Learning', 'Computer Vision', 'Django', 'Google API', 'Auth0'],
  link: 'https://github.com/lyrics00/GoSustainYourself',
  image: '♻️'
},{
  id: 'project-14',
  title: 'ShapeShift',
  company: 'Personal Project',
  dateRange: '2025 - Present',
  summary: 'AI-powered fitness and nutrition platform',
  description: 'Developed a full-stack health platform generating personalized meal and workout recommendations with interactive progress visualizations and scalable JWT/OAuth authentication.',
  techStack: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'JWT', 'ShadCN', 'Vercel', 'Render'],
  link: 'https://shape-shift-vert.vercel.app/',
  image: '💪'
},
{
  id: 'project-15',
  title: 'AI Stock Prediction',
  company: 'Personal Project',
  dateRange: '2025 - Present',
  summary: 'Real-time stock forecasting system',
  description: 'Built an end-to-end stock prediction system with automated data ingestion, feature engineering, and sentiment analysis, achieving ~91% accuracy with traditional ML and ~76% with deep learning models.',
  techStack: ['Machine Learning', 'Deep Learning', 'Next.js', 'FastAPI', 'Python', 'Vercel', 'Render'],
  link: 'https://stock-prediction-app-two.vercel.app/',
  image: '📈'
}













];