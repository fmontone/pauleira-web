import React from 'react';

import Icon from '~/components/Icon';
import { Container, Button } from './styles';

export default function ButtonLike() {
  return (
    <Container>
      <Button type="button">
        <Icon name="social-like-heavymetal" size="32" color="#ffff" />
      </Button>
      <span className="button-like__count">0</span>
      <span className="button-like__total">1200</span>
    </Container>
  );
}
