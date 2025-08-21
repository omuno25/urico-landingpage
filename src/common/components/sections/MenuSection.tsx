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
      <Container fluid>
        <Row className="align-items-stretch">
          {/* Left side - Menu items */}
          <Col
            lg={6}
            md={12}
            className={`${className}__menu-content order-1 order-lg-1`}
          >
            <div className={`${className}__menu-header`}>
              <ImageCommon
                src={metadata.sectionMenu.menuImage}
                alt={metadata.sectionMenu.menuImage}
              />
            </div>

            {/* Coffee Section */}
            <div className={`${className}__menu-category`}>
              <h3 className={`${className}__category-title`}>CÀ PHÊ</h3>
              <div className={`${className}__menu-items`}>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Cà phê đen</span>
                  <span className={`${className}__item-price`}>39.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Cà phê sữa</span>
                  <span className={`${className}__item-price`}>39.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Bạc xỉu</span>
                  <span className={`${className}__item-price`}>39.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Expresso</span>
                  <span className={`${className}__item-price`}>45.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>
                    Expresso Tonic
                  </span>
                  <span className={`${className}__item-price`}>49.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Americano</span>
                  <span className={`${className}__item-price`}>49.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Latte</span>
                  <span className={`${className}__item-price`}>49.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Cappucino</span>
                  <span className={`${className}__item-price`}>49.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Cold Brew</span>
                  <span className={`${className}__item-price`}>49.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>
                    Cold Brew Tonic
                  </span>
                  <span className={`${className}__item-price`}>49.000</span>
                </div>
              </div>
            </div>

            <div className={`${className}__menu-category`}>
              <h3 className={`${className}__category-title`}>MATCHA</h3>
              <div className={`${className}__menu-items`}>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>
                    Matcha Latte
                  </span>
                  <span className={`${className}__item-price`}>49.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>
                    Houjicha Latte
                  </span>
                  <span className={`${className}__item-price`}>49.000</span>
                </div>
              </div>
            </div>

            {/* Tea Section */}
            <div className={`${className}__menu-category`}>
              <h3 className={`${className}__category-title`}>TRÀ TRÁI CÂY</h3>
              <div className={`${className}__menu-items`}>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Trà Đào</span>
                  <span className={`${className}__item-price`}>50.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>Trà Vải</span>
                  <span className={`${className}__item-price`}>50.000</span>
                </div>
                <div className={`${className}__menu-item`}>
                  <span className={`${className}__item-name`}>
                    Trà Oolong Milk Foam
                  </span>
                  <span className={`${className}__item-price`}>50.000</span>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={6}
            md={12}
            className={`${className}__hero-content order-2 order-lg-2`}
          >
            <div className={`${className}__hero-image`}>
              <ImageCommon
                src={metadata.sectionMenu.images[0].image}
                alt={metadata.sectionMenu.images[0].alt}
                className={`${className}__hero-img`}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuSection;
