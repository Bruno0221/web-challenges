import styled from "styled-components";
import Link from "next/link";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 1rem;
`;

export const ListItem = styled.li`
  padding: 0.5rem;
`;
