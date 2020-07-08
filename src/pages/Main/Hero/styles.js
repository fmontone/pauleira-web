import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCallToAction from '~/components/ButtonCallToAction';

import colors from '~/styles/colors';
import fonts from '~/styles/fonts';
import { device } from '~/styles/queries';

export const Container = styled(ContainerCustom)`
  position: relative;
  height: 100%;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    align-items: flex-start;
  }
`;

export const TextAndCall = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    width: 400px;
  }
`;

export const Title = styled.h1`
  font-family: ${fonts.promo};
  color: ${colors.white};
  font-size: ${props => (props.windowShort ? '24px' : '40px')};
  text-align: center;

  @media ${device.tablet} {
    font-size: 52px;
    line-height: 60px;
  }

  @media ${device.laptop} {
    text-align: left;
  }

  .title__highlight {
    color: ${colors.secondary};
    text-transform: uppercase;
    display: block;

    @media ${device.tablet} {
    }
  }
`;

export const CallToAction = styled(ButtonCallToAction)`
  margin: 32px 0;
`;

export const HeroImg = styled.img`
  width: 100%;

  @media ${device.laptop} {
    position: absolute;
    width: auto;
    max-height: 90%;
    height: auto;
    margin: 32px 0;
    right: 0;
  }

  @media ${device.desktopL} {
  }
`;
