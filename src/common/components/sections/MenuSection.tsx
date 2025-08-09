import { Container, Row, Col } from 'react-bootstrap';
import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
import { ImageCommon } from '../common';

const className = 'st-menu-section';

const MenuSection: React.FC = () => {
  return (
    <div
      id={`section--${SectionName.menu}`}
      className={`${className}__container`}
    >
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center">
          {/* Left side - Menu items */}
          <Col lg={6} md={12} className={`${className}__menu-content`}>
            <div className={`${className}__menu-header`}>
              <h1 className={`${className}__menu-title`}>MENU</h1>
            </div>

            {/* Coffee Section */}
            <div className={`${className}__menu-category`}>
              <h3 className={`${className}__category-title`}>CÀ PHÊ</h3>
              <div className={`${className}__menu-items`}>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Latte Đặc Xíu</span>
                  <span className={`${className}__item-price`}>49.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Cappuccino (Nóng/Đá)</span>
                  <span className={`${className}__item-price`}>55.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Espresso (Nóng/Đá)</span>
                  <span className={`${className}__item-price`}>45.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Americano (Nóng/Đá)</span>
                  <span className={`${className}__item-price`}>49.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Cold Brew</span>
                  <span className={`${className}__item-price`}>55.000</span>
                </div>
              </div>
            </div>

            {/* Tea Section */}
            <div className={`${className}__menu-category`}>
              <h3 className={`${className}__category-title`}>TRÀ TRÁI CÂY</h3>
              <div className={`${className}__menu-items`}>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Trà xanh đặc biệt</span>
                  <span className={`${className}__item-price`}>45.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Cà phê đen (Nóng/Đá)</span>
                  <span className={`${className}__item-price`}>45.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Bạc xỉu (Nóng/Đá)</span>
                  <span className={`${className}__item-price`}>30.000</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Right side - Hero image */}
          <Col lg={6} md={12} className={`${className}__hero-content`}>
            <div className={`${className}__hero-image`}>
              <ImageCommon
                src={metadata.sectionMenu.images[0].image}
                alt={metadata.sectionMenu.images[0].alt}
                className={`${className}__hero-img`}
              />

            </div>
          </Col>
        </Row>

        {/* Bottom section - Workshop info */}
        <Row className={`${className}__workshop-section`}>
          <Col lg={6} md={12}>
            <div className={`${className}__workshop-info`}>
              <p className={`${className}__workshop-label`}>WORKSHOP CUỐI TUẦN</p>
              <h2 className={`${className}__workshop-title`}>CERAMIC</h2>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className={`${className}__workshop-details`}>
              <div className={`${className}__workshop-date`}>
                <p>THỨ BẢY</p>
                <p>22/9/2025</p>
                <p>3PM-6PM</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Workshop images */}
        <Row className={`${className}__workshop-images`}>
          <Col md={6}>
            <div className={`${className}__workshop-image-left`}>
             
              <div className={`${className}__ceramic-image`}></div>
            </div>
          </Col>
          <Col md={6}>
            <div className={`${className}__workshop-image-right`}>
              
              <div className={`${className}__activity-image`}></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuSection;
