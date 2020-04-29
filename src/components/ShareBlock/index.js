import React from 'react';

import Icon from '~/components/Icon';

import { Container, Button } from './styles';
import colors from '~/styles/colors';

export default function ShareBlock() {
  return (
    <Container>
      <Button color={colors.primary}>
        <Icon name="social-link" color="#fff" />
      </Button>
      <Button color="#3b5998">
        <Icon name="social-facebook-thin" color="#fff" />
      </Button>
      <Button color="#00aced">
        <Icon name="social-twitter" color="#fff" />
      </Button>
      <Button color="#cb2027">
        <Icon name="social-pinterest" color="#fff" />
      </Button>
      <Button color="#007bb6">
        <Icon name="social-linkedin" size="20" color="#fff" />
      </Button>
    </Container>
  );
}
