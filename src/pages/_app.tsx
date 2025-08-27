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
import '../styles/service.style.scss';
import '../styles/tab-partial.style.scss';
import '../styles/tab-content-partial.style.scss';
import '../styles/cleaning-process.style.scss';
import '../styles/blog.style.scss';
import '../styles/information-bottom.style.scss';
import '../styles/policy.style.scss';
import '../styles/footer.style.scss';
import '../styles/mobile-navbar.style.scss';
import '../styles/mobile-carousel.style.scss';
import '../styles/mobile-service.style.scss';
import '../styles/mobile-accordion-partial.style.scss';
import '../styles/mobile-cleaning-process.style.scss';
import '../styles/mobile-blog.style.scss';
import '../styles/mobile-information-bottom.style.scss';
import '../styles/mobile-policy.style.scss';
import '../styles/swiper-grid-image.style.scss';
import '../styles/icon-arrow-rounded.scss';
import '../styles/menu.style.scss';
import '../styles/opening-style.scss';
import '../styles/category-strip.style.scss';
import '../styles/countdown-section.style.scss';
import '../styles/footer-section.style.scss';
import '../styles/about-style.scss';
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
