import styled from 'styled-components';

export const Wrapper = styled.section``;

export const Title = styled.h1`
  margin: 45px 0 60px;
`;

export const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  .c-card {
    cursor: pointer;

    &__content {
      text-align: center;
      font-size: var(--text-lg);
    }
  }
`;
