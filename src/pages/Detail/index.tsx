import { memo } from 'react';
import styles from './index.module.scss';

/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-05 16:52:36
 * @LastEditors: 小白
 * @LastEditTime: 2022-01-05 18:38:46
 */
const Detail = () => {
  return (
    <div>
      <div className="detail_top row">
        <span className={styles.text_demo}>decmo</span>
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171221%2F7951c4f37ee948a2a1fb1f662a1b2feb.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632547529&t=2a4ee825f2f19f8dd74d727a9795f02f"
          alt=""
          className={styles.image}
        />
      </div>
    </div>
  );
};
export default memo(Detail);
