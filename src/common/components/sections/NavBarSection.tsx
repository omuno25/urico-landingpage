import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { useStickyNavbar } from '../../hooks';
import useScrollEvent from '../../hooks/useScrollEvent';
import { scrollToSection } from '../../utils/scroll';
import { SvgIcon } from '../common';

const className = 'st-navbar-section';
const prefixSection = 'section--';

const NavBarSection: React.FC = () => {
  const router = useRouter();
  const stickyClass = useStickyNavbar();
  const { activeSection } = useScrollEvent();

  useEffect(() => {
    if (window.location.hash.includes('#')) {
      const routeWithoutHash = window.location.hash.replace(
        `${window.location.hash}`,
        `#${activeSection.split('--')[1]}`,
      );
      window.location.replace(routeWithoutHash);
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
    <Navbar expand="lg" className={`${stickyClass} ${className}__navbar`}>
      <Container className="justify-content-center">
        <Navbar>
          <Nav>
            {metadata.sectionNavbar.items.map((item, i) => (
              <Nav.Link
                onClick={() => handleLinkClick(`${prefixSection + item.id}`)}
                key={i}
                className={`${activeSection === `${prefixSection + item.id}` ? 'active' : ''}`}
                active={false}
              >
                <Stack>
                  <span
                    className={`text-center ${activeSection === `${prefixSection + item.id}` ? 'visible' : 'invisible'}`}
                  >
                    <SvgIcon id="clean" size="21" className="align-bottom" />
                  </span>
                  {item.name}
                </Stack>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default NavBarSection;
