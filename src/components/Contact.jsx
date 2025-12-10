import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `omar.nasserrr97@gmail.com?subject=Portfolio Inquiry from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsApp = () => {
    const phone = '+201155222824'; // Replace with actual phone number
    const message = `Hi, I'm ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    { icon: <Mail size={24} />, title: 'Email', value: 'omar.nasserrr97@gmail.com' },
    { icon: <Phone size={24} />, title: 'Phone', value: '+201155222824' },
    { icon: <MapPin size={24} />, title: 'Location', value: 'ZAGAZIG-SHARKIA-EGYPT' },
  ];

  return (
    <section id="contact" className="contact-section py-5 bg-light" ref={sectionRef}>
      <div className="container py-5">
        <div className={`text-center mb-5 ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="display-4 fw-bold mb-3">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="lead text-muted mb-0">
            Ready to transform your space? Let's discuss your project and bring your vision to life.
          </p>
        </div>
        <div className="row g-5">
          <div className={`col-lg-5 ${isVisible ? 'slide-in-left' : ''}`}>
            <h3 className="h4 fw-bold mb-4">Contact Information</h3>
            <div className="d-flex flex-column gap-3 mb-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="card border-0 shadow-sm card-hover">
                  <div className="card-body d-flex align-items-start">
                    <div className="text-primary me-3 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">{info.title}</h6>
                      <p className="text-muted mb-0">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h6 className="fw-bold mb-3">Follow Me</h6>
              <div className="d-flex gap-2">
                <a href="https://www.instagram.com/omarabdulnasserdesigns/" className="btn btn-outline-primary rounded-circle p-2 btn-hover">
                  <Instagram size={20} />
                </a>
                <a href="#" className="btn btn-outline-primary rounded-circle p-2 btn-hover">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className={`col-lg-7 ${isVisible ? 'slide-in-right' : ''}`}>
            <div className="card border-0 shadow-lg">
              <div className="card-body p-4 p-md-5">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control form-control-lg"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control form-control-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-control form-control-lg"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <button
                      onClick={handleEmailSubmit}
                      className="btn btn-primary btn-lg w-100 btn-hover"
                    >
                      <Mail size={20} className="me-2" />
                      Send Email
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button
                      onClick={handleWhatsApp}
                      className="btn btn-success btn-lg w-100 btn-hover"
                    >
                      <MessageCircle size={20} className="me-2" />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;