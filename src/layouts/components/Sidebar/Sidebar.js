import { faClapperboard, faFilm, faHouse, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '~/config';
import className from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const cx = className.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar_wrapper')}>
            <div className={cx('sidebar_wrap')}>
                <ul className={cx('sidebar_list')}>
                    <li className={cx('sidebar_items')}>
                        <NavLink
                            to={config.routes.home}
                            className={({ isActive }) =>
                                isActive ? cx('sidebar_links', 'active') : cx('sidebar_links')
                            }
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faHouse} />
                            <span>Trang chủ</span>
                        </NavLink>
                    </li>
                    <li className={cx('sidebar_items')}>
                        <NavLink
                            to={config.routes.oddMovie}
                            className={({ isActive }) =>
                                isActive ? cx('sidebar_links', 'active') : cx('sidebar_links')
                            }
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faFilm} />
                            <span>Phim lẻ</span>
                        </NavLink>
                    </li>
                    <li className={cx('sidebar_items')}>
                        <NavLink
                            to={config.routes.seriesMovie}
                            className={({ isActive }) =>
                                isActive ? cx('sidebar_links', 'active') : cx('sidebar_links')
                            }
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faTv} />
                            <span>Phim bộ</span>
                        </NavLink>
                    </li>
                    <li className={cx('sidebar_items')}>
                        <NavLink
                            to={config.routes.category}
                            className={({ isActive }) =>
                                isActive ? cx('sidebar_links', 'active') : cx('sidebar_links')
                            }
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faClapperboard} />
                            <span>Thể loại</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
