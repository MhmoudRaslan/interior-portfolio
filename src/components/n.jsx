import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Lightbox from './Lightbox';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    { 
      id: 1, 
      title: 'Modern Minimalist Living', 
      category: 'Residential', 
      img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80' 
    },
    { 
      id: 2, 
      title: 'Luxury Penthouse', 
      category: 'Residential', 
      img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' 
    },
    { 
      id: 3, 
      title: 'Contemporary Office', 
      category: 'Commercial', 
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' 
    },
    { 
      id: 4, 
      title: 'Scandinavian Kitchen', 
      category: 'Residential', 
      img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80' 
    },
    { 
      id: 5, 
      title: 'Boutique Hotel Lobby', 
      category: 'Hospitality', 
      img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80' 
    },
    { 
      id: 6, 
      title: 'Cozy Bedroom Retreat', 
      category: 'Residential', 
      img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80' 
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-5 bg-white" ref={sectionRef}>
      <div className="container py-5">
        <div className={`text-center mb-5 ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="display-4 fw-bold mb-3">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="lead text-muted mb-0">
            Explore a selection of my recent work showcasing diverse styles and innovative solutions.
          </p>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <ProjectCard 
                project={project} 
                index={index} 
                isVisible={isVisible}
                onClick={() => handleOpenLightbox(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={projects}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </section>
  );
};

export default Portfolio;