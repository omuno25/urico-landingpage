import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { useScrollEvent } from '../../hooks';
import { scrollToSection } from '../../utils/scroll';
import { SvgIcon } from '../common';

const className = 'st-mobile-navbar-section';
const prefixSection = 'section--';

const MobileNavBarSection: React.FC = () => {
  const router = useRouter();
  const { activeSection } = useScrollEvent();

  useEffect(() => {
    if (window.location.hash.includes('#')) {
      const routeWithoutHash = window.location.hash.replace(
        `${window.location.hash}`,
        `#${activeSection.split('--')[1]}`,
      );
      window.location.replace(routeWithoutHash);
    } else {
      window.location.hash = `${activeSection.split('--')[1]}`;
    }
  }, [activeSection]);

  useEffect(() => {
    if (router.asPath && router.asPath.length) {
      scrollToSection(`${prefixSection + router.asPath.split('#')[1]}`);
    }
  }, [router]);

  const handleLinkClick = (section: string) => {
    scrollToSection(section);
  };
  return (
    <Navbar
      bg="white"
      fixed="top"
      expand="sm"
      className={`${className}__navbar`}
    >
      <Container>
        <Navbar.Brand href="#">
          <Image
            className="img-fluid"
            width={200}
            src={metadata.sectionHeader.image}
            alt={metadata.sectionHeader.altImage}
          />
        </Navbar.Brand>
        <Navbar.Toggle>
          <SvgIcon id="hambuger" className="pb-1" />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            {metadata.sectionNavbar.items.map((item, i) => (
              <Nav.Link
                onClick={() => handleLinkClick(`${prefixSection + item.id}`)}
                key={i}
                className={`${activeSection === `${prefixSection + item.id}` ? 'active' : ''} ${className}__navbar__link`}
                active={false}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MobileNavBarSection;
