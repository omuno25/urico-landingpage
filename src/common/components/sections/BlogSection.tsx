import { CSSProperties } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
import { redirectPageOpenWindow } from '../../utils/navigate';
import { SvgIcon } from '../common';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const className = 'st-blog-section';

const BlogSection: React.FC = () => {
  return (
    <div
      id={`section--${SectionName.blog}`}
      className={`${className}__background`}
    >
      <div className={`${className}__container`}>
        <Container className="text-center">
          <h1
            className={`pb-4 text-uppercase ${className}__container__heading`}
          >
            {metadata.sectionBlog.heading}
          </h1>
          <p className={`${className}__container__description`}>
            {metadata.sectionBlog.description}
          </p>
        </Container>
        <Swiper
          effect={'coverflow'}
          initialSlide={1}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          spaceBetween={15}
          // loop={true}
          breakpoints={{
            400: {
              slidesPerView: 2,
            },
            800: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
          }}
          style={
            {
              '--swiper-navigation-size': '8rem',
              '--swiper-navigation-sides-offset': '-0.8rem',
            } as CSSProperties
          }
        >
          <SvgIcon id="icon-arrow-left" className="swiper-button-prev" />
          <SvgIcon id="icon-arrow-right" className="swiper-button-next" />
          {metadata.sectionBlog.articles.map((item, i) => (
            <SwiperSlide key={i}>
              <Card className={`mb-2 ${className}__container__card`}>
                <Card.Img
                  className={`${className}__container__img`}
                  variant="top"
                  src={item.image}
                  alt="image"
                />

                <Card.Body className={` ${className}__container__body`}>
                  <p>{item.date} &nbsp;</p>
                  <Card.Title
                    className={` ${className}__container__title`}
                    onClick={(
                      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                    ) => redirectPageOpenWindow(e, item.href)}
                  >
                    {item.title}
                  </Card.Title>
                  <Card.Text className={` ${className}__container__text`}>
                    {item.shortDescription}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className={`${className}__container__footer`}>
                  <div className="d-flex">
                    <a
                      href={`${item.href}`}
                      target="_blank"
                      className={`w-100 ${className}__container__see-more`}
                    >
                      {metadata.sectionBlog.seeMore}
                    </a>
                    <SvgIcon id="arrow-narrow-right" />
                  </div>
                </Card.Footer>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="d-flex justify-content-center mt-3">
          <Button
            variant="primary"
            size="sm"
            className={`${className}__container__button-see-all`}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              redirectPageOpenWindow(e, metadata.sectionBlog.seeAllHref)
            }
          >
            <SvgIcon
              id="arrow-narrow-right"
              size="20"
              className={`${className}__container__ico-narrow`}
            />
            <span> {metadata.sectionBlog.seeAll}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
