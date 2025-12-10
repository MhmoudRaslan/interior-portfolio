import React from 'react';

const ProjectCard = ({ project, index, isVisible, onClick }) => {
  return (
    <div 
      className={`project-card h-100 ${isVisible ? 'fade-in-up' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      <div className="card border-0 shadow-sm h-100 overflow-hidden card-hover" style={{ cursor: 'pointer' }}>
        <div className="position-relative overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="card-img-top project-img"
            style={{ height: '300px', objectFit: 'cover' }}
          />
          <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-4">
            <div className="text-white">
              <span className="badge bg-warning text-dark mb-2">{project.category}</span>
              <h5 className="card-title fw-bold mb-0">{project.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;