import styled, { keyframes } from 'styled-components';

import colors from '~/styles/colors';

const animateCounter = keyframes`
  0% {
    transform: translateY(-50%);
      opacity: 0;
  }
  100% {
    transform: translateY(-200%);
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 148px;
  height: 48px;
  display: flex;
  align-items: center;

  .button-like__count {
    position: absolute;
    left: 8px;
    top: 50%;
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    color: ${colors.greyLighter};
    border-radius: 50%;
    background-color: ${colors.greyHeavy};
    opacity: 0;
    transform: translateY(-50%);

    z-index: 4;
  }

  .button-like__count--animated {
    animation: ${animateCounter} 0.25s ease;
  }

  .button-like__total {
    font-size: 12px;
    color: ${colors.greyHeavy};
    margin-left: 16px;
  }
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(45deg, #df00ff 0%, #31a6ef 100%);
  box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.22);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 5;

  transition: box-shaddow 0.3 ease;
  transition: transform 0.3 ease;

  :active {
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.22);
    transform: translateY(1px);
    background: linear-gradient(45deg, #df00ff -20%, #31a6ef 120%);
  }

  span {
    color: ${colors.greyLighter};
    font-size: 12px;
    font-weight: bold;
  }
`;
