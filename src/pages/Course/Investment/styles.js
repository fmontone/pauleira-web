import styled from 'styled-components';

import CustomContainer from '~/components/ContainerCustom';
import Card from '~/components/Card';

import colors from '~/styles/colors';

export const InvestmentSection = styled.section`
  width: 100%;
`;

export const Container = styled(CustomContainer)`
  padding: 0 16px 16px;

  h2 {
    margin-bottom: 16px;
  }

  .cardWrapper {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: row;
  }

  .card {
    &__title {
      height: 81px;
      display: block;
      font-size: 24px;
      font-weight: 500;
      color: ${colors.white};
      text-align: center;
      padding: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 3px 3px 0 0;

      &--installment {
        background-color: ${colors.primary};
      }

      &--cash {
        background-color: ${colors.statusInfo};
      }
    }

    &__content {
      padding: 8px;

      button {
        padding-left: 4px !important;
        padding-right: 4px !important;
      }
    }

    &__price-line {
      font-weight: 500;
      margin-bottom: 8px;
      font-size: 32px;
      text-align: center;
    }

    &__times {
      color: ${colors.greyLight};
      font-size: 16px;
    }

    &__price {
      color: ${colors.greyHeavy};
    }

    &__pay-gate {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 40px;
      margin-bottom: 8px;

      img {
        width: 128px;
        height: auto;
      }

      span {
        color: orange;
        font-weight: 500;
      }
    }
  }
`;

export const InvestmentCard = styled(Card)`
  + .card {
    margin-left: 16px;
  }
`;
