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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    cursor: pointer;
    transform: translateY(0);
    transition: 0.3s all ease;

    &__content {
      text-align: center;
      font-size: var(--title-sm);
    }

    &:hover {
      box-shadow: var(--box-shadow-popout);
      transform: translateY(-6px);
    }
  }
`;
