import { Col, Row } from 'react-bootstrap';

import { chunkArray } from '../../utils/array';

export interface TabContentDetail {
  title: string;
  desciption: string;
}

export interface TabContentPartialProps {
  details: TabContentDetail[];
}

const className = 'st-tab-content-partial';

const TabContentPartial: React.FC<TabContentPartialProps> = (
  props: TabContentPartialProps,
) => {
  const rows: GenericObject[] = chunkArray(props.details, 3);
  return (
    <div className={`${className}__container`}>
      <Row>
        {rows.map((col: GenericObject, i: number) => (
          <Col key={i}>
            <ul>
              {col.map((item: GenericObject, i: number) => (
                <li key={String(i)}>
                  <Row>
                    <Col>
                      <b className="text-uppercase">{item.title}</b>
                    </Col>
                    <Col className="text-end">
                      <b>{item.price}</b>
                    </Col>
                  </Row>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TabContentPartial;
