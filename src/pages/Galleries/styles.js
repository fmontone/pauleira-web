import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PageWrapper from '~/components/PageWrapper';
import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';

import colors from '~/styles/colors';

export const Wrapper = styled(PageWrapper)``;

export const Container = styled(ContainerCustom)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Settings = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const BlockOne = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropDownWrapper = styled.div`
  select {
    width: 250px;
    height: 32px;
    font-family: inherit;
    font-size: 16px;
    border: 1px solid ${colors.greyLight};
  }
`;

export const DisplaySettings = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const BlockTwo = styled.div`
  width: 100%;
  height: 26px;
  margin-top: 32px;
  margin-bottom: 32px;
  border-top: 1px solid ${colors.greyLight};
  display: flex;
`;

export const TabsCustom = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TabOption = styled.div`
  height: 26px;
  position: relative;

  button {
    height: 26px;
    padding-top: 8px;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.grey};
    background-color: transparent;

    cursor: pointer;

    &.active {
      color: ${colors.black};
    }
  }

  :not(:first-child) {
    margin-left: 16px;
  }

  span {
    position: absolute;
    width: 100%;
    height: 2px;
    top: -1px;
    left: 0;
    background: transparent;

    transition: all 0.2s ease-in;

    &.active {
      background-color: ${colors.terceary};
    }
  }
`;

export const ImageGallery = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${props =>
    props.settingsType === 'block' ? '1fr 1fr 1fr' : '1fr'};
  column-gap: 8px;
  row-gap: 8px;
`;

export const GalleryLink = styled(Link)`
  width: 100%;
  padding-top: 75%;
  position: relative;
  overflow: hidden;
  background-color: fuchsia;

  transition: all 0.2s ease-out;

  img {
    position: absolute;
    min-height: 100%;
    width: 120%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const ButtonLoadMore = styled(ButtonCustom)`
  margin: 32px 0;
`;
