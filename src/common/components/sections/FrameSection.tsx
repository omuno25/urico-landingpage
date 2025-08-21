import metadata from '../../../data/metadata.json';
import { ImageCommon } from '../common';

const className = 'st-frame-section';

const FrameSection: React.FC = () => {
  return (
    <div className={`${className}__container`}>
      <div
        className={`${className}__container__description h-100 d-flex mx-auto align-items-center`}
      >
        {metadata.sectionFrame.description}
      </div>
      <div className={`${className}__container__logo`}>
        <ImageCommon
          width={100}
          height={100}
          src={metadata.sectionFooter.logo.src}
          alt={metadata.sectionFooter.logo.alt}
        />
      </div>
    </div>
  );
};

export default FrameSection;
