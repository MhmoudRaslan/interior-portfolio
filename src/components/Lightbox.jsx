import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = '';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  if (currentIndex === null) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="lightbox-close" onClick={onClose}>
          <X size={30} />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button className="lightbox-prev" onClick={onPrev}>
            <ChevronLeft size={40} />
          </button>
        )}

        {/* Image */}
        <div className="lightbox-image-container">
          <img
            src={currentImage.img}
            alt={currentImage.title}
            className="lightbox-image"
          />
          <div className="lightbox-info">
            <span className="badge bg-warning text-dark me-2">
              {currentImage.category}
            </span>
            <h4 className="text-white mb-0">{currentImage.title}</h4>
          </div>
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button className="lightbox-next" onClick={onNext}>
            <ChevronRight size={40} />
          </button>
        )}

        {/* Image Counter */}
        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;