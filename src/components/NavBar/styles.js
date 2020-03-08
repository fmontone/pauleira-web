import styled from 'styled-components';

import colors from '~/styles/colors';

export const Header = styled.header`
  width: 100%;
  height: 48px;
  position: fixed;
  bottom: 0;
  background-color: ${colors.black};
  padding-left: 48px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: row-reverse;
`;

export const Logo = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navigation = styled.nav``;

export const NavToggler = styled.button`
  width: 48px;
  height: 48px;
  padding: 18px 0;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;

  transition: all 0.3s linear;
  /* transform: ${props =>
    props.menu ? 'rotate(-180deg)' : 'rotate(0deg)'}; */

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
      left: -10px;
      opacity: 0;
    }

    :last-child.open {
      background-color: ${colors.terceary};
      transform: rotate(-45deg);
      top: 2px;
      left: 2px;
    }
  }
`;

export const Menu = styled.ul`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: ${props => (props.menu ? '0' : '100vh')};
  left: 0;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  opacity: ${props => (props.menu ? '1' : '0')};
  background-color: ${colors.black};
  transition: all 0.2s linear;

  z-index: 99;

  li {
    padding-left: 54px;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    text-transform: uppercase;
    display: block;

    & + li {
      margin-top: 43px;
    }

    a {
      color: ${colors.greyHeavy};

      :hover {
        color: ${colors.terceary};
      }
    }
  }
`;

export const QuickLinks = styled.ul`
  height: 48px;
  padding: 0 26px;

  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`;
