import React from 'react';
import './Project.css'; // you can keep/trim if you want existing global styles
import '../Card/SideCard.css';
import SideCard from '../Card/SideCard';
import projects from './ProjectData';

export default function Projects() {
  return (
    <div id="project" className="project-container">
      <h2>Projects</h2>
      <div className="section">
        {projects.map((p, idx) => (
          <SideCard
            key={idx}
            title={p.title}
            link={p.link}
            imageSrc={p.image}
            dateRange={p.dateRange}
            summary={p.summary}
            bullets={p.bullets}
            tags={p.tags}
          />
        ))}
      </div>
    </div>
  );
}