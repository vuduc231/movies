import className from 'classnames/bind';
import styles from './Confirmation.module.scss';
const cx = className.bind(styles);

const Confirmation = ({ children, ...props }) => {
    return (
        <div className={cx('confirmation_wrapper')} style={props}>
            <span className={cx('confirmation_notification')}>{children}</span>
        </div>
    );
};

export default Confirmation;
