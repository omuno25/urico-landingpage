import { GetStaticProps } from 'next';

import { FooterCommon, HeaderCommon } from '../common/components/common';
import SEOHead from '../common/components/common/SEOHead';
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
