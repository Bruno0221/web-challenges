import { handleFormSubmit } from "../../utils/FormSubmit.js";

export function Form() {
  const form = document.createElement("form");
  form.classList.add("form");
  form.innerHTML = /* html */ `
          <label for="question">Your question:</label>
          <textarea
              id="question"
              rows="7"
              name="question"
              maxlength="150"
              data-js="input-question"
          ></textarea>
          <span class="form__character-count">
              <span data-js="amount-left-question"></span> characters left
          </span>
          <label for="answer">Your answer:</label>
          <textarea
              id="answer"
              rows="7"
              name="answer"
              maxlength="150"
              data-js="input-answer"
          ></textarea>
          <span class="form__character-count">
              <span data-js="amount-left-answer"></span> characters left
          </span>
          <label for="tags">Tags:</label>
          <input id="tags" type="text" name="tags" />
          <button class="form__submit-button" type="submit">Submit</button>
      `;

  const formFields = form.querySelectorAll('[data-js*="input"]');
  const counterOutputs = form.querySelectorAll("[data-js*=amount-left]");

  formFields.forEach((formField, index) => {
    counterOutputs.forEach((output) => {
      output.innerText = formField.maxLength;
    });
    formField.addEventListener("input", () => {
      const currentAmountLeft = formField.maxLength - formField.value.length;
      counterOutputs[index].innerText = currentAmountLeft;
    });
  });

  form.addEventListener("submit", handleFormSubmit);

  return form;
}
