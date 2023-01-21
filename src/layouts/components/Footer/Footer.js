import className from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = className.bind(styles);
function Footer() {
    return (
        <div className={cx('footer_wrapper')}>
            <p>
                <b>KhoaiPhim.com</b> là website xem phim HD Vietsub online được tổng hợp và sưu tầm trên Internet. Chúng
                tôi không chịu trách nhiệm đối với bất kỳ nội dung nào được đăng tải trên trang web này.
            </p>
            <span>
                Liên hệ qc tele:{' '}
                <a href="/" className={cx('footer_links')}>
                    @motchill
                </a>
            </span>
            <div className={cx('footer_nav')}>
                <a href="/">Các vị trí quảng cáo tại khoaiphim.com</a>
            </div>
            <div className={cx('footer_copyright')}>
                Copyright © Khoái Phim 2023
                <a href="/" rel="dofollow" title="xem phim online">
                    xem phim online
                </a>
            </div>
        </div>
    );
}

export default Footer;
