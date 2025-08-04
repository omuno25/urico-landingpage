import metadata from '../../../data/metadata.json';
import { ImageCommon } from '../common';
const className = 'st-carousel-section';

const CarouselSection: React.FC = () => {
  return (
    <div className={`${className}__container`}>
      <div className={`${className}__container__logo`}>
        <ImageCommon
          src={metadata.sectionCarousel.banners[0].image}
          alt={metadata.sectionCarousel.banners[0].alt}
        />
        <div className={`${className}__container__comming-soon`}>
          <ImageCommon
            className="d-flex justify-content-center align-items-center"
            src={metadata.sectionCarousel.banners[1].image}
            alt={metadata.sectionCarousel.banners[1].alt}
            style={{ width: '30%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
