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
      const scrollPosition = window.scrollY + 100; // Account for navbar height
      const sections = document.querySelectorAll('[id^="section"]');

      let currentSection = `section--${defaultSection}`;

      sections.forEach((section: GenericObject) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the section is currently in view
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.id;
        }
      });

      // If we're at the very top, default to the first section
      if (window.scrollY < 50) {
        currentSection = `section--${defaultSection}`;
      }

      setActiveSection(currentSection);
    }, 100); // Reduced debounce time for more responsive updates

    // Set initial state
    handleScroll();

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
