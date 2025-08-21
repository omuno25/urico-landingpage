import { useEffect, useRef, useState } from 'react';
import metadata from '../../../data/metadata.json';
import { ImageCommon } from '../common';
import { useCheckMobileScreen } from '../../hooks';

const className = 'st-frame-section';

const FrameSection: React.FC = () => {
  const isMobile = useCheckMobileScreen();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Entrance animation when section comes into view
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
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${className}__container ${isVisible ? 'animate-in' : ''}`}
    >
      <div className={`${className}__container__description`}>
        {metadata.sectionFrame.description}
      </div>
      <div className={`${className}__container__logo`}>
        <ImageCommon
          width={isMobile ? 60 : 100}
          height={isMobile ? 60 : 100}
          src={metadata.sectionFooter.logo.src}
          alt={metadata.sectionFooter.logo.alt}
          priority={true}
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
          }}
        />
      </div>
    </div>
  );
};

export default FrameSection;
