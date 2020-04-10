import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Button } from './styles';
import colors from '~/styles/colors';

/**
 * Renders a buttom with defaut or given parameters
 * @param {String('button'|'submit')} type  Default: button
 * @param {String}  model default: regular Options: ['regular', 'outline', 'callToAction', 'inactive', 'inactiveOutline]
 * @param {String('small'|'regular'|'large')}  size default: regular
 * @param {String}  color default: colors.primary
 * @param {String('auto'|'stretch')}  width default: auto
 */

export default function ButtonCustom({
  children,
  type,
  model,
  color,
  width,
  size,
  navTo,
}) {
  const history = useHistory();
  function handleClick() {
    if (navTo) history.push(navTo);
  }

  return (
    <Button
      onClick={handleClick}
      type={type}
      model={model}
      size={size}
      color={color}
      width={width}
    >
      {children}
    </Button>
  );
}

ButtonCustom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  model: PropTypes.oneOf([
    'regular',
    'outline',
    'callToAction',
    'inactive',
    'inactiveOutline',
  ]),
  size: PropTypes.oneOf(['regular', 'small', 'large']),
  color: PropTypes.string,
  width: PropTypes.oneOf(['auto', 'stretch']),
  navTo: PropTypes.string,
};

ButtonCustom.defaultProps = {
  type: 'button',
  model: 'regular',
  size: 'regular',
  color: colors.primary,
  width: 'auto',
  navTo: null,
};
