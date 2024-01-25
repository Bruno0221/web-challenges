import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 0;
  align-items: flex-start;
`;

const H1 = styled.h1`
  font: var(--font-headline-1);
  word-wrap: break-word;
  width: 100%;
  margin: 0;
`;

const Paragraph = styled.p`
  margin-top: 1.12rem;
  word-wrap: break-word;
`;
const Subheader = styled.h2`
  font: var(--font-headline-2);
`;

export default function Volumes() {
  return (
    <HomeSection>
      <H1>
        The Lord of <br /> the Rings
      </H1>
      <Paragraph>{introduction}</Paragraph>
      <section>
        <Subheader>All Volumes</Subheader>
        <ul>
          {volumes.map((volume) => (
            <li key={volume.id}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </HomeSection>
  );
}
