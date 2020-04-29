import styled from 'styled-components';
import { tint } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
  padding: 8px;
  font-weight: 300;
  color: ${colors.greyHeavy};
  border: 1px solid ${colors.greyLight};
  border-radius: 3px;
  background-color: ${colors.white};

  display: flex;
  flex-direction: row;
  align-items: center;

  z-index: 1;
`;

export const ButtonToggle = styled.div`
  width: 32px;
  height: 29px;
  position: absolute;
  top: 1px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};

  cursor: pointer;

  svg {
    transform: rotate(${props => (props.menu ? '-180deg' : '0')});
    transition: transform 0.2s ease-out;
  }
`;

export const Title = styled.div`
  position: absolute;
  /* font-size: 17px; */
  overflow: hidden;
`;

export const Options = styled.ul`
  position: absolute;
  width: 100%;
  top: 23px;
  left: 0;
  border-radius: 3px;
  background-color: ${colors.white};
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.07));

  display: ${props => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  opacity: ${props => (props.open ? '1' : '0')};
  transform: translateY(${props => (props.open ? '10px' : '0')});

  transition: transform 0.2s ease-out;
`;

export const Option = styled.li`
  height: 32px;
  padding: 8px;
  font-size: 13px;
  letter-spacing: -0.04em;
  line-height: 24px;
  text-align: left;
  color: ${colors.greyHeavy};
  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;

  &.active {
    font-weight: 500;
    color: ${colors.primary};
    background-color: ${tint(0.9, colors.primary)};
  }

  & + li {
    border-top: 1px solid ${colors.greyLight};
  }
`;
