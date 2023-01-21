import BodyShow from '~/components/BodyShow/BodyShow';
import Slider from '~/components/Slider/Slider';
import axios from 'axios';
import { useEffect, useState } from 'react';
import config from '~/config';
function Home() {
    const [film, setFilm] = useState([]);
    const [oddFilm, setOddFilm] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`http://movie-db.test/wp-json/wp/v2/posts?categories=1`)
            .then((res) => setFilm(res.data))
            .catch((err) => console.log('Lỗi kết nối', err.code, '- Có thể do', err.message))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    useEffect(() => {
        axios
            .get(`http://movie-db.test/wp-json/wp/v2/posts?categories=3`)
            .then((res) => setOddFilm(res.data))
            .catch((err) => console.log('Lỗi kết nối', err.code, '- Có thể do', err.message))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <Slider />
            <BodyShow title="Phim mới cập nhật 🔥" data={film} isLoading={isLoading} seeAll={config.routes.oddMovie} />

            <BodyShow title="Phim lẻ mới" data={oddFilm} isLoading={isLoading} seeAll={config.routes.seriesMovie} />
            {/* <BodyShow title="Phim bộ mới" /> */}
        </>
    );
}

export default Home;
