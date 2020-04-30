import styled from 'styled-components';

import colors from '~/styles/colors';
import { devices } from '~/styles/queries';

export const PictureSelector = styled.div`
  width: auto;
  padding: 16px 0;
  overflow: hidden;
  border-bottom: 1px solid ${colors.greyHeavy};

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

    :last-child {
      margin-right: 320px;
    }

    & + li {
      margin-left: 8px;
    }

    img {
      object-fit: cover;
      height: 100%;
    }
  }
`;
