const form = document.querySelector('[data-js="form"]');

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
        >
        <img
            src="resources/bookmark.png"
            alt="bookmark-white"
            class="question-card__bookmark"
        />
        </button>
        <p class="question-card__question-text">${newQuestion}</p>
        <button class="question-card__show-button">
        Show Answer
        </button>
        <p class="question-card__answer-text hidden">
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
  event.target.elements.addQuestion.focus();
  event.target.reset();
});
