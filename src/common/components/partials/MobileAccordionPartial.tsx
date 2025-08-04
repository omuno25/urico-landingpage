import { Accordion, Col, Row } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { MobileSwiperGridImage } from '../common';

const className = 'st-mobile-accordion-partial';

const MobileAccordionPartial: React.FC = () => {
  return (
    <div className={`${className}__container`}>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {metadata.sectionService.tabs.map((tab, i) => (
          <Accordion.Item key={i} eventKey={`${i}`}>
            <Accordion.Header>{tab.title}</Accordion.Header>
            <Accordion.Body>
              <MobileSwiperGridImage images={tab.images} />
              <ul className="bullets">
                {tab.details.map((item: GenericObject, i: number) => (
                  <li key={i}>
                    <Row className={`${className}__container__heading mb-2`}>
                      <Col>{item.title}</Col>
                      <Col className="text-end">{item.price}</Col>
                    </Row>
                    <p className={`${className}__container__description`}>
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default MobileAccordionPartial;
