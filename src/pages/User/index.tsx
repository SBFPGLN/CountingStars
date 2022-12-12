import { Key, memo, ReactChild, ReactFragment, ReactPortal } from 'react';
import styles from './index.module.less';
import { List, Image, Button, Grid, Space } from 'antd-mobile';
import { userinfolist } from '../../api/mock/mockups.ts';
const User = () => {
  return (
    <>
      <div >
        <Space wrap>
          <Grid columns={4} gap={45}>
            <Grid.Item span={3}>
              <div className={styles['grid-demo-item-block']} />
            </Grid.Item>
            <Grid.Item>
              <div className={styles['grid-demo-item-block']}>
                <Button
                  onClick={() => {
                    // eslint-disable-next-line no-undef
                    alert('hello.')
                  }}
                  size='large'
                  shape='default'

                >
                  设置
                </Button>
              </div>
            </Grid.Item>
          </Grid>
        </Space>
        <div>
          <List>
            {userinfolist.map((userinfo: { id: Key | null | undefined; photos: { url: string; }[]; username: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; chainaddress: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; publickey: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
              <List.Item
                key={userinfo.id}
                prefix={
                  <Image
                    src={userinfo.photos[0].url}
                    style={{}}
                    fit='cover'
                    width={148}
                    height={148}
                  />
                }
              >
                {userinfo.username}
                <p />链上地址：
                {userinfo.chainaddress}
                <p />公钥：
                {userinfo.publickey}
              </List.Item>
            ))}
          </List>
        </div>
        <div>
            <List >
              <List.Item onClick={() => { }}>
                订单查询
              </List.Item>
              <List.Item onClick={() => { }}>
                兑换码兑换
              </List.Item>
              <List.Item onClick={() => { }}>
                关于我们
              </List.Item>
            </List>
        </div>
      </div>
    </>
  );
};
export default memo(User);
