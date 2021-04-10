import styled from 'styled-components';

export const Wrapper = styled.section``;

export const Title = styled.h1`
  margin: 45px 0 60px;
`;

export const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;

  .c-card {
    cursor: pointer;
    transform: translateY(0);
    transition: 0.3s all ease;

    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      gap: 10px;
      font-size: var(--title-sm);
    }

    &:hover {
      box-shadow: var(--box-shadow-popout);
      transform: translateY(-6px);
    }
  }
`;
