import { Container } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { BackgroundCommon } from '../common';

const className = 'st-mobile-policy-section';

const MobilePolicySection: React.FC = () => {
  return (
    <div className={`${className}__background`}>
      <Container className={`${className}__container`}>
        <p className={`${className}__container__heading`}>
          {metadata.sectionPolicy.heading}
        </p>
        <table className={`${className}__container__subheading`}>
          <tbody>
            {metadata.sectionPolicy.rules.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}.</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
      <BackgroundCommon src="static/bg/bg-policy.webp" />
    </div>
  );
};

export default MobilePolicySection;
