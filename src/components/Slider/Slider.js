/* eslint-disable jsx-a11y/anchor-has-content */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import className from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = className.bind(styles);

function Slider() {
    return (
        <>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className={cx('body_slider')}
            >
                <SwiperSlide>
                    <a
                        href="/"
                        className={cx('body_thumb')}
                        style={{
                            backgroundImage:
                                'url("https://khoaiphim.com/public/upload/slide/alienoid-cuoc-chien-xuyen-khong.webp")',
                        }}
                        alt="Image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="/"
                        className={cx('body_thumb')}
                        style={{
                            backgroundImage:
                                'url("https://khoaiphim.com/public/upload/slide/than-sam-4-tinh-yeu-va-sam-set_1.webp")',
                        }}
                        alt="Image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="/"
                        className={cx('body_thumb')}
                        style={{
                            backgroundImage:
                                'url("https://khoaiphim.com/public/upload/slide/sieu-anh-hung-black-adam.webp")',
                        }}
                        alt="Image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="/"
                        className={cx('body_thumb')}
                        style={{
                            backgroundImage: 'url("https://khoaiphim.com/public/upload/slide/bong-dung-trung-so.webp")',
                        }}
                        alt="Image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="/"
                        className={cx('body_thumb')}
                        style={{
                            backgroundImage:
                                'url("https://khoaiphim.com/public/upload/slide/avatar-2-dong-chay-cua-nuoc.webp")',
                        }}
                        alt="Image"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
