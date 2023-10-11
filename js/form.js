const form = document.querySelector('[data-js="form"]');

// Code for the counter

const textareaQuestion = document.querySelector('[data-js="add-question"]');
const counterQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]'
);
textareaQuestion.addEventListener("input", (event1) => {
  counterQuestion.textContent = 150 - event1.target.value.length;
});

const textareaAnswer = document.querySelector('[data-js="add-answer"]');
const counterAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);
textareaAnswer.addEventListener("input", (event2) => {
  counterAnswer.textContent = 150 - event2.target.value.length;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newEntry = Object.fromEntries(formData);

  console.log(newEntry);

  const newQuestion = newEntry.addQuestion;
  const newAnswer = newEntry.addAnswer;
  const newTag = newEntry.addTag;

  //   console.log(newQuestion);
  //   console.log(newAnswer);
  //   console.log(newTag);

  // Code to add the new card on the add-page
  const newCards = document.createElement("section");
  newCards.classList.add("questions");
  const main = document.querySelector('[data-js="main"]');
  main.append(newCards);
  newCards.innerHTML = `
  <div class="question-card">
        <button
            class="question-card__bookmark-holder"
            data-js="new-bookmark-toggle"
        >
        <img
            src="resources/bookmark.png"
            alt="bookmark-white"
            class="question-card__bookmark"
            data-js="new-bookmark-white"
        />
        </button>
        <p class="question-card__question-text">${newQuestion}</p>
        <button class="question-card__show-button" data-js="new-answer-toggle">
        Show Answer
        </button>
        <p class="question-card__answer-text hidden" data-js="new-answer-text">
        ${newAnswer}
        </p>
        <ul class="question-card__hashtag-list">
            <li class="question-card__hashtag-item question-card__css-tag">
            #${newTag}
            </li>
        </ul>
    </div>
  `;

  // code for the state of the form after submit

  counterQuestion.textContent = "150";
  counterAnswer.textContent = "150";
  event.target.elements.addQuestion.focus();
  event.target.reset();

  // code for bonus 1 (adding functionality yo bookmark and answer buttons) - the code below works only for the first card added.
  const newBookmarkToggle = document.querySelector(
    '[data-js="new-bookmark-toggle"]'
  );
  const newBookmarkColor = document.querySelector(
    '[data-js="new-bookmark-white"]'
  );

  // console.log(newBookmarkToggle);
  let isNewFirstImage = true;

  newBookmarkToggle.addEventListener("click", () => {
    if (isNewFirstImage) {
      newBookmarkColor.src = "resources/bookmark_filled.png";
    } else {
      newBookmarkColor.src = "resources/bookmark.png";
    }
    isNewFirstImage = !isNewFirstImage;
  });

  const newAnswerToggle = document.querySelector(
    '[data-js="new-answer-toggle"]'
  );
  const newAnswerText = document.querySelector('[data-js="new-answer-text"]');

  let isNewFirstState = true;

  newAnswerToggle.addEventListener("click", () => {
    if (isNewFirstState) {
      newAnswerToggle.textContent = "Hide Answer";
      newAnswerText.style.visibility = "visible";
    } else {
      newAnswerToggle.textContent = "Show Answer";
      newAnswerText.style.visibility = "hidden";
    }
    isNewFirstState = !isNewFirstState;
  });
});
