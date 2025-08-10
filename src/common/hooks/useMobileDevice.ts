import { useEffect, useState } from 'react';

// Bootstrap breakpoints: xs: <576px, sm: ≥576px, md: ≥768px, lg: ≥992px, xl: ≥1200px
const SIZE_MOBILE = 768; // Changed to match Bootstrap md breakpoint
const SIZE_TABLET = 992; // Bootstrap lg breakpoint

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    // Set initial width
    if (typeof window !== 'undefined') {
      handleWindowSizeChange();
    }
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  return width < SIZE_MOBILE;
};

// Additional hook for tablet detection
export const useCheckTabletScreen = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    if (typeof window !== 'undefined') {
      handleWindowSizeChange();
    }
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  return width >= SIZE_MOBILE && width < SIZE_TABLET;
};

export default useCheckMobileScreen;
