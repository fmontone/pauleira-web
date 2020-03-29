import React from 'react';
import { Link } from 'react-router-dom';

import { IconList } from './styles';
import colors from '~/styles/colors';

import Icon from '~/components/Icon';

export default function QuickLinks() {
  return (
    <IconList>
      <li>
        <Link to="/contato">
          <Icon name="social-contact" color={colors.greyHeavy} />
        </Link>
      </li>
      <li>
        <a href="http://www.youtube.com/pauleira">
          <Icon name="social-youtube" color={colors.greyHeavy} />
        </a>
      </li>
      <li>
        <a href="http://www.youtube.com/pauleira">
          <Icon name="social-instagram" color={colors.greyHeavy} />
        </a>
      </li>
      <li>
        <a href="http://www.youtube.com/pauleira">
          <Icon name="social-facebook" color={colors.greyHeavy} />
        </a>
      </li>
    </IconList>
  );
}
