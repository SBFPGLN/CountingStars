import { memo } from "react";
import './index.less';
import { Swiper } from 'antd-mobile';
import swiperImage1 from "../../assets/images/swiper_1.jpg";
import swiperImage2 from "../../assets/images/swiper_2.jpg";

const SwiperComponent = () => {
    const images = [swiperImage1, swiperImage2]
    const items = images.map((image, index) => (
        <Swiper.Item key={index}>
            <img
                src={image}
                alt=''
            />
        </Swiper.Item>
    ))
    return (
            <Swiper autoplay loop className="content">{items}</Swiper>
    );
}
export default memo(SwiperComponent)