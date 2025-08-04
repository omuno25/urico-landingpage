import { CSSProperties } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { SvgIcon } from '../common';

const className = 'st-cleaning-process-section';

const CleaningProcessSection: React.FC = () => {
  return (
    <div
      id={`section--${SectionName.process}`}
      className={`${className}__container`}
    >
      <Container
        fluid
        className={`container-lg text-center ${className}__container `}
      >
        <h1 className={`pb-4 text-uppercase ${className}__container__heading`}>
          {metadata.sectionCleaningProcess.heading}
        </h1>
        <p className={`${className}__container__description`}>
          {metadata.sectionCleaningProcess.description}
        </p>
      </Container>
      <Swiper
        slidesPerView={4}
        scrollbar={{
          hide: true,
        }}
        modules={[Navigation, Scrollbar]}
        breakpoints={{
          400: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
        style={
          {
            '--swiper-navigation-size': '6rem',
          } as CSSProperties
        }
      >
        <SvgIcon id="icon-arrow-left" className="swiper-button-prev" />
        <SvgIcon id="icon-arrow-right" className="swiper-button-next" />
        {metadata.sectionCleaningProcess.articles.map((item, i) => (
          <SwiperSlide key={i}>
            <Card className={`${className}__container__card`}>
              <div className={`${className}__container__img-hook`}>
                <Card.Img
                  className={`${className}__container__img`}
                  variant="top"
                  src={item.image}
                  alt="image"
                ></Card.Img>
                <div className={`${className}__container__rounded text-center`}>
                  <span> {String(i + 1).padStart(2, '0')}</span>
                </div>
              </div>

              <Card.Body className={`${className}__container__card-body`}>
                <Card.Title className={`${className}__container__card-title`}>
                  {item.title}
                </Card.Title>
                <Card.Text
                  className={`${className}__container__card-description`}
                >
                  {item.shortDescription}
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CleaningProcessSection;
