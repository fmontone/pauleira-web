import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { transparentize } from 'polished';

import ContainerCustom from '~/components/ContainerCustom';
import ArticleCustom from '~/components/ArticleCustom';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${transparentize(0.1, colors.greyLighter)};
  overflow-y: scroll;

  z-index: 500;

  @media ${device.tabletLs} {
    padding: 64px;
  }
`;

export const Container = styled(ContainerCustom)`
  position: relative;
  width: 100%;
  max-width: 760px !important;
  flex: 1;
  border-radius: 0;
  padding: 16px;
  background-color: ${colors.greyLighter};

  @media ${device.tabletLs} {
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.32);
  }

  header {
    margin-bottom: 16px;
  }

  h1 {
    color: ${colors.black};
    font-size: 24px;
    letter-spacing: -0.04em;
    line-height: 36px;
  }

  h4 > span {
    color: ${colors.statusInfo};
    font-size: 16px;
  }

  /* Section */
  .gallery__social {
    padding: 16px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .gallery__text {
    width: 100%;
  }

  .gallery__nav {
    width: 100%;
    padding: 8px 0 0 0;
    border-top: 1px solid ${colors.greyLight};
    display: flex;
    flex-direction: row;
  }

  ${props =>
    props.zoom &&
    css`
      max-width: 100% !important;
      position: unset;
    `}
`;

export const CloseGallery = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 600;

  ${props =>
    props.zoom &&
    css`
      display: none;
    `}

  cursor: pointer;
`;

export const ClickWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BigPicture = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */

  ${props =>
    props.zoom &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000000;
    `}

  .big-picture__wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    border-radius: 12px;

    ${props =>
      props.zoom &&
      css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000000;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        overflow: auto;
      `}
  }

  img {
    width: 100%;
    object-fit: cover;

    ${props =>
      props.zoom &&
      css`
        width: unset;
        height: unset;
      `}
  }
`;

export const ExpandPicture = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: ${transparentize(0.8, colors.black)};
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${props =>
    props.zoom &&
    css`
      position: fixed;
      bottom: 32px;
      right: 32px;
    `}
`;

export const Article = styled(ArticleCustom)``;

export const PostNav = styled(Link)`
  flex: 1;
  padding: 0px;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.greyHeavy};
  display: flex;
  flex-direction: row;
  align-items: center;

  :nth-child(1) {
    span {
      margin-right: 4px;
    }
  }

  :nth-child(2) {
    text-align: right;
    border-left: 1px solid ${colors.greyLight};
    justify-content: flex-end;

    span {
      margin-left: 4px;
    }
  }

  span {
    width: 24px;
    height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    color: ${colors.statusInfo};
  }
`;
