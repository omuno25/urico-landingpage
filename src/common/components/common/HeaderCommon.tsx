import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

import SvgIcon from './SvgIcon';
import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';

const className = 'st-header-common';

const HeaderCommon: React.FC = () => (
  <div id={`section--${SectionName.station}`} className={`${className}`}>
    <Container className={`${className}__container`}>
      <Row className="py-2">
        <Col
          md={4}
          className="d-flex align-self-center justify-content-center justify-content-md-start "
        ></Col>
        <Col
          md={4}
          className="d-flex align-self-center justify-content-center "
        ></Col>
        <Col
          md={4}
          className={`d-flex align-self-center justify-content-center justify-content-md-end ${className}__container__col-right`}
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
  </div>
);

export default HeaderCommon;
