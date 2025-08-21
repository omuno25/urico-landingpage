import Link from 'next/link';
import { Container } from 'react-bootstrap';

import SvgIcon from './SvgIcon';
import metadata from '../../../data/metadata.json';
import { useCheckMobileScreen } from '../../hooks';
import { SectionName } from '../../utils/enum';

const className = 'st-footer-common';

const FooterCommon: React.FC = () => {
  const isMobile = useCheckMobileScreen();

  const sizeIconSocial = isMobile ? '24' : '40';
  return (
    <footer id={`section--${SectionName.contact}`} className={className}>
      <Container className={`text-center py-2 py-sm-4 ${className}__container`}>
        {metadata.socials.map((item, i) => (
          <Link
            href={item.href}
            key={i}
            target="_blank"
            aria-label={item.iconId}
          >
            <SvgIcon
              className={`${className}__icon`}
              id={item.iconId}
              size={sizeIconSocial}
            />
            <span className="mx-3">|</span>
          </Link>
        ))}
      </Container>
    </footer>
  );
};

export default FooterCommon;
