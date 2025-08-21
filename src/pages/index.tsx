import { GetStaticProps } from 'next';
import SEOHead from '../common/components/common/SEOHead';
import { CarouselSection } from '../common/components/sections';
import MenuSection from '../common/components/sections/MenuSection';
import NavBarSection from '../common/components/sections/NavBarSection';

import { useCheckMobileScreen } from '../common/hooks';
import metadataJson from '../data/metadata.json';
import AboutSection from '../common/components/sections/AboutSection';
import { FooterCommon } from '../common/components/common';
import FrameSection from '../common/components/sections/FrameSection';

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
          <AboutSection />
          <FrameSection />
          <MenuSection />
          <FooterCommon />
        </main>
      ) : (
        <main>
          <NavBarSection />
          <CarouselSection />
          <AboutSection />
          <FrameSection />
          <MenuSection />
          <FooterCommon />
        </main>
      )}
    </>
  );
}
