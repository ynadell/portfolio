import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({ date, title, company, location, description, technologies }) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <div className="experience-header-left">
          <h3 className="experience-title">{title}</h3>
          <div className="experience-company">{company}</div>
          <div className="experience-location">{location}</div>
        </div>
        <div className="experience-date">{date}</div>
      </div>
      <p className="experience-description">{description}</p>
      <div className="experience-tech">
        {technologies.map((tech, techIndex) => (
          <span key={techIndex} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard 