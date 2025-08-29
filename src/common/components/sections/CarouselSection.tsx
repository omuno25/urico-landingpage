import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
import { ImageCommon } from '../common';

const className = 'st-carousel-section';

const CarouselSection: React.FC = () => {
  return (
    <div
      id={`section--${SectionName.station}`}
      className={`${className}__container`}
    >
      <div className={`${className}__container__content-center`}>
        <div className="d-flex flex-column justify-content-center align-items-center gap-4">
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
