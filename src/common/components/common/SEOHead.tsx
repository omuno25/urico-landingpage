import Head from 'next/head';
import Script from 'next/script';

interface SEOHeadProps {
  metadata: {
    headerTag: {
      title: string;
      description: string;
      icon: string;
    };
    information: {
      address: string;
      phoneNumber: string;
    };
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({ metadata }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: metadata.headerTag.title,
    description: metadata.headerTag.description,
    url: 'https://urico.vn/',
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
  };

  return (
    <>
      <Head>
        <title>{metadata.headerTag.title}</title>
        <meta name="description" content={metadata.headerTag.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={metadata.headerTag.icon} />

        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GG_SC}
        />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={metadata.headerTag.title} />
        <meta
          property="og:description"
          content={metadata.headerTag.description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://urico.vn/" />
        <meta
          property="og:image"
          content="https://urico.vn/assets/images/logos/urico_logo_semi_dark.png"
        />
        <link rel="canonical" href="https://urico.vn/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GGA4_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GGA4_ID}');
        `}
      </Script>
    </>
  );
};

export default SEOHead;
