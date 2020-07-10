import styled from 'styled-components';
import { linearGradient, darken } from 'polished';

import Card from '~/components/Card';
import ButtonCustom from '~/components/ButtonCustom';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const Container = styled(Card)`
  width: 100%;
  min-height: 100px;
  padding: 16px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${linearGradient({
    colorStops: [
      `${darken(0.4, colors.primary)} 40%`,
      `${darken(0.2, colors.primary)} 100%`,
    ],
    toDirection: 'to top right',
    fallback: '#FFF',
  })}

  @media ${device.tabletLs} {
    padding: 24px;
    min-height: 200px;
    width: 80%;
  }
  @media ${device.laptop} {
    min-height: 300px;
  }
`;

export const Title = styled.span`
  margin-bottom: 16px;
  font-size: 2em;
  text-align: center;
  font-family: 'Fira Sans', Arial, Helvetica, sans-serif;
  color: ${colors.statusWarning};

  @media ${device.tabletLs} {
    font-size: 2.3em;
  }
`;

export const Description = styled.span`
  font-family: 'Fira Sans', Arial, Helvetica, sans-serif;
  text-align: center;
  color: #fff;
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 24px;

  @media ${device.tabletLs} {
    font-size: 1.6em;
  }

  span {
    display: block;
    margin-top: 16px;
  }

  span span {
    display: block;
    font-size: 2em;
    color: ${colors.statusDanger};
    margin-bottom: 8px;

    svg:first-child {
      margin-right: 16px;
    }
    svg:last-child {
      margin-left: 16px;
    }
  }
`;

export const CallToAction = styled(ButtonCustom).attrs({
  color: colors.statusInfo,
})`
  width: 100%;
  text-transform: uppercase;
  height: 48px;

  @media ${device.tablet} {
    width: auto !important;
    padding: 0 16px;
  }

  @media ${device.tabletLs} {
    height: 64px;
    font-size: 1.2em;
  }
`;
