export default function ProductDetails({ data }) {
  return (
    <>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
    </>
  );
}
