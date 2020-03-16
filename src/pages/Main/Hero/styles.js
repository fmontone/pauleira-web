import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCallToAction from '~/components/ButtonCallToAction';

import colors from '~/styles/colors';
import fonts from '~/styles/fonts';
import { device } from '~/styles/queries';

export const Container = styled(ContainerCustom)`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 16px;

  overflow-x: hidden;

  @media ${device.tablet} {
    align-items: initial;
  }
`;

export const Title = styled.h1`
  font-family: ${fonts.promo};
  color: ${colors.white};
  font-size: ${props => (props.windowShort ? '24px' : '32px')};
  text-align: center;

  @media ${device.tablet} {
    width: 50%;
    text-align: left;

    z-index: 2;
  }

  .title__highlight {
    font-size: ${props => (props.windowShort ? '40px' : '54px')};
    color: ${colors.secondary};
    text-transform: uppercase;
    display: block;
  }
`;

export const HeroImg = styled.img`
  width: ${props => (props.windowShort ? '100%' : '423.34px')};

  @media ${device.tablet} {
    width: auto;
    height: 100%;
    position: absolute;
    right: -10%;

    z-index: 1;
  }
`;

export const CallToAction = styled(ButtonCallToAction)`
  @media ${device.tablet} {
    z-index: 2;
  }
`;
