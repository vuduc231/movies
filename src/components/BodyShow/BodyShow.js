import className from 'classnames/bind';
import styles from './BodyShow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingCard from '../Loading/LoadingCard';
const cx = className.bind(styles);

function BodyShow({ title, data, isLoading, seeAll, ...props }) {
    const [film, setFilm] = useState([]);

    useEffect(() => {
        setFilm(data);
    }, [data]);
    return (
        <div className={cx('body_show')}>
            <div className={cx('body_heading')}>
                <h3 className={cx('body_text')}>{title}</h3>
                <Link to={seeAll} className={cx('body_viewAll')} rel="noreferrer" target="_self">
                    Xem tất cả <FontAwesomeIcon className={cx('icon')} icon={faArrowRight} />
                </Link>
            </div>
            <div className={cx('body_list')}>
                <div className={cx('row body_list-hidden')}>
                    {isLoading ? (
                        <LoadingCard />
                    ) : (
                        film.map((fin) => (
                            <div className={cx('col c-12 m-4 l-3')} key={fin.id}>
                                <Link
                                    to={`/phim/${fin.slug}`}
                                    title={fin.title.rendered}
                                    target="_self"
                                    className={cx('film_information')}
                                >
                                    <div
                                        className={cx('film_link')}
                                        style={{
                                            backgroundImage: `url(${fin.featured_image_src})`,
                                        }}
                                    >
                                        <div className={cx('film_overlay')} />
                                    </div>
                                    <div className={cx('film_caption')}>
                                        <p className={cx('film_titlesub')}>Dancing on Glass</p>
                                        <h6 className={cx('film_title')}>{fin.title.rendered}</h6>
                                    </div>
                                    <div className={cx('film_ribbon')}>HD/FHD</div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default BodyShow;
