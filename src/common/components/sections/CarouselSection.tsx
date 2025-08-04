import { Carousel, Container } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { ImageCommon } from '../common';
import { IconArrowRounded } from '../decoraters';

const className = 'st-carousel-section';

const CarouselSection: React.FC = () => {
  const prevIcon = () => <IconArrowRounded id="icon-arrow-left2" size="15" />;
  const nextIcon = () => <IconArrowRounded id="icon-arrow-right2" size="15" />;

  return (
    <div className={`${className}__container`}>
      <Carousel
        className={`${className}__container__carousel`}
        nextIcon={nextIcon()}
        prevIcon={prevIcon()}
      >
        {metadata.sectionCarousel.banners.map((item, i) => (
          <Carousel.Item key={i}>
            <ImageCommon
              src={item.image}
              priority={true}
              fetchPriority="high"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={`${className}__container__bg-decor`}></div>
      <div className={`${className}__container__middle-content`}>
        <Container
          fluid
          className={`container-lg ${className}__container__card`}
        >
          <ImageCommon
            className="pb-4"
            src={metadata.sectionCarousel.middleContent.icon}
            style={{ maxWidth: '17.5%' }}
          />

          <div className={`${className}__container__description`}>
            {metadata.sectionCarousel.middleContent.description}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CarouselSection;
