import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCallToAction from '~/components/ButtonCallToAction';

import colors from '~/styles/colors';
import fonts from '~/styles/fonts';
import { device } from '~/styles/queries';

export const Container = styled(ContainerCustom)`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 32px 16px 64px 16px;
  background: linear-gradient(#44007f 0%, #120021 100%, #272727 100%);

  overflow-x: hidden;
`;

export const Title = styled.h1`
  font-family: ${fonts.promo};
  color: ${colors.white};
  font-size: ${props => (props.windowShort ? '24px' : '32px')};
  text-align: center;

  @media ${device.tablet} {
    font-size: 52px;
  }

  .title__highlight {
    color: ${colors.secondary};
    text-transform: uppercase;
    display: block;
  }
`;

export const HeroImg = styled.img`
  width: auto;
`;

export const CallToAction = styled(ButtonCallToAction)``;
