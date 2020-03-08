import React from 'react';

import NavBar from '~/components/NavBar';
import { Container } from './styles';

export default function Main() {
  return (
    <Container data-testid="pages-main">
      <NavBar />
    </Container>
  );
}
