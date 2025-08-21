import { Col, Row } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { ImageCommon } from '../common';

const className = 'st-about-section';

const AboutSection: React.FC = () => {
  const openingImages = metadata.sectionAbout.images;

  return (
    <div className={`${className}__container`}>
      <Row className={`${className}__container__opening-image p-2 g-3`}>
        <Col sm={12} md={7}>
          <div className={`${className}__container__opening-image-left`}>
            <h2>Giới thiệu</h2>
            <div>
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus.
            </div>
          </div>
        </Col>
        <Col sm={12} md={5}>
          <div className={`${className}__container__opening-image-right`}>
            <div className={`${className}__container__opening-image-right-1`}>
              <ImageCommon
                src={openingImages[1]?.image}
                alt={openingImages[1]?.alt || `Secondary image 1`}
              />
            </div>
            <div className={`${className}__container__opening-image-right-2`}>
              <ImageCommon
                src={openingImages[2]?.image}
                alt={openingImages[2]?.alt || `Secondary image 2`}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutSection;
