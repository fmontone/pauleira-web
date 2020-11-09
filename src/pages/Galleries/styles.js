import styled from 'styled-components';
import { transparentize } from 'polished';

import PageWrapper from '~/components/PageWrapper';
import Container__Wide from '~/components/Container__Wide';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const Wrapper = styled(PageWrapper)``;

export const Container = styled(Container__Wide)`
  margin: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ThumbGrid = styled.div`
  width: 100%;
  height: auto;

  margin: 16px 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tabletLs} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
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
  padding-top: 56.25%;

  background: url(${props => props.src}) center center no-repeat;
  background-size: cover;

  border-radius: 6px;
`;

export const Info = styled.div`
  width: 100%;
  height: 32px;
  padding: 4px 0;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 0 0 6px 6px;
  overflow: hidden;

  @media ${device.desktop} {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    justify-content: center;
    align-items: center;

    opacity: 0;
    border-radius: 6px;
    background-color: ${transparentize(0.3, colors.blackDeep)};

    &:hover {
      opacity: 1;
    }
  }

  .info__title {
    flex: 1;
    font-size: 14px;
    color: ${colors.greyHeavy};
    font-weight: 500;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media ${device.desktop} {
      color: ${colors.greyLighter};
      font-size: 24px;
      text-align: center;
    }
  }

  .info__likes-wraper {
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${colors.greyHeavy};

    span {
      margin-left: 4px;
    }
  }
`;
