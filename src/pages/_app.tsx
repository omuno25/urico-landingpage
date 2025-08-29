import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/variables.style.scss';
import '../styles/tokens-dev.style.scss';
import '../styles/globals.scss';
import '../styles/header.style.scss';
import '../styles/navbar.style.scss';
import '../styles/carousel.style.scss';
import '../styles/footer.style.scss';
import '../styles/mobile-navbar.style.scss';
import '../styles/mobile-carousel.style.scss';
import '../styles/swiper-grid-image.style.scss';
import '../styles/icon-arrow-rounded.scss';
import '../styles/menu.style.scss';
import '../styles/footer-section.style.scss';
import '../styles/about-style.scss';
import '../styles/mobile-about-section.style.scss';
import '../styles/grid-image-partial.scss';
import '../styles/frame-section.style.scss';
import '../styles/order-section.style.scss';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily} !important;
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}
