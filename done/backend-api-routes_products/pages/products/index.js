import ProductList from "@/components/ProductList";
import useSWR from "swr";

export default function ProductOverview() {
  const { data: products, isLoading, error } = useSWR("/api/products");
  if (isLoading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <>
      <h2>This is a List of all Products:</h2>
      <ProductList products={products} />
    </>
  );
}
