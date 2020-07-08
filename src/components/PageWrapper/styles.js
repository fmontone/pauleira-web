import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props =>
    props.isMainPage
      ? 'linear-gradient(#44007f 0%, #0a0012 100%)'
      : colors.greyLighter};
`;
