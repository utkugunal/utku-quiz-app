const bookmarkToggle = document.querySelector('[data-js="bookmark-toggle"]');
const bookmarkColor = document.querySelector('[data-js="bookmark-white"]');

let isFirstImage = true;

bookmarkToggle.addEventListener("click", () => {
  if (isFirstImage) {
    bookmarkColor.src = "resources/bookmark_filled.png";
  } else {
    bookmarkColor.src = "resources/bookmark.png";
  }
  isFirstImage = !isFirstImage;
});

const answerToggle = document.querySelector('[data-js="answer-toggle"]');
const answerText = document.querySelector('[data-js="answer-text"]');

let isFirstState = true;

answerToggle.addEventListener("click", () => {
  if (isFirstState) {
    answerToggle.textContent = "Hide Answer";
    answerText.style.visibility = "visible";
  } else {
    answerToggle.textContent = "Show Answer";
    answerText.style.visibility = "hidden";
  }
  isFirstState = !isFirstState;
});
