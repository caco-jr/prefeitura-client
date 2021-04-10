import styled from 'styled-components';

export const Wrapper = styled.form`
  display: grid;
  width: 400px;
  max-width: 100%;
  margin: 30px auto 0;

  .c-login-button {
    margin: 26px auto 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
