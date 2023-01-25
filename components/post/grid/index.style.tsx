import styled from "styled-components";

export const GridContainer = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1.5rem;
    align-content: center;
  }
  li {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    background-color: var(--color-grey-800);
    text-align: center;
  }
`;
