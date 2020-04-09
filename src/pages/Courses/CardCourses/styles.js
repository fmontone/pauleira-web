import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  width: calc(100vw - 16px);
  padding: 0 32px 0 16px;
  display: flex;
  overflow-x: hidden;

  .card-slider {
    width: auto;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;

    &__card {
      width: 275px;
      height: 350px;
      padding: 16px;
      position: relative;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      overflow: hidden;

      filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.07));

      :last-child {
        margin-right: 32px;
      }

      & + .card-slider__card {
        margin-left: 16px;
      }
    }

    & button {
      position: absolute;
      left: 13px;
      bottom: 13px;
      font-weight: 400;
      color: ${colors.primary};
      z-index: 4;
    }

    h3 {
      position: absolute;
      left: 13px;
      bottom: 40px;
      font-size: 34px;
      line-height: 40px;
      color: ${colors.white};
      z-index: 3;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
    }

    &__overlay {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: purple;
      opacity: 0.7;
      position: absolute;
      z-index: 2;

      background: linear-gradient(rgba(0, 0, 0, 0) 0%, #230040 100%);
    }

    img {
      height: 120%;
      width: auto;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
  }
`;
