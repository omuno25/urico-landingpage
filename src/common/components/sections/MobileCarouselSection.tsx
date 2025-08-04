import { Carousel, Col, Container, Row } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
import { ImageCommon, SvgIcon } from '../common';
import { IconArrowRounded } from '../decoraters';

const className = 'st-mobile-carousel-section';

const MobileCarouselSection: React.FC = () => {
  const prevIcon = () => <IconArrowRounded id="icon-arrow-left2" size="10.8" />;
  const nextIcon = () => (
    <IconArrowRounded id="icon-arrow-right2" size="10.8" />
  );
  return (
    <div
      id={`section--${SectionName.station}`}
      className={`${className}__container`}
    >
      <Carousel nextIcon={nextIcon()} prevIcon={prevIcon()}>
        {metadata.sectionCarousel.banners.map((item, i) => (
          <Carousel.Item key={i}>
            <ImageCommon className="d-block" src={item.image} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className={`${className}__container__middle-content`}>
        <Container className={`${className}__container__card`}>
          <ImageCommon
            className="pb-2"
            src={metadata.sectionCarousel.middleContent.icon}
            style={{ maxWidth: '45%' }}
          />

          <div className={`${className}__container__description`}>
            {metadata.sectionCarousel.middleContent.mobileDescription}
          </div>
        </Container>
        <div className={`${className}__container__bg-decor`}>
          <Row>
            <Col
              className={`text-start ${className}__container__bg-decor__icon-left`}
            >
              <SvgIcon id="icon-foot-left" />
            </Col>
            <Col
              className={`text-end ${className}__container__bg-decor__icon-right`}
            >
              <SvgIcon id="icon-foot-right" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MobileCarouselSection;
