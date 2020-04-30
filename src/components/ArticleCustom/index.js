import React from 'react';
import PropTypes from 'prop-types';

import { Article } from './styles';

export default function ArticleCustom({ children, padding }) {
  return <Article padding={padding}>{children}</Article>;
}

ArticleCustom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.node,
  ]),
  padding: PropTypes.string,
};

ArticleCustom.defaultProps = {
  children: '',
  padding: '16px',
};
