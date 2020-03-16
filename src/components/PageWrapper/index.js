import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function PageWrapper({ children, ...rest }) {
  return (
    <Container data-testid="PageWrapper" {...rest}>
      {children}
    </Container>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
};
