import { animalQuestion, geographyQuestion, popCultureQuestion } from "./questions.js";

let mainButton = document.querySelector("#main-logo");
let animalButton = document.querySelector(".selection-card-animal");
let geographyButton = document.querySelector(".selection-card-geography");
let popCultureButton = document.querySelector(".selection-card-popculture");

let selectionContainer = document.querySelector("#selection-container");
let questionContainer = document.querySelector("#question-container")

mainButton.addEventListener("click", changePage);
animalButton.addEventListener("click", changePage);
geographyButton.addEventListener("click", changePage);
popCultureButton.addEventListener("click", changePage);

questionContainer.addEventListener("click", showSelectedAnswer);
questionContainer.addEventListener("click", showAndCountResults)

function shuffleArray(array) {
  let shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function answerTemplate(answers) {

    let html = ``
    
    let shuffledAnswers = shuffleArray(answers)

    shuffledAnswers.forEach(answer => {
        html += `<button type="button" class="answer">${answer}</button>`
    });

    return html
}

function questionTemplate(question) {
    return `<article class="question-card" data-correct="${question.correctAnswer}">
                <p class="question-text">${question.question}</p>
                ${answerTemplate(question.possibleAnswers)}
            </article>`
}

function htmlQuestions(questions, title) {
    let html = `<h1 id="question-title">Let the ${title} quiz begin!</h1>`
    let shuffledQuestions = shuffleArray(questions)
    
    shuffledQuestions.slice(0, 5).forEach(question => {
        html += `${questionTemplate(question)}`
    });

    html += `<button id="submit">Submit</button>`

    return html
}

function showQuestions(html) {
  selectionContainer.style.display = "none";
  questionContainer.style.display = "flex";
  questionContainer.innerHTML = html;
}

function changePage(event) {
    const target = event.currentTarget;

    switch (true) {
        case target.matches("#main-logo"):
            questionContainer.style.display = "none";
            selectionContainer.style.display = "grid";
            break;
        case target.matches(".selection-card-animal"):
            showQuestions(htmlQuestions(animalQuestion, "animal"))
            break;
        case target.matches(".selection-card-geography"):
            showQuestions(htmlQuestions(geographyQuestion, "geography"))
            break;
        case target.matches(".selection-card-popculture"):
            showQuestions(htmlQuestions(popCultureQuestion, "pop culture"))
            break;
    }
}

function showSelectedAnswer(event) {

  if (!event.target.classList.contains("answer")) return;

  let questionCard = event.target.closest(".question-card");
  if (!questionCard) return;

  const allAnswers = questionCard.querySelectorAll(".answer");
  allAnswers.forEach(button => button.classList.remove("selected"));

  event.target.classList.add("selected");
}

function showAndCountResults(event) {
  if (event.target.id !== "submit") return;

  let questionCards = questionContainer.querySelectorAll(".question-card");
  let score = 0;

  questionCards.forEach(card => {
    let correct = card.dataset.correct;
    let selected = card.querySelector(".answer.selected");

    let answerButtons = card.querySelectorAll(".answer");

    answerButtons.forEach(btn => {

      btn.classList.remove("correct", "wrong");

      if (btn.textContent === correct) {
        btn.classList.add("correct");
      }
    });

    if (selected) {
      if (selected.textContent === correct) {
        score++;
        selected.classList.add("correct");
      } else {
        selected.classList.add("wrong");
      }
    }
  })

  if (event.target.id === "submit") {
      event.target.disabled = true;   // prevents clicking again
      event.target.style.opacity = "0.5";  // optional visual feedback
      event.target.style.cursor = "not-allowed"; // optional
  }

  showScore(score, questionCards.length);
}

function showScore(score, total) {
  const scoreHTML = `
    <div id="score-box">
      <h2>Your Score: ${score} / ${total}</h2>
      <p>Click on the Quizzes logo to try again!</p>
    </div>
  `;

  questionContainer.innerHTML += scoreHTML;
}