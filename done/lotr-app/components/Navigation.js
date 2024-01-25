import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function Navigation({ book }) {
  const index = volumes.indexOf(book);

  return (
    <>
      {index > 0 && (
        <Link href={`/volumes/${volumes[index - 1].slug}`}>previous</Link>
      )}
      {index < volumes.length - 1 ? (
        <Link href={`/volumes/${volumes[index + 1].slug}`}>next</Link>
      ) : (
        <span>You shall not pass!</span>
      )}
    </>
  );
}
