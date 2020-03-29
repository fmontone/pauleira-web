import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCallToAction from '~/components/ButtonCallToAction';

import colors from '~/styles/colors';
import fonts from '~/styles/fonts';
import { device } from '~/styles/queries';

export const Container = styled(ContainerCustom)`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px 64px 16px;

  overflow: hidden;

  @media ${device.tabletLs} {
    padding: 0 16px;
    position: unset;
    justify-content: center;
    align-items: flex-start;
  }

  @media ${device.desktop} {
    padding: unset;
  }
`;

export const Title = styled.h1`
  font-family: ${fonts.promo};
  color: ${colors.white};
  font-size: ${props => (props.windowShort ? '24px' : '32px')};
  text-align: center;

  @media ${device.tablet} {
    font-size: 52px;
  }

  @media ${device.tabletLs} {
    transform: translateY(-200px);
    margin-bottom: 40px;
    text-align: left;

    z-index: 10;
  }

  .title__highlight {
    color: ${colors.secondary};
    text-transform: uppercase;
    display: block;

    @media ${device.tablet} {
      margin: 24px 0;
    }
  }
`;

export const HeroImg = styled.img`
  width: 110%;

  @media ${device.tablet} {
    height: auto;
  }

  @media ${device.tabletLs} {
    width: auto;
    height: auto;

    position: absolute;
    right: -230px;
    bottom: 0;
  }

  @media ${device.laptop} {
    right: -100px;
  }

  @media ${device.desktop} {
    right: 150px;
  }

  @media ${device.desktopL} {
    right: 180px;
  }
`;

export const CallToAction = styled(ButtonCallToAction)`
  @media ${device.tabletLs} {
    transform: translateY(-200px);
    z-index: 11;
  }
`;
