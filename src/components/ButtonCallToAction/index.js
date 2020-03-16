import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

export default function ButtonCallToAction({ children, width, ...rest }) {
  return (
    <Button type="text" width={width} {...rest}>
      {children}
    </Button>
  );
}

ButtonCallToAction.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  width: PropTypes.oneOf(['auto', 'stretch']),
};

ButtonCallToAction.defaultProps = {
  width: 'auto',
};
