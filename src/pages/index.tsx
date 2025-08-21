import { GetStaticProps } from 'next';
import SEOHead from '../common/components/common/SEOHead';
import { CarouselSection } from '../common/components/sections';
import MenuSection from '../common/components/sections/MenuSection';
import NavBarSection from '../common/components/sections/NavBarSection';
import OpeningSection from '../common/components/sections/OpeningSection';
import CategoryStripSection from '../common/components/sections/CategoryStripSection';

import { useCheckMobileScreen } from '../common/hooks';
import metadataJson from '../data/metadata.json';
// import AboutSection from '../common/components/sections/AboutSection';
import { FooterCommon } from '../common/components/common';

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
          <NavBarSection />
          <CarouselSection />
          <CategoryStripSection />
          <OpeningSection />
          <MenuSection />
          <FooterCommon />
        </main>
      ) : (
        <main>
          {/* <HeaderCommon /> */}
          <NavBarSection />
          <CarouselSection />
          {/* <CategoryStripSection /> */}
          {/* <AboutSection /> */}
          <OpeningSection />
          <MenuSection />
          <FooterCommon />
        </main>
      )}
    </>
  );
}
