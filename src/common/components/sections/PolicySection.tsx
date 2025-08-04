import { Container } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { BackgroundCommon } from '../common';

const className = 'st-policy-section';

const PolicySection: React.FC = () => {
  return (
    <div className={`${className}__background`}>
      <Container fluid className={`container-lg ${className}__container`}>
        <span className={`${className}__container__heading`}>
          {metadata.sectionPolicy.heading}
        </span>
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

export default PolicySection;
