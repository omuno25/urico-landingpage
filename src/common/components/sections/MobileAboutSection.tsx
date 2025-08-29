import { Col, Row } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { ImageCommon } from '../common';
import { GridImagePartial } from '../partials';
import { SectionName } from '../../utils/enum';

const className = 'st-mobile-about-section';

const MobileAboutSection: React.FC = () => {
  const openingImages = metadata.sectionAbout.images;
  const sliderImages = metadata.sectionAbout.sliders;

  return (
    <div
      id={`section--${SectionName.about}`}
      className={`${className}__container`}
    >
      <Row className={`${className}__container__row`}>
        <Col sm={12} md={6}>
          <div className={`${className}__container__text-left`}>
            <h2 className={`${className}__container__text-left__title`}>
              Giới thiệu
            </h2>
            <div className={`${className}__container__text-left__description`}>
              Chào mừng bạn đến với Urico Coffee – không gian cà phê nơi hương
              vị và cảm xúc giao hòa. Tọa lạc tại vị trí thuận tiện, Urico mang
              đến cho bạn một không gian ấm cúng, hiện đại nhưng vẫn giữ được sự
              gần gũi, thích hợp cho cả những buổi hẹn hò, trò chuyện bạn bè hay
              đơn giản là dành cho chính mình một khoảng lặng giữa nhịp sống bận
              rộn.
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className={`${className}__container__image-right`}>
            <ImageCommon
              src={openingImages[2]?.image}
              alt={openingImages[2]?.alt || `Secondary image 2`}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <GridImagePartial images={sliderImages} />
      </Row>
    </div>
  );
};

export default MobileAboutSection;
