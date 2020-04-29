import styled from 'styled-components';

export const Container = styled.div`
  width: 148px;
  height: 48px;

  .button-like__count {
    display: none;
  }

  .button-like__total {
    display: none;
  }
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(45deg, #df00ff 0%, #31a6ef 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;
