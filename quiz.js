//user inputs
const userNameInput = document.querySelector("#inputUserName");

//display
const userNameDisplay = document.querySelector("#userName"),
  chosenSubjectDisplay = document.querySelector("#chosenSubject"),
  chosenGradeDisplay = document.querySelector("#chosenGrade"),
  scoreDisplay = document.querySelector("#score"),
  timerDisplay = document.querySelector("#timer"),
  explanationDisplay = document.querySelector("#explanationDisplay"),
  scopeDisplay = document.querySelector("#scope");

//container
const 
  quizBodyContainer = document.querySelector("#quizBodyContainer"),
  quizScopeContainer = document.querySelector("#quizScopeContainer"),
  quizScopeHeaderContainer = document.querySelector(
    "#quizScopeHeaderContainer",
  ),
  quizQuestionsOptionsContainer = document.querySelector(
    "#quizQuestionsOptionsContainer",
  ),
  explanationContainer = document.querySelector("#explanationContainer");

//Buttons
const answerButton = document.querySelectorAll("#answerButton"),
  startGame = document.querySelector("#quizStartButton"),
  nextQuestion = document.querySelector("#nextQuestion");

//subjects

const subjects = document.getElementById("subjects"), grades = document.getElementById("gradeLevel");

let chosenSubject,
  chosenGrade,
  score = 0,
  currentQuestionIndex = 0,
  timer = 900,
  quizStart = false;

function getScope() {
  const userName = userNameInput.value.trim(),
    selectedSubject = subjects.value,
    selectedGrade = grades.value;

  console.log("Selected Subject :" + selectedSubject);

  if (userName && selectedSubject !== "" && selectedGrade) {
    userNameDisplay.innerHTML = userName;
    chosenSubject = selectedSubject;
    chosenSubjectDisplay.innerHTML = chosenSubject;
    chosenGrade = selectedGrade;
    chosenGradeDisplay.innerHTML = chosenGrade;
  } else {
    alert("Please fill out all fields");
    return;
  }

  quizMechanicsContainer.style.display = "none";
  quizScopeContainer.style.display = "block";

  const scopeDescription = scopes[chosenSubject][chosenGrade].scopeDescription;
  const scopeDetails = scopes[chosenSubject][chosenGrade].scopeDetails;
  const overallScope = scopes[chosenSubject][chosenGrade].overallScope;

  // Generate the bullet points as a string using map
  const bulletPointsHTML = scopeDetails
    .map((detail) => `<li>${detail}</li>`)
    .join(""); // Join the array elements into a single string

  const scopeHTML = `
  <p>${scopeDescription}</p>
  <ul><br>
    <li>${bulletPointsHTML}</li>
  </ul><br>
  <p>${overallScope}</p>
`;

  scopeDisplay.innerHTML = scopeHTML;
}

startGame.addEventListener("click", () => {
  score = 0; // Reset the score
  currentQuestionIndex = 0; // Reset the current question index
  quizQuestionsOptionsContainer.innerHTML = ""; // Clear the quiz container

  quizScopeContainer.style.display = "none";
  quizScopeHeaderContainer.style.display = "block";

  // Shuffle the questions only once when the quiz starts
  const shuffledQuestions = shuffleArray(
    questions[chosenSubject][chosenGrade].map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    })),
  );

  // Save the shuffled questions in a global variable to use throughout the quiz
  window.shuffledQuestions = shuffledQuestions;
  countDownTimer = setInterval(countDownTimer, 600);
  createQuestions(); // Create the first question
});

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function handleOptionClick(currentQuestion, e) {
  const nextQuestionContainer = document.querySelector(
    "#nextQuestionContainer",
  );
  const answerButtons = document.querySelectorAll(".answer-button");

  if (e.target.nodeName === "BUTTON") {
    answerButtons.forEach((button) => {
      // Disable all the answer buttons to prevent changing the answer
      button.disabled = true;
      if (button === e.target) {
        const selectedOptionText = e.target.textContent.split(") ")[1];
        const selectedOption = currentQuestion.options.find(
          (option) => option.text === selectedOptionText,
        );

        if (
          selectedOption &&
          selectedOption.hasOwnProperty("isCorrect") &&
          selectedOption.isCorrect
        ) {
          score++;
          // If the selected option is correct, turn the button green
          e.target.classList.add("border-success", "border-3");
        } else {
          // Show the correct answer when the user selects the wrong option
          explanationContainer.style.display = "block";
          explanationDisplay.classList.add("text-danger", "my-3");
          explanationDisplay.innerHTML =
            "Explanation: " + getCorrectAnswerExplanation(currentQuestion);
          // If the selected option is wrong, turn the button red
          e.target.classList.add("border-danger", "border-3");
        }
      } else {
        const buttonOptionText = button.textContent.split(") ")[1];
        const buttonOption = currentQuestion.options.find(
          (option) => option.text === buttonOptionText,
        );

        if (
          buttonOption &&
          buttonOption.hasOwnProperty("isCorrect") &&
          buttonOption.isCorrect
        ) {
          // For other buttons, if the option is correct, turn it green
          button.classList.add("border-success", "border-3");
        } else {
          button.classList.add("disabled-answer-button");
        }
      }
    });

    // Create Next Question Button
    const nextQuestionButton = document.createElement("button");
    nextQuestionButton.setAttribute("id", "nextQuestion");
    nextQuestionButton.classList.add("btn", "btn-outline-secondary", "my-3");
    nextQuestionButton.textContent = "Next";

    // Use appendChild to add the nextQuestionButton to the nextQuestionContainer
    nextQuestionContainer.appendChild(nextQuestionButton);

    nextQuestionButton.addEventListener("click", () => {
      // Clear visual indication and re-enable the answer buttons
      answerButtons.forEach((button) => {
        button.classList.remove("is-valid", "is-invalid");
        button.disabled = false;
      });

      quizQuestionsOptionsContainer.innerHTML = "";
      currentQuestionIndex++;
      explanationDisplay.innerHTML = "";
      explanationContainer.style.display = "none";
      createQuestions();

      // Remove the "Next Question" button
      nextQuestionContainer.removeChild(nextQuestionButton);
    });
  }
}

