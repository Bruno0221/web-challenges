import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { StyledButton } from "../Button/Button.styled";
import ProductDetails from "../ProductDetails";
import ProductForm from "../ProductForm";
import { useState } from "react";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [editing, setEditing] = useState(false);

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  function handleToggleEditing() {
    setEditing(!editing);
  }

  async function handleEditFish(event) {
    event.preventDefault();

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
    });

    if (!response.ok) {
      console.error("response not okay", response.status);
      return;
    }

    mutate();
    event.target.reset();
    setEditing(false);
  }

  async function handleDeleteFish() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      {editing ? (
        <ProductForm
          onSubmit={handleEditFish}
          onToggleEditing={handleToggleEditing}
          editing={editing}
          formTitle="Enter New Fish Details"
        />
      ) : (
        <>
          <ProductDetails data={data} />
          <StyledButton onClick={handleToggleEditing}>Edit</StyledButton>
          <StyledButton onClick={handleDeleteFish}>Delete</StyledButton>
          {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
          <StyledLink href="/">Back to all</StyledLink>
        </>
      )}
    </ProductCard>
  );
}
