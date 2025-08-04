import { Container, Stack } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
import { MobileAccordionPartial } from '../partials';

const className = 'st-mobile-service-section';

const MobileServiceSection: React.FC = () => (
  <>
    <div
      id={`section--${SectionName.service}`}
      className={`${className}__background`}
    >
      <Container className={`${className}__container text-center`}>
        <Stack>
          <span
            className={`d-block mb-2 text-uppercase ${className}__container__heading`}
          >
            {metadata.sectionService.heading}
          </span>
          <span className={`d-block ${className}__container__description`}>
            {metadata.sectionService.mobileDescription}
          </span>
        </Stack>
      </Container>
      <MobileAccordionPartial />
    </div>
  </>
);

export default MobileServiceSection;
