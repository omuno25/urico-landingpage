import { GetStaticProps } from 'next';
import Head from 'next/head';
import Script from 'next/script';

import { FooterCommon, HeaderCommon } from '../common/components/common';
import {
  MobileNavBarSection,
  MobileCarouselSection,
  MobileServiceSection,
  MobileCleaningProcessSection,
  MobileBlogSection,
  MobileInformationBottomSection,
  MobilePolicySection,
  BlogSection,
  CarouselSection,
  CleaningProcessSection,
  InformationBottomSection,
  NavBarSection,
  PolicySection,
  ServiceSection,
} from '../common/components/sections';
import { useCheckMobileScreen } from '../common/hooks';
import metadataJson from '../data/metadata.json';

// Thêm getStaticProps để đảm bảo trang được pre-render tại build time
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metadata: metadataJson,
    },
    // Revalidate sau mỗi 3600 giây (1 giờ)
    revalidate: 3600,
  };
};

export default function Home({ metadata }: { metadata: typeof metadataJson }) {
  const isMobile = useCheckMobileScreen();
  return (
    <>
      <Head>
        <title>{metadata.headerTag.title}</title>
        <meta name="description" content={metadata.headerTag.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={metadata.headerTag.icon} />
        {/* Thêm meta tag xác minh Google Search Console */}
        <meta
          name="google-site-verification"
          content="qtEfeTND1wXHOonUJ5waoahf_Un931SGL07uW9AVwV8"
        />
        {/* Thêm các meta tags cho SEO */}
        <meta property="og:title" content={metadata.headerTag.title} />
        <meta
          property="og:description"
          content={metadata.headerTag.description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tramgiay.vn/" />
        <meta
          property="og:image"
          content="https://tramgiay.vn/static/bg/slide_1.webp"
        />
        <link rel="canonical" href="https://tramgiay.vn/" />

        {/* Thêm JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: metadata.headerTag.title,
              description: metadata.headerTag.description,
              url: 'https://tramgiay.vn/',
              image: '/static/og-image.jpg',
              address: {
                '@type': 'PostalAddress',
                streetAddress: metadata.information.address,
                addressLocality: 'Hồ Chí Minh',
                addressRegion: 'Hồ Chí Minh',
                postalCode: '700000',
                addressCountry: 'VN',
              },
              telephone: metadata.information.phoneNumber,
            }),
          }}
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-6L2XLV4Y9S"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6L2XLV4Y9S');
    `}
      </Script>

      {isMobile ? (
        <main>
          <MobileNavBarSection />
          <MobileCarouselSection />
          <MobileServiceSection />
          <MobileCleaningProcessSection />
          <MobileBlogSection />
          <MobileInformationBottomSection />
          <MobilePolicySection />
          <FooterCommon />
        </main>
      ) : (
        <main>
          <HeaderCommon />
          <NavBarSection />
          <CarouselSection />
          <ServiceSection />
          <CleaningProcessSection />
          <BlogSection />
          <InformationBottomSection />
          <PolicySection />
          <FooterCommon />
        </main>
      )}
    </>
  );
}
