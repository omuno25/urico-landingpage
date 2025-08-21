import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { ImageCommon } from '../common';
import metadata from '../../../data/metadata.json';

const CLASS = 'st-countdown-section';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection: React.FC<{ className?: string }> = ({ className }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const targetDate = new Date(currentYear, 7, 15); // August 15th (month is 0-indexed)

    // If August 15th has passed this year, target next year
    if (now > targetDate) {
      targetDate.setFullYear(currentYear + 1);
    }

    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section className={`${CLASS} ${className || ''}`.trim()}>
      <Container className={`${CLASS}__container`}>
        <Row className={`${CLASS}__content`}>
          {/* Countdown Display */}
          <Col lg={8} md={12} className={`${CLASS}__countdown-wrapper`}>
            <div className={`${CLASS}__countdown-header`}>
              <div className={`${CLASS}__title-wrapper`}>
                <div className={`${CLASS}__logo-container`}>
                  <ImageCommon
                    className={`${CLASS}__logo`}
                    src="assets/logos/agv_07.png"
                    alt="Company Logo"
                    style={{ width: '400px', height: '400px' }}
                  />
                </div>
                <h2 className={`${CLASS}__title`}>Coming Soon</h2>
              </div>
              <p className={`${CLASS}__subtitle`}>
                Something special is on the way
              </p>
            </div>

            <div className={`${CLASS}__countdown-display`}>
              <div className={`${CLASS}__time-unit`}>
                <div className={`${CLASS}__time-number`}>
                  {formatNumber(timeLeft.days)}
                </div>
                <div className={`${CLASS}__time-label`}>Ngày</div>
              </div>
              <div className={`${CLASS}__time-separator`}>:</div>
              <div className={`${CLASS}__time-unit`}>
                <div className={`${CLASS}__time-number`}>
                  {formatNumber(timeLeft.hours)}
                </div>
                <div className={`${CLASS}__time-label`}>Giờ</div>
              </div>
              <div className={`${CLASS}__time-separator`}>:</div>
              <div className={`${CLASS}__time-unit`}>
                <div className={`${CLASS}__time-number`}>
                  {formatNumber(timeLeft.minutes)}
                </div>
                <div className={`${CLASS}__time-label`}>Phút</div>
              </div>
              <div className={`${CLASS}__time-separator`}>:</div>
              <div className={`${CLASS}__time-unit`}>
                <div className={`${CLASS}__time-number`}>
                  {formatNumber(timeLeft.seconds)}
                </div>
                <div className={`${CLASS}__time-label`}>Giây</div>
              </div>
            </div>
          </Col>

          {/* Cafe Information */}
          <Col lg={4} md={12} className={`${CLASS}__info-wrapper`}>
            <div className={`${CLASS}__info-header`}>
              <h3 className={`${CLASS}__info-title`}>Thông tin liên hệ</h3>
              <div className={`${CLASS}__info-subtitle`}>
                Kết nối với chúng tôi
              </div>
            </div>

            <div className={`${CLASS}__info-content`}>
              {metadata.information.address && (
                <div className={`${CLASS}__info-item`}>
                  <div className={`${CLASS}__info-icon-wrapper`}>
                    <div
                      className={`${CLASS}__info-icon ${CLASS}__info-icon--location`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                  </div>
                  <div className={`${CLASS}__info-details`}>
                    <div className={`${CLASS}__info-label`}>Địa chỉ</div>
                    <div className={`${CLASS}__info-value`}>
                      {metadata.information.address}
                    </div>
                  </div>
                </div>
              )}

              {metadata.information.phoneNumber && (
                <div className={`${CLASS}__info-item`}>
                  <div className={`${CLASS}__info-icon-wrapper`}>
                    <div
                      className={`${CLASS}__info-icon ${CLASS}__info-icon--phone`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                  </div>
                  <div className={`${CLASS}__info-details`}>
                    <div className={`${CLASS}__info-label`}>Điện thoại</div>
                    <div className={`${CLASS}__info-value`}>
                      <a href={`tel:${metadata.information.phoneNumber}`}>
                        {metadata.information.phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {metadata.information.email && (
                <div className={`${CLASS}__info-item`}>
                  <div className={`${CLASS}__info-icon-wrapper`}>
                    <div
                      className={`${CLASS}__info-icon ${CLASS}__info-icon--email`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                  </div>
                  <div className={`${CLASS}__info-details`}>
                    <div className={`${CLASS}__info-label`}>Email</div>
                    <div className={`${CLASS}__info-value`}>
                      <a href={`mailto:${metadata.information.email}`}>
                        {metadata.information.email}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CountdownSection;
