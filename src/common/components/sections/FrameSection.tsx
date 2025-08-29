import metadata from '../../../data/metadata.json';
import { ImageCommon } from '../common';

const className = 'st-frame-section';

const FrameSection: React.FC = () => {
  return (
    <div className={`${className}__container`}>
      <div className={`${className}__container__wrap`}>
        <div className={`${className}__container__wrap__description`}>
          {metadata.sectionFrame.description}
        </div>

        <div className={`${className}__container__wrap__logo`}>
          <ImageCommon
            src={metadata.sectionFooter.logo.src}
            alt={metadata.sectionFooter.logo.alt}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameSection;
