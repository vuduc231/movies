import styles from './Search.module.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';

const cx = className.bind(styles);

function Search() {
    return (
        <div className={cx('search_wrapper')}>
            <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
            <input spellCheck="false" placeholder="Nhập tên phim cần tìm..." className={cx('search_input')} />
        </div>
    );
}

export default Search;
