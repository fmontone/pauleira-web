import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const ContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 145px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #000;

  @media ${device.laptop} {
    height: 365px;
  }
`;

export const Container = styled(ContainerCustom)`
  padding: 0 16px;
  z-index: 3;
`;

export const Title = styled.h1`
  color: ${colors.greyLighter};

  span {
    display: block;
    font-size: 19px;
    line-height: 24px;
  }
`;

export const BgImage = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 1;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to right, #000 0%, #8a00ff 100%);
  opacity: 0.81;
  z-index: 2;
`;
