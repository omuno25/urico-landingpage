import Link from 'next/link';
import { Container } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
import { SvgIcon } from '../common';

const className = 'st-mobile-information-bottom-section';

const MobileInformationBottomSection: React.FC = () => {
  return (
    <div
      id={`section--${SectionName.contact}`}
      className={`${className}__background`}
    >
      <Container className={`${className}__container `}>
        <div className="mb-3">
          <div className="d-inline">
            <SvgIcon id="info-square" size="20" className="mb-1" />
            <span className={`text-uppercase ${className}__container__heading`}>
              {metadata.sectionInformationBottom.contact.name}
            </span>
          </div>
          <div className="d-flex w-100">
            <table className={`${className}__container__infor-table`}>
              <tbody>
                <tr>
                  <td>
                    <span className={`${className}__container__icon-table`}>
                      <SvgIcon id="location" size="16" />
                    </span>
                    {metadata.information.address}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className={`${className}__container__icon-table`}>
                      <SvgIcon id="phone" size="16" />
                    </span>
                    <Link href={`tel:${metadata.information.phoneNumber}`}>
                      {metadata.information.phoneNumber}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className={`${className}__container__icon-table`}>
                      <SvgIcon id="mail" size="16" />
                    </span>
                    {metadata.information.email}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-3">
          <div className="d-inline">
            <SvgIcon id="clock" size="20" className="mb-1" />
            <span className={`text-uppercase ${className}__container__heading`}>
              {metadata.sectionInformationBottom.time.name}
            </span>
          </div>
          <div className="d-flex w-100">
            <table className={`${className}__container__time-table`}>
              <tbody>
                <tr>
                  <td>{metadata.sectionInformationBottom.time.date1}</td>
                  <td className="text-end">
                    <b>{metadata.sectionInformationBottom.time.time1}</b>
                  </td>
                </tr>

                <tr>
                  <td>{metadata.sectionInformationBottom.time.date2}</td>
                  <td className="text-end">
                    <b>{metadata.sectionInformationBottom.time.time2}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-3">
          <div className="d-inline">
            <SvgIcon id="truck" size="20" className="mb-1" />
            <span className={`text-uppercase ${className}__container__heading`}>
              {metadata.sectionInformationBottom.delivery.name}
            </span>
          </div>
          <small
            className="d-block text-justify"
            dangerouslySetInnerHTML={{
              __html: metadata.sectionInformationBottom.delivery.note,
            }}
          ></small>
          <div className="d-flex w-100">
            <table className={`${className}__container__delivery-table`}>
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
          </div>
        </div>
      </Container>
      <div className={`${className}__iframe`}>
        <iframe
          title="Google Map Tram Giay"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9601936053655!2d106.69030744042976!3d10.814358261926127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175296359516b89%3A0x759ec91b192cb483!2zVHLhuqFtIEdpw6B5!5e0!3m2!1svi!2s!4v1715013706573!5m2!1svi!2s"
          width="100%"
          height="265"
          style={{ border: 0 }}
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </div>
  );
};

export default MobileInformationBottomSection;
