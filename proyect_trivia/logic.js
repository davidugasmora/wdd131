const animalQuestion = [
  {
    topic: "animal",
    question: "Which mammal can truly fly?",
    possibleAnswers: ["Bat", "Ostrich", "Penguin", "Chicken"],
    correctAnswer: "Bat"
  },
  {
    topic: "animal",
    question: "What is the largest land animal?",
    possibleAnswers: ["Elephant", "Giraffe", "Rhino", "Hippo"],
    correctAnswer: "Elephant"
  },
  {
    topic: "animal",
    question: "What is the fastest land animal?",
    possibleAnswers: ["Cheetah", "Horse", "Leopard", "Greyhound"],
    correctAnswer: "Cheetah"
  },
  {
    topic: "animal",
    question: "Which animal carries babies in a pouch?",
    possibleAnswers: ["Kangaroo", "Panda", "Wolf", "Deer"],
    correctAnswer: "Kangaroo"
  },
  {
    topic: "animal",
    question: "Which mammal lays eggs?",
    possibleAnswers: ["Platypus", "Dog", "Cat", "Goat"],
    correctAnswer: "Platypus"
  },
  {
    topic: "animal",
    question: "What do koalas mainly eat?",
    possibleAnswers: ["Grass", "Eucalyptus leaves", "Fruit", "Insects"],
    correctAnswer: "Eucalyptus leaves"
  },
  {
    topic: "animal",
    question: "Which big cat is largest?",
    possibleAnswers: ["Lion", "Tiger", "Leopard", "Cheetah"],
    correctAnswer: "Tiger"
  },
  {
    topic: "animal",
    question: "What do blue whales mainly eat?",
    possibleAnswers: ["Fish", "Tiny krill", "Plankton plants", "Seals"],
    correctAnswer: "Tiny krill"
  },
  {
    topic: "animal",
    question: "Which animal uses echolocation in water?",
    possibleAnswers: ["Dolphin", "Shark", "Seal", "Turtle"],
    correctAnswer: "Dolphin"
  },
  {
    topic: "animal",
    question: "Which animal can change color quickly?",
    possibleAnswers: ["Chameleon", "Tiger", "Zebra", "Gorilla"],
    correctAnswer: "Chameleon"
  },
  {
    topic: "animal",
    question: "Which bird cannot fly?",
    possibleAnswers: ["Ostrich", "Eagle", "Sparrow", "Crow"],
    correctAnswer: "Ostrich"
  },
  {
    topic: "animal",
    question: "Which animal is known for slow movement?",
    possibleAnswers: ["Sloth", "Horse", "Dog", "Rabbit"],
    correctAnswer: "Sloth"
  },
  {
    topic: "animal",
    question: "Which insect is famous for making honey?",
    possibleAnswers: ["Ant", "Honeybee", "Fly", "Mosquito"],
    correctAnswer: "Honeybee"
  },
  {
    topic: "animal",
    question: "Which animal has a long trunk?",
    possibleAnswers: ["Elephant", "Rhino", "Hippo", "Bull"],
    correctAnswer: "Elephant"
  },
  {
    topic: "animal",
    question: "Which animal is known for hibernating?",
    possibleAnswers: ["Bear", "Horse", "Cow", "Goat"],
    correctAnswer: "Bear"
  },
  {
    topic: "animal",
    question: "Which animal has black and white fur and eats bamboo?",
    possibleAnswers: ["Giant panda", "Zebra", "Skunk", "Badger"],
    correctAnswer: "Giant panda"
  },
  {
    topic: "animal",
    question: "Which animal is the largest bird?",
    possibleAnswers: ["Ostrich", "Eagle", "Pelican", "Swan"],
    correctAnswer: "Ostrich"
  },
  {
    topic: "animal",
    question: "Which animal is famous for building dams?",
    possibleAnswers: ["Beaver", "Otter", "Frog", "Duck"],
    correctAnswer: "Beaver"
  },
  {
    topic: "animal",
    question: "Which animal has eight arms?",
    possibleAnswers: ["Octopus", "Crab", "Lobster", "Starfish"],
    correctAnswer: "Octopus"
  },
  {
    topic: "animal",
    question: "Which animal is known as king of the jungle?",
    possibleAnswers: ["Lion", "Tiger", "Wolf", "Leopard"],
    correctAnswer: "Lion"
  }
];
const geographyQuestion = [
  {
    topic: "geography",
    question: "What is the largest ocean?",
    possibleAnswers: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    topic: "geography",
    question: "What is the longest river?",
    possibleAnswers: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
    correctAnswer: "Nile River"
  },
  {
    topic: "geography",
    question: "Which desert is in northern Africa?",
    possibleAnswers: ["Gobi Desert", "Sahara Desert", "Mojave Desert", "Kalahari Desert"],
    correctAnswer: "Sahara Desert"
  },
  {
    topic: "geography",
    question: "Which mountain is the highest in the world?",
    possibleAnswers: ["K2", "Mount Everest", "Kilimanjaro", "Mont Blanc"],
    correctAnswer: "Mount Everest"
  },
  {
    topic: "geography",
    question: "What is the capital of Canada?",
    possibleAnswers: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: "Ottawa"
  },
  {
    topic: "geography",
    question: "Which country is both island and continent?",
    possibleAnswers: ["Iceland", "Australia", "New Zealand", "Greenland"],
    correctAnswer: "Australia"
  },
  {
    topic: "geography",
    question: "Which country is the smallest in the world?",
    possibleAnswers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: "Vatican City"
  },
  {
    topic: "geography",
    question: "Which mountain range separates France and Spain?",
    possibleAnswers: ["Alps", "Pyrenees", "Andes", "Rockies"],
    correctAnswer: "Pyrenees"
  },
  {
    topic: "geography",
    question: "Which continent is Brazil in?",
    possibleAnswers: ["North America", "Europe", "South America", "Africa"],
    correctAnswer: "South America"
  },
  {
    topic: "geography",
    question: "Which sea lies between Europe and Africa?",
    possibleAnswers: ["Red Sea", "Mediterranean Sea", "Black Sea", "Arabian Sea"],
    correctAnswer: "Mediterranean Sea"
  },
  {
    topic: "geography",
    question: "Which country has the city of Sydney?",
    possibleAnswers: ["Australia", "United Kingdom", "United States", "South Africa"],
    correctAnswer: "Australia"
  },
  {
    topic: "geography",
    question: "Which country has the Great Pyramid of Giza?",
    possibleAnswers: ["Mexico", "Egypt", "Peru", "India"],
    correctAnswer: "Egypt"
  },
  {
    topic: "geography",
    question: "In which country is the Great Barrier Reef?",
    possibleAnswers: ["Australia", "Brazil", "Indonesia", "Philippines"],
    correctAnswer: "Australia"
  },
  {
    topic: "geography",
    question: "Which city is called the Big Apple?",
    possibleAnswers: ["Los Angeles", "London", "New York City", "Chicago"],
    correctAnswer: "New York City"
  },
  {
    topic: "geography",
    question: "Which river flows through Egypt?",
    possibleAnswers: ["Nile River", "Amazon River", "Danube River", "Volga River"],
    correctAnswer: "Nile River"
  },
  {
    topic: "geography",
    question: "Which country has Mount Fuji?",
    possibleAnswers: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    topic: "geography",
    question: "Which US state is called the Sunshine State?",
    possibleAnswers: ["Texas", "Florida", "California", "Hawaii"],
    correctAnswer: "Florida"
  },
  {
    topic: "geography",
    question: "Which river forms part of the border between USA and Mexico?",
    possibleAnswers: ["Colorado River", "Rio Grande", "Missouri River", "Columbia River"],
    correctAnswer: "Rio Grande"
  },
  {
    topic: "geography",
    question: "What is the capital of South Korea?",
    possibleAnswers: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
    correctAnswer: "Seoul"
  },
  {
    topic: "geography",
    question: "Which landlocked country is in South America?",
    possibleAnswers: ["Chile", "Bolivia", "Ecuador", "Uruguay"],
    correctAnswer: "Bolivia"
  }
];
const popCultureQuestion = [
  {
    topic: "pop culture",
    question: "Who is known as the King of Pop?",
    possibleAnswers: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
    correctAnswer: "Michael Jackson"
  },
  {
    topic: "pop culture",
    question: "Which movie series features lightsabers?",
    possibleAnswers: ["Star Wars", "Star Trek", "The Matrix", "Avatar"],
    correctAnswer: "Star Wars"
  },
  {
    topic: "pop culture",
    question: "Which superhero uses a vibranium shield?",
    possibleAnswers: ["Iron Man", "Captain America", "Spider Man", "Hulk"],
    correctAnswer: "Captain America"
  },
  {
    topic: "pop culture",
    question: "Which game features blocks and creepers?",
    possibleAnswers: ["Fortnite", "Minecraft", "Roblox", "Overwatch"],
    correctAnswer: "Minecraft"
  },
  {
    topic: "pop culture",
    question: "Which streaming service made Stranger Things?",
    possibleAnswers: ["Netflix", "Disney Plus", "Hulu", "Amazon Prime"],
    correctAnswer: "Netflix"
  },
  {
    topic: "pop culture",
    question: "In which city is Friends mostly set?",
    possibleAnswers: ["Chicago", "Los Angeles", "New York City", "Miami"],
    correctAnswer: "New York City"
  },
  {
    topic: "pop culture",
    question: "Which movie features the Infinity Gauntlet?",
    possibleAnswers: ["Avengers: Infinity War", "Guardians of the Galaxy", "Iron Man", "Thor"],
    correctAnswer: "Avengers: Infinity War"
  },
  {
    topic: "pop culture",
    question: "Which wizard fights Lord Voldemort?",
    possibleAnswers: ["Gandalf", "Harry Potter", "Merlin", "Dumbledore"],
    correctAnswer: "Harry Potter"
  },
  {
    topic: "pop culture",
    question: "Who directed Jurassic Park?",
    possibleAnswers: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Peter Jackson"],
    correctAnswer: "Steven Spielberg"
  },
  {
    topic: "pop culture",
    question: "Which hero is from Wakanda?",
    possibleAnswers: ["Doctor Strange", "Black Panther", "Captain Marvel", "Hawkeye"],
    correctAnswer: "Black Panther"
  },
  {
    topic: "pop culture",
    question: "Which series has houses like Gryffindor?",
    possibleAnswers: ["Harry Potter", "Game of Thrones", "Stranger Things", "The Witcher"],
    correctAnswer: "Harry Potter"
  },
  {
    topic: "pop culture",
    question: "Which movie has a snowman named Olaf?",
    possibleAnswers: ["Frozen", "Moana", "Coco", "Tangled"],
    correctAnswer: "Frozen"
  },
  {
    topic: "pop culture",
    question: "Which band wrote the song Hey Jude?",
    possibleAnswers: ["The Beatles", "Queen", "ABBA", "U2"],
    correctAnswer: "The Beatles"
  },
  {
    topic: "pop culture",
    question: "Which superhero is also Bruce Wayne?",
    possibleAnswers: ["Superman", "Iron Man", "Batman", "Spider Man"],
    correctAnswer: "Batman"
  },
  {
    topic: "pop culture",
    question: "Which anime features Dragon Balls?",
    possibleAnswers: ["Naruto", "Dragon Ball", "One Piece", "Bleach"],
    correctAnswer: "Dragon Ball"
  },
  {
    topic: "pop culture",
    question: "Which show has a girl named Eleven?",
    possibleAnswers: ["Stranger Things", "Riverdale", "The 100", "Teen Wolf"],
    correctAnswer: "Stranger Things"
  },
  {
    topic: "pop culture",
    question: "Which movie features a robot named WALL-E?",
    possibleAnswers: ["WALL-E", "Robots", "Big Hero 6", "Transformers"],
    correctAnswer: "WALL-E"
  },
  {
    topic: "pop culture",
    question: "Which game series is about catching creatures called Pokémon?",
    possibleAnswers: ["Pokémon", "Digimon", "Monster Hunter", "Yu-Gi-Oh"],
    correctAnswer: "Pokémon"
  },
  {
    topic: "pop culture",
    question: "Which pop star sang Bad Romance?",
    possibleAnswers: ["Lady Gaga", "Taylor Swift", "Katy Perry", "Ariana Grande"],
    correctAnswer: "Lady Gaga"
  },
  {
    topic: "pop culture",
    question: "Which movie has a ship called the Black Pearl?",
    possibleAnswers: ["Pirates of the Caribbean", "Titanic", "Master and Commander", "Moana"],
    correctAnswer: "Pirates of the Caribbean"
  }
];


let mainButton = document.querySelector("#main-logo");
let animalButton = document.querySelector(".selection-card-animal");
let geographyButton = document.querySelector(".selection-card-geography");
let popCultureButton = document.querySelector(".selection-card-popculture");

let selectionContainer = document.querySelector("#selection-container");
let questionContainer = document.querySelector("#question-container")
let scoreContainer = document.querySelector("#score-container");

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