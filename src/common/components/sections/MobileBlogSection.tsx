import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import metadata from '../../../data/metadata.json';
import { SectionName } from '../../utils/enum';
import { redirectPageOpenWindow } from '../../utils/navigate';
import { SvgIcon } from '../common';

const className = 'st-mobile-blog-section';

const MobileBlogSection: React.FC = () => {
  return (
    <div
      id={`section--${SectionName.blog}`}
      className={`${className}__background`}
    >
      <div className={`${className}__container`}>
        <Container className="text-center">
          <span className={`text-uppercase ${className}__container__heading`}>
            {metadata.sectionBlog.heading}
          </span>
          <p className={`${className}__container__description`}>
            {metadata.sectionBlog.mobileDescription}
          </p>
        </Container>
        <Row>
          {metadata.sectionBlog.articles.map((item, i) => (
            <Col xs={12} sm={4} key={i} className="mb-2">
              <Card
                className={`${className}__container__card`}
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  redirectPageOpenWindow(e, item.href)
                }
              >
                <div className="d-flex">
                  <Card.Img
                    className={`${className}__container__img`}
                    variant="left"
                    src={item.image}
                    alt="image"
                  />
                  <Card.Body className={`${className}__container__body`}>
                    <Card.Title
                      className={`${className}__container__title truncate-overflow`}
                    >
                      {item.title}
                    </Card.Title>
                    <Card.Text
                      className={`${className}__container__text truncate-overflow`}
                    >
                      {item.shortDescription}
                    </Card.Text>
                    <Card.Footer className={`${className}__container__footer`}>
                      <div className="d-flex">
                        <span className="w-100">{item.date}</span>
                        <a
                          href="#"
                          className={`w-100 ${className}__container__see-more`}
                        >
                          {metadata.sectionBlog.seeMore}
                        </a>
                        <SvgIcon
                          id="arrow-narrow-right"
                          className="align-middle"
                        />
                      </div>
                    </Card.Footer>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-grid">
          <Button
            variant="primary"
            size="sm"
            className={`${className}__container__button-see-all`}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              redirectPageOpenWindow(e, metadata.sectionBlog.seeAllHref)
            }
          >
            <SvgIcon
              id="arrow-down"
              size="20"
              className={`${className}__container__ico-narrow`}
            />
            <span> {metadata.sectionBlog.seeAll}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileBlogSection;
