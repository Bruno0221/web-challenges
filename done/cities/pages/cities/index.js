import { List, Section, ListItem, StyledLink } from "@/StyledComponents";
import { cities } from "@/lib/data";

export default function CityList() {
  return (
    <Section>
      <h1>Here's a List of Cities to visit</h1>
      <List>
        {cities.map((city) => (
          <ListItem key={city.id}>
            <StyledLink href={`/cities/${city.slug}`}>{city.name}</StyledLink>{" "}
          </ListItem>
        ))}
      </List>
    </Section>
  );
}
