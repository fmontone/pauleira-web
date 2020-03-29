import styled from 'styled-components';

import colors from '~/styles/colors';

export const Foot = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Salve = styled.div`
  height: 176px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 8;
    font-weight: bold;
  }

  p {
    margin-bottom: 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${colors.black};
`;
