import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

import metadata from '../../data/metadata.json';

const defaultSection = metadata.sectionNavbar.items[0].id || 'urico-coffee';

const useScrollEvent = () => {
  const [activeSection, setActiveSection] = useState(
    `section--${defaultSection}`,
  );

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('[id^="section"]');

      sections.forEach((section: GenericObject) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 50 && // Adjust the offset as needed
          scrollPosition < sectionTop + sectionHeight - 50 // Adjust the offset as needed
        ) {
          setActiveSection(section.id);
        }
      });
    }, 300);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    activeSection,
    setActiveSection,
  };
};

export default useScrollEvent;
