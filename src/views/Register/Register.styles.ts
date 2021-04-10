import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;

  .button-redirect {
    margin: 16px auto 0;
    width: 400px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 90px 0 60px;
`;
