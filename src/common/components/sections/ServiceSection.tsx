import { Container } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
import { TabPartial } from '../partials';

const className = 'st-service-section';

const ServiceSection: React.FC = () => (
  <>
    <div
      id={`section--${SectionName.service}`}
      className={`${className}__wrap`}
    >
      <div className={`${className}__background`}>
        <Container
          fluid
          className={`container-lg ${className}__container text-center`}
        >
          <h1
            className={`pb-4 text-uppercase ${className}__container__heading`}
          >
            {metadata.sectionService.heading}
          </h1>
          <p className={`${className}__container__description`}>
            {metadata.sectionService.description}
          </p>
        </Container>
      </div>
      <TabPartial />
    </div>
  </>
);

export default ServiceSection;
