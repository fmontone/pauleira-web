import styled from 'styled-components';
import { transparentize } from 'polished';

import PageWrapper from '~/components/PageWrapper';
import ContainerCustom from '~/components/ContainerCustom';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const Wrapper = styled(PageWrapper)``;

export const Container = styled(ContainerCustom)`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ThumbGrid = styled.div`
  width: 100%;
  height: auto;

  margin: 16px 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4px;

  @media ${device.tablet} {
    /* grid-template-columns: repeat(2, 1fr); */
    grid-gap: 16px;
  }

  @media ${device.tabletLs} {
    grid-gap: 24px;
  }

  @media ${device.laptop} {
    /* grid-template-columns: repeat(4, 1fr); */
    grid-gap: 32px;
  }
`;

export const Thumb = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  cursor: pointer;
`;

export const Image = styled.div`
  width: 100%;
  height: auto;
  padding-top: 100%;

  background: url(${props => props.src}) center center no-repeat;
  background-size: cover;
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${colors.greyLighter};
  overflow: hidden;

  background-color: ${transparentize(0.2, colors.blackDeep)};

  opacity: 0;

  :hover,
  :active {
    opacity: 1;
  }

  .info__title {
    max-width: 90%;
    margin-bottom: 8px;
    font-size: 24px;
    color: ${colors.greyLighter};
    font-weight: 500;
    text-align: center;
  }

  .info__likes-wraper {
    font-size: 24px;
    margin-left: 8px;
    display: flex;
    align-items: center;

    span {
      margin-left: 4px;
    }
  }
`;
