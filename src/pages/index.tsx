import { GetStaticProps } from 'next';

import { FooterCommon } from '../common/components/common';
import SEOHead from '../common/components/common/SEOHead';
import { CarouselSection } from '../common/components/sections';
import MenuSection from '../common/components/sections/MenuSection';
import NavBarSection from '../common/components/sections/NavBarSection';
import OpeningSection from '../common/components/sections/OpeningSection';
import CategoryStripSection from '../common/components/sections/CategoryStripSection';
import CountdownSection from '../common/components/sections/CountdownSection';
import FooterSection from '../common/components/sections/FooterSection';
import ServiceSection from '../common/components/sections/ServiceSection';
import PolicySection from '../common/components/sections/PolicySection';
import InformationBottomSection from '../common/components/sections/InformationBottomSection';
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
          <NavBarSection />
          <CarouselSection />
          <CategoryStripSection />
          <CountdownSection />
          <OpeningSection />
          <MenuSection />
          <FooterSection />
        </main>
      ) : (
        <main>
          {/* <HeaderCommon /> */}
          <NavBarSection />
          <CarouselSection />
          <CategoryStripSection />
          <CountdownSection />
          <OpeningSection />
          <MenuSection />
          <FooterSection />
        </main>
      )}
    </>
  );
}
