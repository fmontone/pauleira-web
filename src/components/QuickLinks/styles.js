import styled from 'styled-components';

import { device } from '~/styles/queries';

export const IconList = styled.ul`
  height: 48px;
  width: ${props => props.width};
  padding: 0 26px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;

  @media ${device.tablet} {
    justify-content: space-around;
  }
`;
