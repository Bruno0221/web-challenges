import { StyledButton } from "../Button/Button.styled";
import { mutate } from "swr";
import { StyledForm, StyledHeading, StyledLabel } from "./CommentForm.styled";
import { useRouter } from "next/router";

export default function CommentForm() {
  const router = useRouter();
  const { id } = router.query;

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    console.log(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate(`/api/products/${id}`);
    }

    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a new Review:</StyledHeading>
      <StyledLabel htmlFor="title">
        Title:
        <input type="text" id="title" name="title" />
      </StyledLabel>
      <StyledLabel htmlFor="text">
        Comment:
        <textarea type="text" id="text" name="text"></textarea>
      </StyledLabel>
      <StyledLabel htmlFor="rating">
        Rating:
        <input
          type="number"
          id="rating"
          name="rating"
          min="0"
          max="5"
          placeholder="1-5"
        />
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
