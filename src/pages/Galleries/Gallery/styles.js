import styled from 'styled-components';
import { transparentize } from 'polished';

import ContainerCustom from '~/components/ContainerCustom';
import htmlArticle from '~/components/htmlArticle';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${transparentize(0.12, '#1c1c1c')};
  overflow-y: scroll;

  z-index: 500;

  @media ${device.tabletLs} {
    padding: 64px;
  }
`;

export const Container = styled(ContainerCustom)`
  max-width: 760px !important;
  flex: 1;
  border-radius: 0;
  background-color: ${colors.black};

  @media ${device.tabletLs} {
    border-radius: 12px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.32);
  }

  header {
    padding: 32px 16px;
  }

  h1 {
    margin: 0 50px 8px 0;
    color: ${colors.grey};
    font-size: 32px;
    letter-spacing: -0.04em;
    line-height: 36px;
  }

  h4 {
    color: ${colors.greyHeavy};
  }

  /* Section */
  .gallery__social {
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .gallery__text {
    width: 100%;
    padding: 16px;
  }

  .gallery__nav {
    width: 100%;
    padding: 8px 0;
    border-top: 1px solid ${colors.greyMedium};
    display: flex;
    flex-direction: row;
  }
`;

export const CloseGallery = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;

  cursor: pointer;
`;

export const BigPicture = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background-color: blueviolet;

  .big-picture__wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: aquamarine;
    overflow: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ExpandPicture = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: ${transparentize(0.8, colors.black)};

  cursor: pointer;
`;

export const Article = styled(htmlArticle)`
  color: ${colors.greyMedium};
  padding: 16px;
`;

export const PostNav = styled.div`
  flex: 1;
  padding: 8px;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.greyHeavy};
  display: flex;
  flex-direction: row;
  align-items: center;

  :nth-child(1) {
    span {
      margin-right: 8px;
    }
  }

  :nth-child(2) {
    text-align: right;
    border-left: 1px solid ${colors.greyMedium};
    justify-content: flex-end;

    span {
      margin-left: 8px;
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
`;
