import Link from "next/link";

export default function ProductList({ products }) {
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
