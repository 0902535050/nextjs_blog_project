import styled from "styled-components";

export const Container = styled.article`
  width: 95%;
  max-width: 60rem;
  margin: var(--size-8) auto;
  font-size: var(--size-5);
  line-height: var(--size-8);
  background-color: var(--color-grey-100);
  border-radius: 6px;
  padding: var(--size-4);
  p {
    color: var(--color-grey-800);
  }
  @media (min-width: 768px) {
    padding: var(--size-8);
  }
`;

export const ImageArea = styled.div`
  margin: var(--size-4) auto;
  width: 100%;
  max-width: 600px;
`;

export const ContentHeader = styled.div`
  padding-bottom: var(--size-8);
  border-bottom: 8px solid var(--color-primary-100);
  margin: var(--size-4) 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  img {
    object-fit: cover;
    width: 200px;
    height: 120px;
  }

  @media (min-width: 768px) {
    margin: var(--size-8) 0;
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const Title = styled.h1`
  font-size: var(--size-8);
  color: var(--color-primary-500);
  margin: 0;
  line-height: initial;
  text-align: center;

  @media (min-width: 768px) {
    font-size: var(--size-16);
    text-align: left;
  }
`;
