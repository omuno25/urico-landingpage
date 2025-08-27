import { Container } from 'react-bootstrap';

import { SectionName } from '../../utils/enum';
import Link from 'next/link';

const className = 'st-order-section';

const OrderSection: React.FC = () => {
  return (
    <div
      id={`section--${SectionName.order}`}
      className={`${className}__container`}
    >
      <Container fluid>
        <div className={`${className}__container__content`}>
          <h1 className={`${className}__container__heading`}>
            Đặt hàng ngay hôm nay
          </h1>
          <p className={`${className}__container__description`}>
            Chào mừng bạn đến với Urico Coffee - Điểm đến lý tưởng cho những tín
            đồ yêu cà phê! Urico cam kết mang đến trải nghiệm cà phê tuyệt vời
            nhất với hương vị đậm đà và không gian ấm cúng. Hãy đặt hàng ngay
            hôm nay và cảm nhận sự khác biệt của Urico Coffee.
          </p>
          <Link
            href="http://order.urico.io.vn/"
            className={`${className}__container__button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Đặt hàng ngay
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default OrderSection;
