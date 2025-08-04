import metadata from '../../../data/metadata.json';
import { ImageCommon } from '../common';
const className = 'st-menu-section';

const MenuSection: React.FC = () => {
  return (
    <div className={`${className}__container`}>
      <div className={`${className}__container__menu-image`}>
        <ImageCommon
          className="d-flex justify-content-center align-items-center"
          src={metadata.sectionMenu.images[0].image}
          alt={metadata.sectionMenu.images[0].alt}
          style={{ width: '50%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default MenuSection;
