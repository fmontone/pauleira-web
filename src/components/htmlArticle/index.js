import React from 'react';
import PropTypes from 'prop-types';

import { Article } from './styles';

export default function htmlArticle({ children }) {
  return <Article>{children}</Article>;
}

htmlArticle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.node,
  ]),
};

htmlArticle.defaultProps = {
  children: '',
};
