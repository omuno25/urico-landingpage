import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
import { SvgIcon } from '../common';

const className = 'st-information-bottom-section';

const InformationBottomSection: React.FC = () => {
  return (
    <div
      id={`section--${SectionName.contact}`}
      className={`${className}__background`}
    >
      <Container className={`${className}__container `}>
        <Row>
          <Col className="p-0">
            <div className="mb-4">
              <h4 className="d-flex">
                <SvgIcon id="info-square" />
                <span
                  className={`text-uppercase ${className}__container__heading`}
                >
                  {metadata.sectionInformationBottom.contact.name}
                </span>
              </h4>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span className={`${className}__container__icon-table`}>
                        <SvgIcon id="location" />
                      </span>
                      {metadata.information.address}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${className}__container__icon-table`}>
                        <SvgIcon id="phone" />
                      </span>
                      <Link href={`tel:${metadata.information.phoneNumber}`}>
                        {metadata.information.phoneNumber}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${className}__container__icon-table`}>
                        <SvgIcon id="mail" />
                      </span>
                      {metadata.information.email}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="d-flex">
              <SvgIcon id="clock" size="24" />
              <span
                className={`text-uppercase ${className}__container__heading`}
              >
                {metadata.sectionInformationBottom.time.name}
              </span>
            </h4>
            <table>
              <tbody>
                <tr>
                  <td>{metadata.sectionInformationBottom.time.date1}</td>
                  <td>
                    <b>{metadata.sectionInformationBottom.time.time1}</b>
                  </td>
                </tr>
                <tr>
                  <td>{metadata.sectionInformationBottom.time.date2}</td>
                  <td>
                    <b>{metadata.sectionInformationBottom.time.time2}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col className="p-0">
            <iframe
              title="Google Map Tram Giay"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9601936053655!2d106.69030744042976!3d10.814358261926127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175296359516b89%3A0x759ec91b192cb483!2zVHLhuqFtIEdpw6B5!5e0!3m2!1svi!2s!4v1715013706573!5m2!1svi!2s"
              width="415"
              height="300"
              style={{ border: 0 }}
              aria-hidden="false"
              tabIndex={0}
            />
          </Col>
          <Col>
            <h4 className="d-flex">
              <SvgIcon id="truck" size="24" />
              <span
                className={`text-uppercase ${className}__container__heading`}
              >
                {metadata.sectionInformationBottom.delivery.name}
              </span>
            </h4>
            <span
              className="text-justify"
              dangerouslySetInnerHTML={{
                __html: metadata.sectionInformationBottom.delivery.note,
              }}
            ></span>
            <table>
              <tbody>
                {metadata.sectionInformationBottom.delivery.shipping.map(
                  (item, i) => (
                    <tr key={i}>
                      <td className="w-50">
                        <b>{item.name}</b>
                      </td>
                      {item.price === 'Freeship' ? (
                        <td className="text-end w-50">
                          <b>{item.price}</b>
                        </td>
                      ) : (
                        <td className="text-end w-50">{item.price}</td>
                      )}
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InformationBottomSection;
