import { useEffect, useState } from 'react';

const TOP_HEIGHT = 80;

const useStickyNavbar = () => {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    const stickNavbar = () => {
      if (window !== undefined) {
        if (window.scrollY > TOP_HEIGHT) {
          setStickyClass('fixed-top sticky');
        } else {
          setStickyClass('');
        }
      }
    };

    // Call once to set initial state
    stickNavbar();

    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  return stickyClass;
};

export default useStickyNavbar;
