import { useEffect, useRef, useState } from 'react';
import metadata from '../../../data/metadata.json';
import { ImageCommon } from '../common';
const className = 'st-opening-section';

const OpeningSection: React.FC = () => {
  // Dynamic image loading from metadata
  const openingImages = metadata.sectionOpening.images;

  // Entrance animation: reveal when in viewport
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${className}__container`}>
      <div
        ref={containerRef}
        className={`${className}__container__opening-image ${isVisible ? 'is-visible' : 'is-hidden'}`}
      >
        {/* Left column: Featured image */}
        <div className={`${className}__featured-column`}>
          <ImageCommon
            src={openingImages[0]?.image}
            alt={openingImages[0]?.alt || 'Featured image'}
            className={`${className}__image-main`}
          />
        </div>

        {/* Right column: Secondary images */}
        <div className={`${className}__secondary-column`}>
          {openingImages.slice(1).map((imageData, index) => (
            <div
              key={index}
              className={`${className}__secondary-image ${index === 0 ? 'primary' : 'secondary'}`}
            >
              <ImageCommon
                src={imageData.image}
                alt={imageData.alt || `Secondary image ${index + 1}`}
                className={`${className}__image-secondary`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpeningSection;
