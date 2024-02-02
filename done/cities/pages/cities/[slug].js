import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import { Section, StyledLink } from "@/StyledComponents";
import styled from "styled-components";

export default function City() {
  const router = useRouter();
  const { slug } = router.query;

  const currenCity = cities.find((city) => city.slug === slug);

  const Article = styled.article`
    display: flex;
    flex-direction: column;
    margin: 2rem;
    padding: 1rem;
  `;

  return (
    <Section>
      <Article>
        <StyledLink href="/cities">back</StyledLink>
        <h1>You are in {currenCity.name}!</h1>
        <p>
          {currenCity.name} is a city in {currenCity.country} with a popluation
          of {currenCity.population}.
        </p>
        <p>{currenCity.description}</p>
      </Article>
    </Section>
  );
}
