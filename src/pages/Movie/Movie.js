/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import { Link, useParams } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import className from 'classnames/bind';
import styles from './Movie.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLink, faShareNodes, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import config from '~/config';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Confirmation from '~/components/Confirmation';
const cx = className.bind(styles);

const Movie = () => {
    const [movie, setMovie] = useState([]);
    const [copySuccess, setCopySuccess] = useState('');
    const [alert, setAlert] = useState(false);
    const { slug } = useParams();

    // useEffect(() => {
    //     const getMovie = async () => {
    //         const result = await fetch(`http://movie-db.test/wp-json/wp/v2/posts?slug=${slug}`);
    //         const data = await result.json();

    //         setMovie(data);
    //     };
    //     getMovie();
    // }, []);
    useEffect(() => {
        const getMovie = async () => {
            await axios
                .get(`http://movie-db.test/wp-json/wp/v2/posts?slug=${slug}`)
                .then((res) => setMovie(res.data))
                .catch((err) => console.log(err));
        };
        getMovie();
    }, []);

    const copyToClip = useCallback(async () => {
        if (alert) return;
        await navigator.clipboard.writeText(window.location.href);
        setCopySuccess('Đã sao chép liên kết');
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 4000);
    }, [alert]);

    return (
        <>
            {alert ? <Confirmation>{copySuccess}</Confirmation> : null}
            {movie &&
                movie.map((singleMovie) => (
                    <div className={cx('body_detail')} key={singleMovie.id}>
                        <div className={cx('breadcrumb')}>
                            <ol className={cx('breadcrumb_list')}>
                                <li className={cx('breadcrumb-item')}>
                                    <Link to={config.routes.oddMovie}>Phim Lẻ</Link>
                                </li>
                                <li className={cx('breadcrumb-item')} aria-current="page">
                                    {singleMovie.title.rendered}
                                </li>
                            </ol>
                        </div>
                        <div className={cx('alert', 'alert-warning')}>
                            <b>Một số lưu ý:</b>
                            <li>Video load chậm: thử dùng VPN.</li>
                            <li>Video không có tiếng: tìm biểu tượng âm thanh trong video để bật tiếng.</li>
                        </div>
                        <div className={cx('body_emdbed')}>
                            <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '56.25%' }}>
                                <iframe
                                    src={singleMovie.link_video}
                                    width="100%"
                                    height="100%"
                                    frameBorder={0}
                                    scrolling="auto"
                                    title={singleMovie.slug}
                                    style={{ position: 'absolute' }}
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className={cx('body_season')}>
                            <span className={cx('season_title')}>Tập phim</span>
                            <div className={cx('season_episodes')}>
                                <a href="/">1</a>
                                <a href="/">2</a>
                                <a href="/">3</a>
                                <a href="/">4</a>
                                <a href="/">5</a>
                            </div>
                        </div>
                        <div className={cx('row', 'body_detail-content')}>
                            <div className={cx('col l-4 ', 'left-content')}>
                                <div
                                    className={cx('body_detail-thumb')}
                                    style={{
                                        backgroundImage:
                                            'url("https://khoaiphim.com/public/upload/slide/alienoid-cuoc-chien-xuyen-khong.webp")',
                                    }}
                                />
                                <div className={cx('detail-actions')}>
                                    <div className={cx('views')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faEye} />
                                        <span>18 lượt xem</span>
                                    </div>

                                    <div className={cx('report')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faTriangleExclamation} />
                                        <span>Báo lỗi</span>
                                    </div>
                                    <TippyHeadless
                                        interactive
                                        hideOnClick={false}
                                        render={(attrs) => (
                                            <div className={cx('optionShare')} tabIndex="-1" {...attrs}>
                                                <ul className={cx('optionShare_wrapper')}>
                                                    <li>
                                                        <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                                                        <span>Chia sẻ lên Facebook</span>
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
                                                        <span>Chia sẻ lên Twitter</span>
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon className={cx('icon')} icon={faLink} />
                                                        <span onClick={copyToClip}>Sao chép liên kết</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    >
                                        <div className={cx('share_social')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faShareNodes} />
                                            <span>Chia sẻ</span>
                                        </div>
                                    </TippyHeadless>
                                </div>
                            </div>
                            <div className={cx('col l-8')}>
                                <div className={cx('body_detail-information')}>
                                    <h1 className={cx('body_information-title')}>{singleMovie.title.rendered}</h1>
                                    <h2 className={cx('body_information-sub')}>{singleMovie.title_eng}</h2>
                                    <button className={cx('btn', 'body_detail-btn')}>Trailer</button>
                                    <div className={cx('body_information-categories')}>
                                        e<a href="/"> {singleMovie.post_categories.name}</a>b
                                    </div>
                                    <div className={cx('body_information-description')}>
                                        <div className={cx('body_description-title')}>Giới thiệu</div>
                                        <div className={cx('body_description-text')}>
                                            <div
                                                className={cx('body_description-content')}
                                                dangerouslySetInnerHTML={{ __html: singleMovie.content.rendered }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('body_comments')}>
                            <div className={cx('body_comments-warning')}>
                                CẢNH BÁO: Không bấm vào các đường link lạ ở khu vực bình luận. Việc truy cập vào các
                                liên kết lạ ngoài khoaiphim.com có thể khiến bạn bị hack tài khoản Facebook.
                            </div>
                            <div className={cx('body_heading')}>
                                <h3 className={cx('body_text')}>Bình luận</h3>
                            </div>
                        </div>
                        <div className={cx('body_show')}>
                            <div className={cx('body_heading')}>
                                <h3 className={cx('body_text')}>Có thể bạn muốn xem</h3>
                            </div>
                            <p>random phim</p>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default Movie;
