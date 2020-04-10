import styled from 'styled-components';

import colors from '~/styles/colors';

import ContainerCustom from '~/components/ContainerCustom';
import Card from '~/components/Card';

export const Container = styled(ContainerCustom)`
  overflow: hidden;
`;

export const Timing = styled(Card)`
  max-width: 760px;
  min-width: 260px;
  margin: 0 auto;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-bottom: 32px;
  background-color: ${colors.statusInfo};

  .timing {
    &__line {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      :first-child {
        padding-bottom: 16px;
        border-bottom: 1px solid ${colors.white};
        margin-bottom: 16px;
      }
    }

    &__title {
      width: auto;
      height: 60px;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__hours {
      width: 110px;
      height: 60px;
      font-weight: 400;
      font-size: 16px;
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: center;

      span {
        display: block;

        & + span {
          margin-top: 8px;
        }
      }
    }
  }
`;
