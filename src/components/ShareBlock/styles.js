import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${props => props.color || 'fuchsia'};
    display: flex;
    flex-direction: center;
    align-items: center;
    justify-content: center;

    & + button {
      margin-left: 8px;
    }

    &.btn__facebook {
      background-color: #3b5998;
    }
    &.btn__twitter {
      background-color: #00aced;
    }
    &.btn__pinterest {
      background-color: #cb2027;
    }
    &.btn__linkedin {
      background-color: #007bb6;
    }
  }
`;
