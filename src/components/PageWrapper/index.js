import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function PageWrapper({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
  isMainPage: PropTypes.bool,
};

PageWrapper.defaultProps = {
  isMainPage: false,
};
