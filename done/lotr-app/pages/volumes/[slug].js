import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Book() {
  const router = useRouter();
  const { slug } = router.query;

  const book = volumes.find((volume) => volume.slug === slug);

  const coverStyle = {
    display: "block",
  };

  return (
    <>
      <Head>
        <title>{book.title}</title>
      </Head>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>
        {book.books.map((book) => {
          return (
            <li key={book.ordinal}>
              <h3>{book.ordinal}</h3>
              <p>{book.title}</p>
            </li>
          );
        })}
      </ul>
      <Image
        style={coverStyle}
        height={230}
        width={140}
        src={book.cover}
        alt={book.title}
      />

      <Navigation book={book} />
    </>
  );
}
