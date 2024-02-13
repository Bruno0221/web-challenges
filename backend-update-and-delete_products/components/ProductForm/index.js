import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";

export default function ProductForm({
  onSubmit,
  onToggleEditing,
  editing,
  formTitle,
}) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>{formTitle}</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input type="number" id="price" name="price" min="0" />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
      {editing ? (
        <StyledButton type="button" onClick={onToggleEditing}>
          Cancel
        </StyledButton>
      ) : null}
    </StyledForm>
  );
}
