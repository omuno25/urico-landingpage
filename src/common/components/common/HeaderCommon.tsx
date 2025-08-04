import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

import ImageCommon from './ImageCommon';
import SvgIcon from './SvgIcon';
import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';

const className = 'st-header-common';

const HeaderCommon: React.FC = () => (
  <Container
    id={`section--${SectionName.station}`}
    className={`${className}__container`}
  >
    <Row>
      <Col
        md={4}
        className="d-flex align-self-center justify-content-center justify-content-md-start py-2"
      >
        <div className="d-flex">
          <SvgIcon id="phone" />
          <span className={`${className}__container__text-left`}>
            <Link href={`tel:${metadata.information.phoneNumber}`}>
              {metadata.information.phoneNumber}
            </Link>
          </span>
        </div>
      </Col>
      <Col
        md={4}
        className="d-flex align-self-center justify-content-center py-2"
      >
        <ImageCommon
          className={`${className}__container__logo`}
          src={`${metadata.sectionHeader.image}`}
        />
      </Col>
      <Col
        md={4}
        className={`d-flex align-self-center justify-content-center justify-content-md-end py-2 ${className}__container__col-right`}
      >
        {metadata.socials.map((item, i) => (
          <Link href={item.href} key={i} target="_blank">
            <SvgIcon id={item.iconId} />
            <span className="mx-2">|</span>
          </Link>
        ))}
      </Col>
    </Row>
  </Container>
);

export default HeaderCommon;
