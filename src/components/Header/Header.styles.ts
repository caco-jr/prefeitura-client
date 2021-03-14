import styled from 'styled-components';

export const Wrapper = styled.header`
  background: var(--tertiary-color);
`;

export const Box = styled.section`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: var(--title-md);
  cursor: pointer;
`;
