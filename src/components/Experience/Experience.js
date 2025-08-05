import React from 'react';
import './Experience.css';
import '../Card/SideCard.css';
import SideCard from '../Card/SideCard';
import experiences from './experienceData';

export default function Experience() {
  return (
    <section id="experience" className="experience-container">
      <h2>Experience</h2>
      <div className="section">
        {experiences.map((e, i) => (
          <SideCard
            key={i}
            title={e.title}
            link={e.link}
            imageSrc={e.image}
            dateRange={e.dateRange}
            summary={e.summary}
            bullets={e.bullets}
            tags={e.tags}
          />
        ))}
      </div>
    </section>
  );
}