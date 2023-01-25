import styled from "styled-components";


export const ImageArea = styled.div`
  width: 100%;
  max-height: 20rem;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: var(--size-4);
`;

export const Title = styled.h3`
  margin: var(--size-2) 0;
  font-size: var(--size-6);
`;
export const Time = styled.time`
  font-style: italic;
  color: var(--color-grey-300);
`;
export const Text = styled.p`
  line-height: var(--size-6);
`;