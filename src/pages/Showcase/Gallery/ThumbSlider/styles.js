import styled, { css } from 'styled-components';

import colors from '~/styles/colors';

export const PictureSelector = styled.div`
  width: auto;
  padding: 16px 0;
  overflow: hidden;
  border-bottom: 1px solid ${colors.greyLight};

  ${props =>
    props.zoom &&
    css`
      display: none;
    `}

  .picture-selector__wrapper {
    position: relative;
    width: auto;
    height: 100%;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    list-style-type: none;
  }

  li {
    min-width: 70px;
    height: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: black;

    border-radius: 4px;

    button {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: auto;
      transform: translate(-50%, -50%);
    }

    :last-child {
      margin-right: 320px;
    }

    & + li {
      margin-left: 8px;
    }
  }
`;
