import React, { useState, useEffect, useRef } from 'react';
   import designerPhoto from '../assets/WhatsApp Image 2025-05-06 at 07.35.48_3c5a9ce4.jpg';    


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const specialties = ['Residential', 'Commercial', 'Hospitality', 'Renovation'];

  return (
    <section id="about" className="about-section py-5 bg-light" ref={sectionRef}>
      <div className="container py-5">
        <div className={`text-center mb-5 ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="display-4 fw-bold mb-3">
            About <span className="text-primary">Me</span>
          </h2>
        </div>
        <div className="row align-items-center g-5">
          <div className={`col-lg-6 ${isVisible ? 'slide-in-left' : ''}`}>
            <img
              src={designerPhoto}
              alt="Designer"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
          <div className={`col-lg-6 ${isVisible ? 'slide-in-right' : ''}`}>
            <h3 className="h2 fw-bold mb-4">Passionate About Design</h3>
            <p className="lead text-muted mb-4">
              With over 15 years of experience in interior design, I specialize in creating spaces that blend functionality with aesthetic beauty. My approach combines modern design principles with timeless elegance.
            </p>
            <p className="text-muted mb-4">
              Every project is a unique journey, and I work closely with clients to understand their vision and bring it to life through thoughtful design solutions.
            </p>
            <div className="d-flex flex-wrap gap-2">
              {specialties.map((tag, index) => (
                <span key={index} className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;