function getCorrectAnswer(currentQuestion) {
  // Find the correct option in the options array of the current question
  const correctOption = currentQuestion.options.find(
    (option) => option.isCorrect,
  );
  return correctOption.text;
}
function getCorrectAnswerExplanation(currentQuestion) {
  // Find the correct option in the options array of the current question
  const explanation = currentQuestion.options.find(
    (option) => option.isCorrect,
  );
  return explanation.explanation;
}

function createQuestions() {
  // Access the shuffled questions for the chosen subject and grade
  const shuffledQuestions = window.shuffledQuestions;

  if (
    shuffledQuestions &&
    shuffledQuestions.length > 0 &&
    currentQuestionIndex < shuffledQuestions.length
  ) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    // Create a div to hold the question and options
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("quiz-question-container");

    // Display the question
    const questionElement = document.createElement("h3");
    questionElement.classList.add("my-3");
    questionElement.textContent =
      currentQuestionIndex + 1 + ".) " + currentQuestion.question;
    questionDiv.appendChild(questionElement);

    quizQuestionsOptionsContainer.appendChild(questionDiv);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("quiz-options-container");

    const letters = ["a", "b", "c", "d"];
    for (let i = 0; i < currentQuestion.options.length; i++) {
      const option = currentQuestion.options[i];
      const optionItemElement = document.createElement("button");
      optionItemElement.setAttribute("id", "answerButton");
      optionItemElement.classList.add(
        "btn",
        "btn-outline-primary",
        "m-1",
        "answer-button",
        "d-block"
      );
      optionItemElement.textContent = letters[i] + ") " + option.text;

      optionItemElement.addEventListener("click", (e) => {
        handleOptionClick(currentQuestion, e);
      });
      optionsDiv.appendChild(optionItemElement);
    }

    quizQuestionsOptionsContainer.appendChild(optionsDiv);

    // Add the question div to the quiz container
  }
}

function countDownTimer() {
  timer--;
  timerDisplay.innerHTML = formatTime(timer);

  if (currentQuestionIndex === shuffledQuestions.length) {
    clearInterval(countDownTimer);
    quizQuestionsOptionsContainer.innerHTML = "";
    quizScopeHeaderContainer.style.display = "none";
    explanationContainer.innerHTML = "";
    getResult();
  } else if (timer === 0) {
    clearInterval(countDownTimer);
    quizQuestionsOptionsContainer.innerHTML = "";
    quizScopeHeaderContainer.style.display = "none";
    explanationContainer.style.display = "none";
    nextQuestionContainer.style.display = "none";
    getResult();
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;
  const formattedTime = `${minutes
    .toString()
    .padStart(2, "0")}:${secondsRemaining.toString().padStart(2, "0")}`;
  return formattedTime;
}

function getResult() {
  const resultDisplay = document.getElementById("score");
  const resultContainer = document.getElementById("resultContainer");
  const feedbackDisplay = document.getElementById("feedback");

  resultContainer.style.display = "block";

  resultDisplay.textContent = score;

  score >= 10
    ? (feedbackDisplay.textContent = "You Passed !")
    : (feedbackDisplay.textContent = "You failed, sorry!");
}
