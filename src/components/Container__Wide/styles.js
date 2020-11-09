import styled from 'styled-components';

import { device } from '~/styles/queries';

export const Container = styled.div`
  width: 100%;
  max-width: 1680px;
  position: relative;
  flex: 1;

  padding: 0 16px;

  @media ${device.tabletLs} {
    padding: 0 32px;
  }
  @media ${device.tabletLs} {
    padding: 0 32px;
  }
  @media ${device.desktop} {
    padding: 0 72px;
  }
`;
