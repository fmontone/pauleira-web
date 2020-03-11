import React from 'react';

import { Container } from './styles';

export default function ContainerCustom({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
