import Link from "next/link";
import useSWR from "swr";

export default function ProductList() {
  const { data: products, isLoading, error } = useSWR("/api/products");
  if (isLoading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  console.log(products);

  return (
    <ul>
      {products.map(({ id, name }) => (
        <li key={id}>
          <Link href={`/products/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
