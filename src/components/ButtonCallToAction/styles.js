import styled from 'styled-components';

import colors from '~/styles/colors';
import fonts from '~/styles/fonts';
// import { windowSize } from '~/styles/queries';

export const Button = styled.button`
  height: ${props => (props.windowShort ? '40px' : '64px')};
  min-height: ${props => (props.windowShort ? '40px' : '64px')};
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
`;
