import metadata from '../../../data/metadata.json';
import { ImageCommon } from '../common';
const className = 'st-opening-section';

const OpeningSection: React.FC = () => {
  return (
    <div className={`${className}__container`}>
      <div className={`${className}__container__opening-image`}>
        <div className="w-50 d-flex justify-content-center align-items-center">
          <ImageCommon
            src={metadata.sectionOpening.images[1].image}
            alt={metadata.sectionOpening.images[1].alt}
          />
        </div>
        <div className="w-50">
          <ImageCommon
            src={metadata.sectionOpening.images[0].image}
            alt={metadata.sectionOpening.images[0].alt}
          />
        </div>
      </div>
    </div>
  );
};

export default OpeningSection;
