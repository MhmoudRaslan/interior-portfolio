import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Lightbox from './Lightbox';
import project1 from '../assets/ADFINa/ad1.jpg';
import project2 from '../assets/ADFINa/ad2.jpg';
import project3 from '../assets/BEDROOM/BR1.jpg';
import project4 from '../assets/ADFINa/ad4.jpg';
import project5 from '../assets/ADFINa/ad5.jpg';
import project6 from '../assets/ADFINa/ad6.jpg';
import project7 from '../assets/ADFINa/ad7.jpg';
import project8 from '../assets/ADFINa/ad8.jpg';
import project9 from '../assets/ADFINa/ad9.jpg';
import project10 from '../assets/BATHROOM/bth1.jpg';
import project11 from '../assets/BATHROOM/bth2.jpg';
import project12 from '../assets/BATHROOM/bth3.jpg';
import project13 from '../assets/BEDROOM/BR2.jpg';
import project14 from '../assets/BEDROOM/BR3.jpg';
import project15 from '../assets/BEDROOM/BR4.jpg';
import project16 from '../assets/BEDROOM/BR5.jpg';
import project17 from '../assets/fin/fnc1.jpg';
import project18 from '../assets/fin/fnc2.jpg';
import project19 from '../assets/fin/hd1.jpg';
import project20 from '../assets/fin/hd2.jpg';
import project21 from '../assets/fin/hd3.jpg';
import project22 from '../assets/fin/mt1.jpg';
import project23 from '../assets/fin/mt2.jpg';
import project24 from '../assets/fin/rec1.jpg';
import project25 from '../assets/fin/rec2.jpg';
import project26 from '../assets/fin/rec3.jpg';
import project27 from '../assets/fin/rec4.jpg';
import project28 from '../assets/fin/rec5.jpg';
import project29 from '../assets/fin/rec6.jpg';
import project30 from '../assets/fin/rec7.jpg';
import project31 from '../assets/fin/rec8.jpg';
import project32 from '../assets/kit/kit1.jpg';
import project33 from '../assets/kit/kit2.jpg';
import project34 from '../assets/kit/kit3.jpg';
import project35 from '../assets/kit/kit4.jpg';
import project36 from '../assets/liv/LIV1.jpg';
import project37 from '../assets/liv/LIV2.jpg';
import project38 from '../assets/liv/LIV3.jpg';
import project39 from '../assets/liv/LIV4.jpg';
import project40 from '../assets/liv/LIV5.jpg';
import project41 from '../assets/liv/LIV6.jpg';
import project42 from '../assets/liv/LIV7.jpg';
import project43 from '../assets/liv/LIV8.jpg';
import project44 from '../assets/liv/LIV9.jpg';
import project45 from '../assets/meraki bath/1.jpg';
import project46 from '../assets/meraki bath/2.jpg';
import project47 from '../assets/meraki bath/3.jpg';
import project48 from '../assets/meraki bath/4.jpg';
import project49 from '../assets/meraki bath/5.jpg';

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
      title: 'Luxury Penthouse', 
      category: 'Residential', 
      img: project3
    },
    { 
      id: 13, 
      title: 'Contemporary Office', 
      category: 'Commercial', 
      img: project13
    },
    { 
      id: 14, 
      title: 'Scandinavian Kitchen', 
      category: 'Residential', 
      img: project14
    },
    { 
      id: 15, 
      title: 'Boutique Hotel Lobby', 
      category: 'Hospitality', 
      img: project15
    },
    { 
      id: 16, 
      title: 'Cozy Bedroom Retreat', 
      category: 'Residential', 
      img: project16
    },
    { 
      id: 17, 
      title: 'Modern Minimalist Living', 
      category: 'Residential', 
      img: project17
    },
    { 
      id: 18, 
      title: 'Luxury Penthouse', 
      category: 'Residential', 
      img: project19 
    },
    { 
      id: 19, 
      title: 'Contemporary Office', 
      category: 'Commercial', 
      img: project20
    },
    { 
      id: 20, 
      title: 'Scandinavian Kitchen', 
      category: 'Residential', 
      img: project21
    },
    { 
      id: 21, 
      title: 'Boutique Hotel Lobby', 
      category: 'Hospitality', 
      img: project22
    },
    { 
      id: 22, 
      title: 'Cozy Bedroom Retreat', 
      category: 'Residential', 
      img: project23
    },
    { 
      id: 23, 
      title: 'Modern Minimalist Living', 
      category: 'Residential', 
      img: project24
    },
    { 
      id: 24, 
      title: 'Luxury Penthouse', 
      category: 'Residential', 
      img: project25
    },
    { 
      id: 25, 
      title: 'Contemporary Office', 
      category: 'Commercial', 
      img: project26
    },
    { 
      id: 26, 
      title: 'Scandinavian Kitchen', 
      category: 'Residential', 
      img: project27
    },
    { 
      id: 27, 
      title: 'Boutique Hotel Lobby', 
      category: 'Hospitality', 
      img: project28
    },
    { 
      id: 28, 
      title: 'Cozy Bedroom Retreat', 
      category: 'Residential', 
      img: project29
    },
    { 
      id: 29, 
      title: 'Luxury Penthouse', 
      category: 'Residential', 
      img: project30
    },
    { 
      id: 30, 
      title: 'Contemporary Office', 
      category: 'Commercial', 
      img: project31
    },
     { 
      id: 31, 
      title: 'Modern Minimalist Living', 
      category: 'Residential', 
      img: project18
    },
     { 
      id: 32, 
      title: 'Modern Minimalist Living', 
      category: 'Residential', 
      img: project32
    },
    { 
      id: 33, 
      title: 'Luxury Penthouse', 
      category: 'Residential', 
      img: project33 
    },
    { 
      id: 34, 
      title: 'Contemporary Office', 
      category: 'Commercial', 
      img: project34
    },
    { 
      id: 35, 
      title: 'Scandinavian Kitchen', 
      category: 'Residential', 
      img: project35
    },
    { 
      id: 36, 
      title: 'Boutique Hotel Lobby', 
      category: 'Hospitality', 
      img: project36
    },
    { 
      id: 37, 
      title: 'Cozy Bedroom Retreat', 
      category: 'Residential', 
      img: project37
    },
    { 
      id: 38, 
      title: 'Modern Minimalist Living', 
      category: 'Residential', 
      img: project38
    },
    { 
      id: 39, 
      title: 'Luxury Penthouse', 
      category: 'Residential', 
      img: project39
    },
    { 
      id: 40, 
      title: 'Contemporary Office', 
      category: 'Commercial', 
      img: project40
    },
    { 
      id: 41, 
      title: 'Scandinavian Kitchen', 
      category: 'Residential', 
      img: project41
    },
    { 
      id: 42, 
      title: 'Boutique Hotel Lobby', 
      category: 'Hospitality', 
      img: project42
    },
    { 
      id: 43, 
      title: 'Luxury Penthouse', 
      category: 'Residential', 
      img: project43
    },
    { 
      id: 44, 
      title: 'Contemporary Office', 
      category: 'Commercial', 
      img: project44
    },
    { 
      id: 45, 
      title: 'Scandinavian Kitchen', 
      category: 'Residential', 
      img: project45
    },
    { 
      id: 46, 
      title: 'Boutique Hotel Lobby', 
      category: 'Hospitality', 
      img: project46
    },
    { 
      id: 47, 
      title: 'Cozy Bedroom Retreat', 
      category: 'Residential', 
      img: project47
    },
    { 
      id: 48, 
      title: 'Modern Minimalist Living', 
      category: 'Residential', 
      img: project48
    },
    { 
      id: 49, 
      title: 'Luxury Penthouse', 
      category: 'Residential', 
      img: project49
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