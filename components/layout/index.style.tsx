import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  background-color: var(--color-grey-900);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;

  ul {
    list-style: none;
    display: flex;
    align-items: baseline;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 var(--size-4);
  }

  a {
    color: var(--color-grey-100);
    font-size: var(--size-4);
    &:hover,
    :active,
    .active {
      color: var(--color-grey-200);
    }
  }

  @media (min-width: 768px) {
    ul {
      gap: 0.5rem;
    }

    a {
      font-size: var(--size-5);
    }
  }
`;

export const Logo = styled.div`
  text-transform: uppercase;
  font-size: var(--size-5);
  font-weight: bold;
  font-family: "Oswald", sans-serif;
  color: var(--color-grey-50);
  @media (min-width: 768px) {
    font-size: var(--size-8);
  }
`;

export const Content = styled.main``;
