import { Card } from 'react-bootstrap';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
const className = 'st-mobile-cleaning-process-section';

const MobileCleaningProcessSection: React.FC = () => {
  return (
    <div
      id={`section--${SectionName.process}`}
      className={`${className}__container`}
    >
      <div className={`text-center ${className}__container__wrap-content`}>
        <h1 className={`pb-2 ${className}__container__heading`}>
          {metadata.sectionCleaningProcess.heading}
        </h1>
        <p className={`${className}__container__description`}>
          {metadata.sectionCleaningProcess.description}
        </p>
      </div>
      <Swiper
        slidesPerView={'auto'}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {metadata.sectionCleaningProcess.articles.map((item, i) => (
          <SwiperSlide key={i}>
            <Card className={`${className}__container__card`}>
              <div className={`${className}__container__hook`}>
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

export default MobileCleaningProcessSection;
