import styled from 'styled-components';

import colors from '~/styles/colors';
import fonts from '~/styles/fonts';
import { device } from '~/styles/queries';

export const Button = styled.button`
  min-height: 40px;
  width: ${props => (props.width === 'stretch' ? '100%' : 'auto')};
  padding: ${props => (props.width === 'stretch' ? '0' : '0 48px')};
  font-family: ${fonts.primary};
  color: ${colors.white};
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  border-radius: 5px;
  background: linear-gradient(#df00ff 0%, #31a6ef 100%);
  box-shadow: 0px 6px 11px rgba(138, 0, 255, 0.39);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: box-shadow 0.1s ease-out;

  svg {
    margin-left: 6px;
    transform: translateY(-1px);
  }

  @media ${device.tabletLs} {
    min-height: 64px;
  }

  :hover {
    box-shadow: 0px 0px 32px rgba(138, 0, 255, 0.89);
  }

  :active {
    transform: translate(1px, 1px);
  }
`;
