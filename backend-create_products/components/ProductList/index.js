import useSWR from "swr";
import { StyledHeading, StyledList } from "./ProductList.styled";
import { StyledLink } from "../Link/Link.styled";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>Available Fishes</StyledHeading>
      <StyledList>
        {data.map(({ _id, name }) => (
          <li key={_id}>
            <StyledLink href={`/${_id}`}>{name}</StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  );
}
