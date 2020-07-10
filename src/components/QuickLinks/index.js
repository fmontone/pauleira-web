import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ActivePageContext } from '~/contexts';

import { IconList } from './styles';
import colors from '~/styles/colors';

import Icon from '~/components/Icon';

export default function QuickLinks({ width }) {
  const { setActivePage } = useContext(ActivePageContext);

  return (
    <IconList width={width}>
      <li>
        <Link to="/contato" onClick={() => setActivePage('/contato')}>
          <Icon name="social-contact" color={colors.greyHeavy} />
        </Link>
      </li>
      <li>
        <a href="http://www.youtube.com/pauleira">
          <Icon name="social-youtube" color={colors.greyHeavy} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/pauleiraguitars/">
          <Icon name="social-instagram" color={colors.greyHeavy} />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/pauleira/">
          <Icon name="social-facebook" color={colors.greyHeavy} />
        </a>
      </li>
    </IconList>
  );
}

QuickLinks.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

QuickLinks.defaultProps = {
  width: '100%',
};
