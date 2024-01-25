import Link from "next/link";
import { introduction, volumes } from "../../resources/lib/data.js";
import { useRouter } from "next/router.js";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function routeToRandomBook(array) {
    const randomBook = getRandomElement(array);
    router.push(`volumes/${randomBook.slug}`);
  }

  return (
    <>
      <Link href="/">← Back Home</Link>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes:</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={() => routeToRandomBook(volumes)}>
        Get random book
      </button>
    </>
  );
}
