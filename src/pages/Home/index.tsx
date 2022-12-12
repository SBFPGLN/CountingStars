import { Card, Image, List } from 'antd-mobile';
import { memo } from 'react';
import styles from './index.module.less';
import SwiperComponent from '../../components/swiper/index'
import { collectionList } from '../../api/mock/mockups.ts'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const nva = useNavigate();
  return (
    <div>
      {/* <div className='text-1xl m-1 p-4 text-center'> */}
      <div className={styles.NavBarBox}>
        <h1 className='text-center'>ContingStars</h1>
      </div>
      <div>
        <SwiperComponent />
      </div>
      <div >
        <Card title='数字藏品'>
          <List >
            {collectionList.map(collection => (
              <List.Item
                key={collection.id}
              >
                {<Image
                  src={collection.pictures[0].url}
                  onClick={() => {
                    nva('/receive');
                  }}
                />}
                {collection.name}  <p />
                {collection.publisher} <p />
                {collection.total}
              </List.Item>
            ))}
          </List>
        </Card>

      </div>

    </div>
  );
};
export default memo(Home);
