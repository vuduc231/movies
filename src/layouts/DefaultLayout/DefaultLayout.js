import PropTypes from 'prop-types';
import className from 'classnames/bind';
import Header from '~/layouts/components/Header/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import Footer from '../components/Footer';

const cx = className.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('body_wrapper')}>
                <Sidebar />
                <div className={cx('body_content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
