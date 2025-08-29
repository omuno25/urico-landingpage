import { useEffect, useRef, useState } from 'react';
import metadata from '../../../data/metadata.json';
import { ImageCommon } from '../common';
import { useCheckMobileScreen } from '../../hooks';

const className = 'st-frame-section';

const FrameSection: React.FC = () => {
  const isMobile = useCheckMobileScreen();

  // Entrance animation when section comes into view

  return (
    <div className={`${className}__container`}>
      {/* <div className={`${className}__container__bg-image`}>
        <ImageCommon
          src={metadata.sectionFrame.images[0].image}
          alt={metadata.sectionFrame.images[0].alt}
        />
      </div> */}

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
