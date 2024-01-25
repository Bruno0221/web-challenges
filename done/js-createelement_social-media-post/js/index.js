console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const addChild = (parent, child) => parent.appendChild(child);

function createNewElement(
  newElementName,
  className,
  textContent,
  elementType,
  dataAttributeName,
  dataAttributeValue
) {
  const newElement = document.createElement(newElementName);
  newElement.classList.add(className);
  newElement.textContent = textContent;
  newElement.type = elementType;
  newElement.setAttribute(dataAttributeName, dataAttributeValue);

  return newElement;
}

function newPost() {
  const body = document.querySelector('[data-js="body"]');
  const newArticle = createNewElement("article", "post");
  const newParagraph = createNewElement(
    "p",
    "post__content",
    "This is a new Post."
  );
  const newFooter = createNewElement("footer", "post__footer");
  const newSpan = createNewElement("span", "post__username", "@username");
  const newButton = createNewElement(
    "button",
    "post__button",
    "♥ Like",
    "button",
    "data-js",
    "like-button2"
  );
  addChild(body, newArticle);
  addChild(newArticle, newParagraph);
  addChild(newArticle, newFooter);
  addChild(newFooter, newSpan);
  addChild(newFooter, newButton);
  const likeButton2 = document.querySelector('[data-js="like-button2"]');
  likeButton2.addEventListener("click", handleLikeButtonClick);
}

newPost();
