import { Carousel, Col, Container, Row } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
import { ImageCommon, SvgIcon } from '../common';
import { IconArrowRounded } from '../decoraters';

const className = 'st-mobile-home-section';

const MobileHomeSection: React.FC = () => {
  const prevIcon = () => <IconArrowRounded id="icon-arrow-left2" size="10.8" />;
  const nextIcon = () => (
    <IconArrowRounded id="icon-arrow-right2" size="10.8" />
  );
  
  return (
    <div
      id={`section--${SectionName.station}`}
      className={`${className}__container`}
    >
      {/* Carousel Section */}
      <Carousel nextIcon={nextIcon()} prevIcon={prevIcon()}>
        {metadata.sectionCarousel.banners.map((item, i) => (
          <Carousel.Item key={i}>
            <ImageCommon className="d-block" src={item.image} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Middle Content Section */}
      <div className={`${className}__middle-content`}>
        <Container className={`${className}__middle-content__card`}>
          <ImageCommon
            className="pb-2"
            src={metadata.sectionCarousel.middleContent.icon}
            style={{ maxWidth: '45%' }}
          />
          <div className={`${className}__middle-content__description`}>
            {metadata.sectionCarousel.middleContent.mobileDescription}
          </div>
        </Container>
        <div className={`${className}__middle-content__bg-decor`}>
          <Row>
            <Col
              className={`text-start ${className}__middle-content__bg-decor__icon-left`}
            >
              <SvgIcon id="icon-foot-left" />
            </Col>
            <Col
              className={`text-end ${className}__middle-content__bg-decor__icon-right`}
            >
              <SvgIcon id="icon-foot-right" />
            </Col>
          </Row>
        </div>
      </div>

      {/* Opening Images Section */}
      <div className={`${className}__opening`}>
        <div className={`${className}__opening__images`}>
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
    </div>
  );
};

export default MobileHomeSection;
