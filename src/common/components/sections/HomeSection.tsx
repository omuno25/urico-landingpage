import { Container, Row, Col } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
import { ImageCommon, SvgIcon } from '../common';

const className = 'st-home-section';

const HomeSection: React.FC = () => {
  return (
    <div
      id={`section--${SectionName.station}`}
      className={`${className}__container`}
    >
      {/* Carousel/Hero Section */}
      <div className={`${className}__hero`}>
        <div className={`${className}__hero__logo`}>
          <ImageCommon
            src={metadata.sectionCarousel.banners[0].image}
            alt={metadata.sectionCarousel.banners[0].alt}
          />
          <div className={`${className}__hero__comming-soon`}>
            <ImageCommon
              className="d-flex justify-content-center align-items-center"
              src={metadata.sectionCarousel.banners[1].image}
              alt={metadata.sectionCarousel.banners[1].alt}
              style={{ width: '30%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Middle Content Section */}
      <div className={`${className}__middle-content`}>
        <Container className={`${className}__middle-content__card`}>
          <ImageCommon
            className="pb-2"
            src={metadata.sectionCarousel.middleContent.icon}
            style={{ maxWidth: '45%' }}
          />
          <div className={`${className}__middle-content__description`}>
            {metadata.sectionCarousel.middleContent.description}
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

export default HomeSection;
