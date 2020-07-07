import React from 'react';
import PropTypes from 'prop-types';

import {
  MdInfo,
  MdError,
  MdWarning,
  MdCheckCircle,
  MdClose,
} from 'react-icons/md';

import {
  Wrapper,
  Container,
  LogoContainer,
  Message,
  CloseButton,
} from './styles';

function Disclaimer({ status, children }) {
  return (
    <Wrapper status={status}>
      <Container>
        <LogoContainer>
          {status === 'info' && <MdInfo color="#fff" size="24" />}
          {status === 'danger' && <MdError color="#fff" size="24" />}
          {status === 'warning' && <MdWarning color="#fff" size="24" />}
          {status === 'success' && <MdCheckCircle color="#fff" size="24" />}
        </LogoContainer>
        <Message status={status}>{children}</Message>
        <CloseButton>
          <MdClose color="#fff" size="24" />
        </CloseButton>
      </Container>
    </Wrapper>
  );
}

Disclaimer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  status: PropTypes.string,
};
Disclaimer.defaultProps = {
  status: 'info',
};

export default Disclaimer;
