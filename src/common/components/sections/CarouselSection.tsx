import { useState, useEffect } from 'react';
import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
import { ImageCommon } from '../common';

const className = 'st-carousel-section';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CarouselSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const targetDate = new Date(currentYear, 7, 23); // August 15th (month is 0-indexed)

    // If August 15th has passed this year, target next year
    if (now > targetDate) {
      targetDate.setFullYear(currentYear + 1);
    }

    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div
      id={`section--${SectionName.station}`}
      className={`${className}__container`}
    >
      <div className={`${className}__container__content-center`}>
        <div className="d-flex flex-column justify-content-center align-items-center gap-4">
          <ImageCommon
            className="d-flex justify-content-center align-items-center"
            src={metadata.sectionCarousel.banners[0].image}
            alt={metadata.sectionCarousel.banners[0].alt}
            style={{ width: '70%' }}
          />

          <div className={`${className}__container__scoll-down`}>
            <ImageCommon
              src={metadata.sectionCarousel.banners[1].image}
              alt={metadata.sectionCarousel.banners[1].alt}
              style={{ width: '70%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      <div className={`${className}__container__backdrop`}></div>
    </div>
  );
};

export default CarouselSection;
