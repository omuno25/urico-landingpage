import { ForwardedRef, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ThumbnailsRef, Lightbox } from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import { chunkArray } from '../../utils/array';
import { ImageCommon } from '../common';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
const className = 'st-grid-image-partial';

const ROW_ITEM = 4;

type GridImage = {
  image: string;
};
type GridImagePartialProps = {
  images: GridImage[] | undefined;
};

const GridImagePartial: React.FC<GridImagePartialProps> = (
  props: GridImagePartialProps,
) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const thumbnailsRef: ForwardedRef<ThumbnailsRef> = useRef(null);
  const rows: GenericObject[] = chunkArray(props.images || [], ROW_ITEM);
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
    <div className={`${className}__container`}>
      {rows.map((row: GenericObject, i: number) => (
        <Row key={i}>
          {row.map((item: GenericObject, j: number) => (
            <Col
              key={j}
              className="p-0"
              onClick={() => handleClickImage(i * ROW_ITEM + j)}
            >
              <ImageCommon src={`${item.image}`} />
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
