import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, minmax(320px, 1fr));
  gap: 8px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
