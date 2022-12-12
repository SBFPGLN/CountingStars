import { memo } from "react";
import styles from './index.module.less';
import { NavBar, List, Image, Space, Button, Toast } from "antd-mobile";
import { SendOutline } from 'antd-mobile-icons'
import { collectionList } from '../../api/mock/mockups.ts'
import { useNavigate } from 'react-router-dom';
const Receive = () => {
    const nva = useNavigate();
    const tell = () =>
        Toast.show({
            content: '领取成功',
            duration: 1000,
        })
    return (
        <>
            <div >
                <NavBar 
                onBack={() => {
                    nva('/');
                }}>
                    藏品详情
                </NavBar>
                <div>
                    <List >
                        <List.Item className={styles.titlefont}>
                            {<Image
                                src={collectionList[0].pictures[0].url}
                            />}
                            <Space justify='center' block>
                                {collectionList[0].name}
                                <SendOutline fontSize={25} color='var(--adm-color-weak)' onClick={tell} />
                            </Space>
                        </List.Item>
                        <List.Item>
                            <Space>
                                {collectionList[0].publisher}
                                <Space className={styles.surplus}>
                                    {collectionList[0].surplus}
                                </Space>
                            </Space>
                            <p />
                            发售时间：{collectionList[0].saledate}
                            <p />
                            终止时间：{collectionList[0].enddate}
                        </List.Item>
                    </List>
                </div>
                <div>
                    <h1 className={styles.titlefont}>作品故事</h1>
                    <Image
                        src={collectionList[0].storys[0].url}
                    />
                </div>
                <div>
                    <h1 className={styles.inform}>领取须知</h1>
                    <div className="">
                        <p>
                            <span>“数星星”在保护艺术作品数字版权的基础上，</span>
                            <span>实现真实可信的数字与实体艺术品的发行、收藏和使用。</span>
                        </p>
                        <p>
                            <span>（1）仅限实名认证为年满18周岁的成都信息工程大学用户领取。</span>
                        </p>
                        <p>
                            <span>（2）艺术作品的版权由艺术家或艺术机构所有，用户除获得版权方的书面同意以外，不得将艺术作品用于任何商业用途，包括但不限于出售艺术作品的副本、使用权、衍生作品。</span>
                        </p>
                        <p>
                            <span>（3）请勿对艺术作品进行炒作、场外交易、欺诈,或以任何</span>
                            <span>其他非法方式进行使用。</span>
                        </p>
                        <p>
                            <span>...</span>
                        </p>
                    </div>
                </div>
                <div>
                    <Button block color='default' size='large' onClick={tell}>
                        领取
                    </Button>
                </div>
            </div>

        </>
    );
}
export default memo(Receive)