import styled, { css } from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import colors from '~/styles/colors';
import { device } from '~/styles/queries';

const isAndroid = new RegExp('Android').test(navigator.userAgent);

export const Header = styled.header`
  width: 100%;
  height: 64px;
  position: fixed;
  bottom: 0;
  background: ${colors.blackDeep};

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tabletLs} {
    position: relative;
    height: 64px;
  }

  z-index: 100;
`;

export const Container = styled(ContainerCustom)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-flow: row-reverse;

  @media ${device.tabletLs} {
    flex-flow: row;
    height: 100%;
    padding: 0 16px;
    align-items: center;
  }
`;

const loggoLarge = css`
  img {
    width: 106px;
  }

  &:active {
    transform: translate(0.5px, 0.5px);
  }
`;

export const Logo = styled.div`
  width: ${props => (props.size === 'small' ? '64px' : '128px')};
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props =>
    props.size === 'small' ? 'center' : 'flex-start'};

  ${props => props.size === 'large' && loggoLarge}

  &:active {
    transform: translate(0.5px, 0.5px);
  }
`;

export const Navigation = styled.nav`
  padding-left: 48px;

  @media ${device.tabletLs} {
    padding-left: unset;
  }
`;

export const NavToggler = styled.button`
  width: 48px;
  height: 48px;
  padding: 16px 0;
  position: absolute;
  left: 0;
  bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;

  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.menu ? 'rotate(-180deg)' : 'rotate(0deg)')};

  background: ${props => (props.menu ? colors.primary : 'transparent')};

  @media ${device.tabletLs} {
    display: none;
  }

  div {
    width: 20px;
    height: 2px;
    background: ${colors.greyLight};
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;
    transform: rotate(0);
    left: 0;

    :first-child.open {
      background-color: ${colors.terceary};
      transform: rotate(45deg);
      top: -2px;
      left: 2px;
    }

    :nth-child(2).open {
      left: -2000px;
      opacity: 0;
    }

    :last-child.open {
      background-color: ${colors.terceary};
      transform: rotate(-45deg);
      top: 1px;
      left: 2px;
    }
  }

  &:active {
    transform: translate(0.5px, 0.5px);
  }
`;

export const Menu = styled.ul`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: ${props => (props.menu ? '0' : '100vh')};
  left: 0;
  padding-bottom: ${isAndroid ? '94px' : '64px'};
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  background-color: ${colors.blackDeep};

  transition: all 0.2s ease-in-out;
  z-index: 99;

  @media ${device.tabletLs} {
    background-color: unset;
  }

  @media ${device.tabletLs} {
    width: unset;
    height: 100%;
    padding: unset;
    position: relative;
    top: unset;
    flex-direction: row;
  }

  li {
    padding-left: 54px;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    text-transform: uppercase;
    display: block;

    transition: all 0.9s linear;
    opacity: ${props => (props.menu ? '1' : '0')};

    @media ${device.tabletLs} {
      padding: unset;
      font-size: 16px;
      font-weight: 400;
      opacity: 1;
    }

    & + li {
      @media ${device.tabletLs} {
        margin-top: unset;
        margin-left: 20px;
      }
    }

    a {
      color: ${colors.greyHeavy};

      &.isActive {
        color: ${colors.terceary};
      }

      @media ${device.tabletLs} {
        color: ${colors.greyLighter};
      }

      :hover {
        color: ${colors.secondary};
      }

      &:active {
        transform: translate(0.5px, 0.5px);
      }
    }
  }
`;
