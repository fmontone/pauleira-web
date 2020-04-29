import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
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
`;
