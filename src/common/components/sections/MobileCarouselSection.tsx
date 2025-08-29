import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
import { ImageCommon } from '../common';

const className = 'st-mobile-carousel-section';

const MobileCarouselSection: React.FC = () => {
  return (
    <div
      id={`section--${SectionName.station}`}
      className={`${className}__container`}
    >
      <div className={`${className}__container__banner`}>
        <ImageCommon src={metadata.sectionCarousel.banners[0].image} />
        <div className={`${className}__container__backdrop`}></div>
      </div>
    </div>
  );
};

export default MobileCarouselSection;
