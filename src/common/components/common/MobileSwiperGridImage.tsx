import { CSSProperties, ForwardedRef, useRef, useState } from 'react';
import { Pagination, Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox, { ThumbnailsRef } from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import ImageCommon from './ImageCommon';
import SvgIcon from './SvgIcon';

const SLIDES_PER_VIEW = 2;
const SLIDES_PER_GROUPS = 2;
const GRID_ROWS = 2;

type GridImage = {
  image: string;
};

export interface SwiperGridImageProps {
  images?: GridImage[];
}

const className = 'st-swiper-grid-image';

const SwiperGridImage: React.FC<SwiperGridImageProps> = (
  props: SwiperGridImageProps,
) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const thumbnailsRef: ForwardedRef<ThumbnailsRef> = useRef(null);
  const imagesLightBox = (props.images || []).map((item) => {
    return {
      src: `${item.image}`,
    };
  });

  const handleClickImage = (indexImage: number) => {
    setOpen(true);
    setIndex(indexImage);
  };

  return (
    <div className={`${className}__container`}>
      <Swiper
        className={`${className}__swiper`}
        grid={{
          rows: GRID_ROWS,
          fill: 'row',
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={SLIDES_PER_VIEW}
        slidesPerGroup={SLIDES_PER_GROUPS}
        modules={[Grid, Pagination, Navigation]}
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
        {props.images && props.images.length ? (
          props.images.map((item: GridImage, i: number) => (
            <SwiperSlide key={i} onClick={() => handleClickImage(i)}>
              <ImageCommon src={item.image} alt="image" />
            </SwiperSlide>
          ))
        ) : (
          <></>
        )}
      </Swiper>
      <Lightbox
        index={index}
        open={open}
        close={() => setOpen(false)}
        slides={imagesLightBox}
        controller={{
          closeOnBackdropClick: true,
        }}
        plugins={[Counter, Thumbnails]}
        thumbnails={{ ref: thumbnailsRef }}
        counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
        on={{
          click: () => {
            (thumbnailsRef.current?.visible
              ? thumbnailsRef.current?.hide
              : thumbnailsRef.current?.show)?.();
          },
        }}
      />
    </div>
  );
};

export default SwiperGridImage;
