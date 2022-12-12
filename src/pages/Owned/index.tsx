import { memo } from 'react';
import styles from './index.module.less';
import { collectionList } from '../../api/mock/mockups.ts'
import { List, Image} from 'antd-mobile';

const Owned = () => {
  return (
    <div>
      <List >
            {collectionList.map(collection => (
              <List.Item
                key={collection.id}
              >
                {<Image
                  src={collection.pictures[0].url}
                />}
                {collection.name}  <p />
                领取时间：{collection.receivedate}
              </List.Item>
            ))}
          </List>
    </div>
  );
};
export default memo(Owned);
