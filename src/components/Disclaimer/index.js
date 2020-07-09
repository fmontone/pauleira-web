import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  MdInfo,
  MdError,
  MdWarning,
  MdCheckCircle,
  MdClose,
} from 'react-icons/md';
import useClearLocalDisclaimer from '~/hooks/useClearLocalDisclaimers';

import {
  Wrapper,
  Container,
  LogoContainer,
  Message,
  CloseButton,
} from './styles';

function Disclaimer({ status, name, children }) {
  const [isRead, setIsRead] = useState(false);
  const nameDisclaimer = `pauleira-disclaimer-${name}`;
  const storageDisclaimer = JSON.parse(localStorage.getItem(nameDisclaimer));

  useClearLocalDisclaimer(nameDisclaimer);

  useEffect(() => {
    // Set if Don't Exists
    if (!storageDisclaimer) {
      localStorage.setItem(nameDisclaimer, JSON.stringify({ isRead: false }));
      setIsRead(false);
    }

    // Check Value and apply on isRead
    if (storageDisclaimer && storageDisclaimer.isRead !== isRead)
      localStorage.setItem(nameDisclaimer, JSON.stringify({ isRead }));
  }, [isRead, nameDisclaimer, storageDisclaimer]);

  return (
    <Wrapper status={status} isRead={isRead}>
      <Container>
        <LogoContainer>
          {status === 'info' && <MdInfo color="#fff" size="24" />}
          {status === 'danger' && <MdError color="#fff" size="24" />}
          {status === 'warning' && <MdWarning color="#fff" size="24" />}
          {status === 'success' && <MdCheckCircle color="#fff" size="24" />}
        </LogoContainer>
        <Message status={status}>{children}</Message>
        <CloseButton onClick={() => setIsRead(true)}>
          <MdClose color="#fff" size="24" />
        </CloseButton>
      </Container>
    </Wrapper>
  );
}

Disclaimer.propTypes = {
  status: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};
Disclaimer.defaultProps = {
  status: 'info',
};

export default Disclaimer;
