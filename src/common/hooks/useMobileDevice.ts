import { useEffect, useState } from 'react';

const SIZE_MOBILE = 576;

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  return width <= SIZE_MOBILE;
};

export default useCheckMobileScreen;
