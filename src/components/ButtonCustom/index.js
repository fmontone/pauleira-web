import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { ActivePageContext } from '~/contexts';

import { Button, FeedBack } from './styles';
import colors from '~/styles/colors';

/**
 * @param {String('button'|'submit')} type
 * @param {String}  model
 * @param {String('small'|'regular'|'large')}  size
 * @param {String}  color
 * @param {String('auto'|'stretch')}  width
 */

export default function ButtonCustom({
  children,
  type,
  model,
  color,
  width,
  size,
  navTo,
  ...props
}) {
  const history = useHistory();
  const { _, setActivePage } = useContext(ActivePageContext); /* eslint-disable-line */
  const [feedback, setFeedback] = useState(false);

  function handleClick() {
    setFeedback(false);
    if (navTo) {
      history.push(navTo);
      setActivePage(navTo);
      window.scrollTo(0, 0);
    }
  }

  return (
    <Button
      onClick={() => setFeedback(true)}
      type={type}
      model={model}
      size={size}
      color={color}
      width={width}
      {...props}
    >
      <div>{children}</div>
      <FeedBack
        className={feedback && 'animate'}
        onAnimationEnd={() => handleClick(false)}
      />
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
