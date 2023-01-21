import className from 'classnames/bind';
import styles from './LoadingCard.module.scss';
const cx = className.bind(styles);

const LoadingCard = () => {
    return (
        <>
            <div className={cx('col c-12 m-4 l-3')}>
                <div className={cx('skeleton-wrapper')}>
                    <div className={cx('skeleton-img')}></div>
                    <div className={cx('skeleton-text')}>
                        <div className={cx('skeleton-line')} style={{ width: '35%' }} />
                        <div className={cx('skeleton-line')} style={{ width: '50%' }} />
                    </div>
                </div>
            </div>
            <div className={cx('col c-12 m-4 l-3')}>
                <div className={cx('skeleton-wrapper')}>
                    <div className={cx('skeleton-img')}></div>
                    <div className={cx('skeleton-text')}>
                        <div className={cx('skeleton-line')} style={{ width: '35%' }} />
                        <div className={cx('skeleton-line')} style={{ width: '50%' }} />
                    </div>
                </div>
            </div>
            <div className={cx('col c-12 m-4 l-3')}>
                <div className={cx('skeleton-wrapper')}>
                    <div className={cx('skeleton-img')}></div>
                    <div className={cx('skeleton-text')}>
                        <div className={cx('skeleton-line')} style={{ width: '35%' }} />
                        <div className={cx('skeleton-line')} style={{ width: '50%' }} />
                    </div>
                </div>
            </div>
            <div className={cx('col c-12 m-4 l-3')}>
                <div className={cx('skeleton-wrapper')}>
                    <div className={cx('skeleton-img')}></div>
                    <div className={cx('skeleton-text')}>
                        <div className={cx('skeleton-line')} style={{ width: '35%' }} />
                        <div className={cx('skeleton-line')} style={{ width: '50%' }} />
                    </div>
                </div>
            </div>
            <div className={cx('col c-12 m-4 l-3')}>
                <div className={cx('skeleton-wrapper')}>
                    <div className={cx('skeleton-img')}></div>
                    <div className={cx('skeleton-text')}>
                        <div className={cx('skeleton-line')} style={{ width: '35%' }} />
                        <div className={cx('skeleton-line')} style={{ width: '50%' }} />
                    </div>
                </div>
            </div>
            <div className={cx('col c-12 m-4 l-3')}>
                <div className={cx('skeleton-wrapper')}>
                    <div className={cx('skeleton-img')}></div>
                    <div className={cx('skeleton-text')}>
                        <div className={cx('skeleton-line')} style={{ width: '35%' }} />
                        <div className={cx('skeleton-line')} style={{ width: '50%' }} />
                    </div>
                </div>
            </div>
            <div className={cx('col c-12 m-4 l-3')}>
                <div className={cx('skeleton-wrapper')}>
                    <div className={cx('skeleton-img')}></div>
                    <div className={cx('skeleton-text')}>
                        <div className={cx('skeleton-line')} style={{ width: '35%' }} />
                        <div className={cx('skeleton-line')} style={{ width: '50%' }} />
                    </div>
                </div>
            </div>
            <div className={cx('col c-12 m-4 l-3')}>
                <div className={cx('skeleton-wrapper')}>
                    <div className={cx('skeleton-img')}></div>
                    <div className={cx('skeleton-text')}>
                        <div className={cx('skeleton-line')} style={{ width: '35%' }} />
                        <div className={cx('skeleton-line')} style={{ width: '50%' }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadingCard;
