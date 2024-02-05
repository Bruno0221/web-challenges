import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, isLoading, error } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>page not found</p>;
  }

  const { name, description, price, currency, category } = product;

  return (
    <>
      <Link href={"/products"}>go Back</Link>
      <h2>{name}</h2>
      <p>description: {description}</p>
      <p>
        price: {price} {currency}
      </p>
      <p>category: {category}</p>
    </>
  );
}
