import styled from 'styled-components';

import ContainerCusom from '~/components/ContainerCustom';

import colors from '~/styles/colors';

export const Container = styled(ContainerCusom)`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    width: 60%;
  }

  span {
    display: block;
    color: ${colors.statusDanger};
  }
`;
