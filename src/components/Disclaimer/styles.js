import styled from 'styled-components';

import colors from '~/styles/colors';

import ContainerCustom from '~/components/ContainerCustom';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => {
    switch (props.status) {
      case 'info':
        return colors.statusInfo;
      case 'danger':
        return colors.statusDanger;
      case 'warning':
        return colors.statusWarning;
      case 'success':
        return colors.statusSuccess;
      default:
        return 'info';
    }
  }};
`;

export const Container = styled(ContainerCustom)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
`;

export const LogoContainer = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

export const Message = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #fff;

  span a {
    color: #fff;
    text-decoration: underline;
  }
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  background-color: unset;

  :active {
    transform: translate(0.5px, 0.5px);
  }
`;
