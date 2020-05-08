import styled from 'styled-components';

import ContainerCustom from '~/components/ContainerCustom';
import Card from '~/components/Card';
import ButtonCustom from '~/components/ButtonCustom';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const Container = styled(ContainerCustom)`
  padding: 16px;
  flex: 1;

  h2 {
    margin-bottom: 32px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${colors.greyHeavy};

    @media ${device.tabletLs} {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    h4 {
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 8px;
    }

    .contact__info {
      width: 100%;
      margin-bottom: 32px;

      @media ${device.tabletLs} {
        width: auto;
        margin-right: 16px;
      }

      svg {
        margin-right: 8px;
        transform: translateY(2px);
      }
    }

    .contact__address {
      width: 100%;
      margin-bottom: 32px;

      a {
        display: block;
        margin-top: 8px;
      }

      @media ${device.tabletLs} {
        width: auto;
        margin-right: 16px;
      }
    }
  }
`;

export const GpsCard = styled(Card)`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 400px;
  flex: 1;

  @media ${device.tabletLs} {
    padding: 16px;
  }

  h3 {
    margin-bottom: 16px;
    color: ${colors.statusInfo};
  }

  h4 {
    margin-bottom: 16px;
  }

  .gps__options {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const GpsButton = styled(ButtonCustom)`
  position: relative;
  text-align: center;

  :first-child {
    margin-bottom: 16px;
  }
`;
