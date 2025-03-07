import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ title, description, technologies, github, demo }) => (
  <div className="project-card">
    <h3 className="project-title">{title}</h3>
    <p className="project-description">{description}</p>
    <div className="project-tech">
      {technologies.map((tech, index) => (
        <span key={index} className="tech-tag">{tech}</span>
      ))}
    </div>
    <div className="project-links">
      {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub →</a>}
      {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo →</a>}
    </div>
  </div>
)

export default ProjectCard 