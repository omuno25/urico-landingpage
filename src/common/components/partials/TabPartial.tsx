import { Tab, Tabs } from 'react-bootstrap';

import GridImagePartial from './GridImagePartial';
import TabContentPartial, { TabContentDetail } from './TabContentPartial';
import metadata from '../../../data/metadata.json';

const className = 'st-tab-partial';

const TabPartial: React.FC = () => {
  return (
    <>
      <div className={`${className}__tabs`}>
        <Tabs className="d-flex justify-content-center">
          {metadata.sectionService.tabs.map((item, i) => (
            <Tab
              className={`${className}__tabs__tab`}
              key={i}
              eventKey={item.key}
              title={item.title}
            >
              <TabContentPartial
                details={item.details as unknown as TabContentDetail[]}
              />
              <GridImagePartial images={item.images} />
            </Tab>
          ))}
        </Tabs>
      </div>
    </>
  );
};
export default TabPartial;
