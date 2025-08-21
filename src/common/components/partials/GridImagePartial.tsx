import { ForwardedRef, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ThumbnailsRef, Lightbox } from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import { chunkArray } from '../../utils/array';
import { ImageCommon } from '../common';
import { useCheckMobileScreen } from '../../hooks';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
const className = 'st-grid-image-partial';

const ROW_ITEM = 4;
const MOBILE_ROW_ITEM = 2; // 2 columns on mobile

type GridImage = {
  image: string;
};
type GridImagePartialProps = {
  images: GridImage[] | undefined;
  className?: string;
};

const GridImagePartial: React.FC<GridImagePartialProps> = (
  props: GridImagePartialProps,
) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const thumbnailsRef: ForwardedRef<ThumbnailsRef> = useRef(null);
  const isMobile = useCheckMobileScreen();

  // Use different row items based on screen size
  const itemsPerRow = isMobile ? MOBILE_ROW_ITEM : ROW_ITEM;
  const rows: GenericObject[] = chunkArray(props.images || [], itemsPerRow);

  const images = (props.images || []).map((item) => {
    return {
      src: `${item.image}`,
    };
  });

  const handleClickImage = (indexImage: number) => {
    setOpen(true);
    setIndex(indexImage);
  };

  return (
    <div className={`${className}__container ${props.className || ''}`}>
      {rows.map((row: GenericObject, i: number) => (
        <Row key={i} className="g-2">
          {row.map((item: GenericObject, j: number) => (
            <Col
              key={j}
              xs={6} // 2 columns on mobile
              sm={6} // 2 columns on small screens
              md={3} // 4 columns on medium+ screens
              onClick={() => handleClickImage(i * itemsPerRow + j)}
            >
              <ImageCommon
                src={`${item.image}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Col>
          ))}
        </Row>
      ))}

      <Lightbox
        index={index}
        open={open}
        close={() => setOpen(false)}
        slides={images}
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

export default GridImagePartial;
