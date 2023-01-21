import PropTypes from 'prop-types';
import './Grid.scss';
import './GlobalStyles.scss';
import './Responsive.scss';

function GlobalStyles({ children }) {
    return <div>{children}</div>;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
