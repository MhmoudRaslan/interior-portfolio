import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero-section d-flex align-items-center position-relative overflow-hidden">
      <div className="hero-bg"></div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8">
            <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
              <h1 className="display-1 fw-bold mb-4">
                Transforming
                <span className="d-block text-gradient">Spaces into Art</span>
              </h1>
              <p className="lead mb-4 text-muted">
                Creating beautiful, functional interiors that reflect your unique style and enhance your daily living experience.
              </p>
              <a href="#portfolio" className="btn btn-primary btn-lg rounded-pill px-5 py-3 btn-hover">
                View Portfolio
                <ChevronRight className="ms-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;