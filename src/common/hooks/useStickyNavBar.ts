import { useEffect, useState } from 'react';

const TOP_HEIGHT = 80;

const useStickyNavbar = () => {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    const stickNavbar = () =>
      window !== undefined
        ? window.scrollY > TOP_HEIGHT
          ? setStickyClass('fixed-top')
          : setStickyClass('')
        : null;

    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.addEventListener('scroll', stickNavbar);
    };
  });

  return stickyClass;
};

export default useStickyNavbar;
