import { useEffect, useState } from 'react';

import Spinner from './Spinner';

const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return show && <Spinner />;
};

export default Loading;
