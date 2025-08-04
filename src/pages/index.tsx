import { GetStaticProps } from 'next';

import { FooterCommon } from '../common/components/common';
import SEOHead from '../common/components/common/SEOHead';
import { CarouselSection } from '../common/components/sections';
import OpeningSection from '../common/components/sections/OpeningSection';
import { useCheckMobileScreen } from '../common/hooks';
import metadataJson from '../data/metadata.json';
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metadata: metadataJson,
    },
  };
};

export default function Home({ metadata }: { metadata: typeof metadataJson }) {
  const isMobile = useCheckMobileScreen();
  return (
    <>
      <SEOHead metadata={metadata} />

      {isMobile ? (
        <main>
          {/* <NavBarSection /> */}
          <CarouselSection />
          <OpeningSection />
          <FooterCommon />
        </main>
      ) : (
        <main>
          {/* <HeaderCommon /> */}
          {/* <NavBarSection /> */}
          <CarouselSection />
          <OpeningSection />
          {/* <MenuSection /> */}
          <FooterCommon />
        </main>
      )}
    </>
  );
}
