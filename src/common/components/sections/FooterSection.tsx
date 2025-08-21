import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

import { ImageCommon } from '../common';
import metadata from '../../../data/metadata.json';

const CLASS = 'st-footer-section';

interface FooterLink {
  title: string;
  href: string;
}



const FooterSection: React.FC<{ className?: string }> = ({ className }) => {
  // Default footer data structure matching the reference image
  const defaultFooterData = {
    logo: {
      src: "assets/logos/urico_logo_semi_dark.png",
      alt: "URICO Logo",
      tagline: "CO-WORKING SPACE & COFFEE"
    },
    columns: [
      {
        title: "Trang chủ",
        links: [
          { title: "Giới thiệu", href: "#about" },
          { title: "Menu", href: "#menu" },
          { title: "Liên hệ", href: "#contact" }
        ]
      },
      {
        title: "Social Media",
        links: [
          { title: "Instagram", href: "https://instagram.com" },
          { title: "Facebook", href: "https://facebook.com" },
          { title: "Tiktok", href: "https://tiktok.com" },
          { title: "Youtube", href: "https://youtube.com" }
        ]
      }
    ],
    contact: {
      title: "Liên hệ",
      phone: "(+82) 123 456 789",
      address: "107 Cư Lao, phường Cầu Kho, TPHCM"
    }
  };

  const footerData = (metadata as any)?.footer || defaultFooterData;

  return (
    <footer className={`${CLASS} ${className || ''}`.trim()}>
      <Container className={`${CLASS}__container`}>
        <Row className={`${CLASS}__content`}>
          {/* Logo Column - Responsive sizing */}
          <Col xl={3} lg={4} md={6} sm={12} xs={12} className={`${CLASS}__logo-column`}>
            <div className={`${CLASS}__logo-wrapper`}>
              <ImageCommon
                className={`${CLASS}__logo`}
                src={footerData.logo.src}
                alt={footerData.logo.alt}
                style={{ height: '120px', width: 'auto', maxWidth: '100%' }}
              />
            </div>
          </Col>

          {/* Navigation Links Columns - Better mobile stacking */}
          {footerData.columns.map((column: any, index: number) => (
            <Col
              xl={2}
              lg={2}
              md={3}
              sm={6}
              xs={12}
              key={index}
              className={`${CLASS}__links-column`}
            >
              <div className={`${CLASS}__column-wrapper`}>
                <h4 className={`${CLASS}__column-title`}>{column.title}</h4>
                <ul className={`${CLASS}__links-list`}>
                  {column.links.map((link: FooterLink, linkIndex: number) => (
                    <li key={linkIndex} className={`${CLASS}__link-item`}>
                      <Link href={link.href} className={`${CLASS}__link`}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        
          {/* Contact Information Column - Responsive sizing */}
          <Col xl={3} lg={4} md={6} sm={12} xs={12} className={`${CLASS}__contact-column`}>
            <div className={`${CLASS}__contact-wrapper`}>
              <h4 className={`${CLASS}__column-title`}>{footerData.contact.title}</h4>
              <div className={`${CLASS}__contact-info`}>
                <div className={`${CLASS}__contact-item`}>
                  <a href={`tel:${footerData.contact.phone}`} className={`${CLASS}__contact-link`}>
                    {footerData.contact.phone}
                  </a>
                </div>
                <div className={`${CLASS}__contact-item`}>
                     <a href={`tel:${footerData.contact.address}`} className={`${CLASS}__contact-link`}>
                    {footerData.contact.address}
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
