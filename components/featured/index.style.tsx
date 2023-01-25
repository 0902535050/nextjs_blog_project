import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 80rem;
  margin: var(--size-8) auto;

  @media (min-width: 768px) {
    h2 {
      font-size: var(--size-16);
    }
  }
`;

export const Title = styled.h2`
  font-size: var(--size-8);
  color: var(--color-grey-800);
  text-align: center;
`;
