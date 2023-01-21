import { Link, NavLink } from 'react-router-dom';
import className from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import config from '~/config';

import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faClapperboard, faFilm, faHouse, faTv } from '@fortawesome/free-solid-svg-icons';
import Search from '../Search';

const cx = className.bind(styles);

function Header() {
    return (
        <div className={cx('header_wrapper')}>
            <div className={cx('header_logo')}>
                <Link to={config.routes.home}>
                    <img src="https://motchill.tv/motchill.png?v1.0.2" alt="Hell" />
                </Link>
            </div>
            <div className={cx('header_body')}>
                <ul className={cx('header_list')}>
                    <li className={cx('header_items')}>
                        <a href="/" className={cx('header_links')}>
                            Điều khoản
                        </a>
                    </li>
                    <li className={cx('header_items')}>
                        <a href="/" className={cx('header_links')}>
                            Donate
                        </a>
                    </li>
                    <li className={cx('header_items')}>
                        <span>
                            Liên hệ qc tele:{' '}
                            <a href="/" className={cx('header_links')}>
                                @motchill
                            </a>
                        </span>
                    </li>
                </ul>
                {/* SEARCH */}
                <Search />
            </div>
            <div className={cx('header_action')}>
                <span>Hello World</span>
            </div>

            {/* Menu Mobile */}
            <label htmlFor="header-mobile-check" className={cx('header_bars')}>
                <FontAwesomeIcon className={cx('icon')} icon={faBarsStaggered} />
            </label>

            <input type="checkbox" hidden className={cx('header_input')} id="header-mobile-check" />

            <label htmlFor="header-mobile-check" className={cx('header_overlay')}></label>

            <div className={cx('header_body-mobile')}>
                <ul className={cx('header_list-mobile')}>
                    <li className={cx('header_items-mobile active')}>
                        <NavLink
                            to={config.routes.home}
                            className={({ isActive }) =>
                                isActive ? cx('header_links-mobile', 'active') : cx('header_links-mobile')
                            }
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faHouse} />
                            <span>Trang chủ</span>
                        </NavLink>
                    </li>
                    <li className={cx('header_items-mobile')}>
                        <NavLink
                            to={config.routes.oddMovie}
                            className={({ isActive }) =>
                                isActive ? cx('header_links-mobile', 'active') : cx('header_links-mobile')
                            }
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faFilm} />
                            <span>Phim lẻ</span>
                        </NavLink>
                    </li>
                    <li className={cx('header_items-mobile')}>
                        <NavLink
                            to={config.routes.seriesMovie}
                            className={({ isActive }) =>
                                isActive ? cx('header_links-mobile', 'active') : cx('header_links-mobile')
                            }
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faTv} />
                            <span>Phim bộ</span>
                        </NavLink>
                    </li>
                    <li className={cx('header_items-mobile')}>
                        <NavLink
                            to={config.routes.category}
                            className={({ isActive }) =>
                                isActive ? cx('header_links-mobile', 'active') : cx('header_links-mobile')
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

export default Header;
