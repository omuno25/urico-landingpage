import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { useStickyNavbar } from '../../hooks';
import useScrollEvent from '../../hooks/useScrollEvent';
import { scrollToSection } from '../../utils/scroll';
import Image from 'next/image';

const className = 'st-mobile-navbar-section';
const prefixSection = 'section--';

const NavBarSection: React.FC = () => {
  const router = useRouter();
  const stickyClass = useStickyNavbar();
  const { activeSection } = useScrollEvent();

  useEffect(() => {
    if (router.asPath && router.asPath.length) {
      scrollToSection(`${prefixSection + router.asPath.split('#')[1]}`);
    }
  }, [router]);

  const handleSelectNavBar = (section: string) => {
    scrollToSection(section);
  };

  return (
    <div>
      <Navbar expand="lg" className={`${stickyClass} ${className}__navbar `}>
        <div className="d-flex w-100 justify-content-center">
          <Image
            className={`${className}__logo`}
            width={150}
            height={10}
            src={`/${metadata.sectionNavbar.logo}`}
            alt={metadata.sectionNavbar.logo}
          />
        </div>
        <Container className="justify-content-center">
          <Navbar>
            <Nav>
              {metadata.sectionNavbar.items.map((item, i) => (
                <Nav.Link
                  onClick={() =>
                    handleSelectNavBar(`${prefixSection + item.id}`)
                  }
                  key={i}
                  className={`${activeSection === `${prefixSection + item.id}` ? 'active' : ''}`}
                  active={false}
                >
                  <Stack>
                    <span
                      className={`text-center ${activeSection === `${prefixSection + item.id}` ? 'visible' : 'invisible'}`}
                    ></span>
                    {item.name}
                  </Stack>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarSection;
