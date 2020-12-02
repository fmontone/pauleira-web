import styled from 'styled-components';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

import ContainerCustom from '~/components/ContainerCustom';

export const Container = styled(ContainerCustom)`
  height: auto;
  width: 100%;
  padding: 16px 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  border-bottom: 1px dotted ${colors.greyLight};

  @media ${device.tabletLs} {
    padding: 24px 16px;
  }

  @media ${device.laptop} {
    padding: 48px 0;
    margin-bottom: 32px;
  }

  @media ${device.desktop} {
    padding: 80px 0;
    margin-bottom: 64px;
  }

  h1 {
    font-size: 16px;
    line-height: 1;
    color: ${colors.black};
    text-transform: uppercase;
    margin-bottom: 8px;
    text-decoration-line: underline;

    @media ${device.tabletLs} {
      margin-bottom: 16px;
    }
  }

  h2 {
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
    font-size: 32px;
    line-height: 1;
    margin: unset;

    font-weight: 900;
    color: ${colors.blackDeep};

    @media ${device.tabletLs} {
      font-size: 48px;
    }

    @media ${device.desktop} {
      font-size: 64px;
    }
  }

  h3 {
    color: ${colors.greyMedium};
    margin-top: 16px;

    @media ${device.tabletLs} {
      margin-bottom: 24px;
    }
  }
`;
