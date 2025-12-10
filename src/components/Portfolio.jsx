import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Lightbox from './Lightbox';
import project1 from '../assets/ADFINa/ad1.jpg';
import project2 from '../assets/ADFINa/ad2.jpg';
import project4 from '../assets/ADFINa/ad4.jpg';
import project5 from '../assets/ADFINa/ad5.jpg';
import project6 from '../assets/ADFINa/ad6.jpg';
import project7 from '../assets/ADFINa/ad7.jpg';
import project8 from '../assets/ADFINa/ad8.jpg';
import project9 from '../assets/ADFINa/ad9.jpg';
import project10 from '../assets/BATHROOM/bth1.jpg';
import project11 from '../assets/BATHROOM/bth2.jpg';
import project12 from '../assets/BATHROOM/bth3.jpg';
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
      img: project1
    },
    { 
      id: 2, 
      title: 'Luxury Penthouse', 
      category: 'Residential', 
      img: project2 
    },
    { 
      id: 3, 
      title: 'Contemporary Office', 
      category: 'Commercial', 
      img: project4
    },
    { 
      id: 4, 
      title: 'Scandinavian Kitchen', 
      category: 'Residential', 
      img: project5
    },
    { 
      id: 5, 
      title: 'Boutique Hotel Lobby', 
      category: 'Hospitality', 
      img: project6
    },
    { 
      id: 6, 
      title: 'Cozy Bedroom Retreat', 
      category: 'Residential', 
      img: project7
    },
    { 
      id: 7, 
      title: 'Modern Minimalist Living', 
      category: 'Residential', 
      img: project8
    },
    { 
      id: 8, 
      title: 'Luxury Penthouse', 
      category: 'Residential', 
      img: project9 
    },
    { 
      id: 9, 
      title: 'Contemporary Office', 
      category: 'Commercial', 
      img: project10
    },
    { 
      id: 10, 
      title: 'Scandinavian Kitchen', 
      category: 'Residential', 
      img: project11
    },
    { 
      id: 11, 
      title: 'Boutique Hotel Lobby', 
      category: 'Hospitality', 
      img: project12
    },
    { 
      id: 12, 
      title: 'Cozy Bedroom Retreat', 
      category: 'Residential', 
      img: project7
    },
  ];
    const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

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