// Layout
import config from '~/config';

import Home from '~/pages/Home';
import OddMovie from '~/pages/OddMovie';
import SeriesMovie from '~/pages/SeriesMovie';
import Category from '~/pages/Category';
import Movie from '~/pages/Movie';

const publicRoutes = [
    { path: config.routes.home, components: Home },
    { path: config.routes.oddMovie, components: OddMovie },
    { path: config.routes.seriesMovie, components: SeriesMovie },
    { path: config.routes.category, components: Category },
    { path: config.routes.movie, components: Movie },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
