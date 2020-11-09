import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Container__Wide({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Container__Wide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
    PropTypes.string,
  ]),
};

Container__Wide.defaultProps = {
  children: '',
};

export default Container__Wide;
