//user inputs
const userNameInput = document.querySelector('#inputUserName');

//display
const userNameDisplay = document.querySelector('#userName'),
  chosenSubjectDisplay = document.querySelector('#chosenSubject'),
  chosenGradeDisplay = document.querySelector('#chosenGrade'),
  scoreDisplay = document.querySelector('#score'),
  timerDisplay = document.querySelector('#timer'),
  explanationDisplay = document.querySelector('#explanationDisplay'),
  scopeDisplay = document.querySelector('#scope');

//cotainer
const quizMechanicsContainer = document.querySelector('#quizMechanicsContainer'),
  quizBodyContainer = document.querySelector('#quizBodyContainer'),
  quizScopeContainer = document.querySelector('#quizScopeContainer'),
  quizScopeHeaderContainer = document.querySelector('#quizScopeHeaderContainer'),
  quizQuestionsOptionsContainer = document.querySelector('#quizQuestionsOptionsContainer'),
  explanationContainer = document.querySelector('#explanationContainer');

//Buttons
const answerButton = document.querySelectorAll('#answerButton'),
  startGame = document.querySelector('#quizStartButton'),
  nextQuestion = document.querySelector('#nextQuestion');

//subjects
const subjects = {
  english: document.getElementById('englishSubject'),
  science: document.getElementById('scienceSubject'),
  math: document.getElementById('mathSubject'),
  filipino: document.getElementById('filipinoSubject'),
};

//grades
const grades = {
  Seven: document.getElementById('grade7'),
  Eight: document.getElementById('grade8'),
  Nine: document.getElementById('grade9'),
  Ten: document.getElementById('grade10'),
  Eleven: document.getElementById('grade11'),
  Twelve: document.getElementById('grade12'),
};

let chosenSubject,
  chosenGrade,
  score = 0,
  currentQuestionIndex = 0,
  timer = 900,
  quizStart = false;

function getScope() {
  const userName = userNameInput.value.trim(),
    selectedSubject = document.querySelector('input[name="subject"]:checked'),
    selectedGrade = document.querySelector('input[name="grade"]:checked');

  if (userName !== '' && selectedSubject && selectedGrade) {
    userNameDisplay.innerHTML = 'Name: ' + userName;
    chosenSubject = selectedSubject.value;
    chosenSubjectDisplay.innerHTML = 'Subject: ' + chosenSubject;
    chosenGrade = selectedGrade.value;
    chosenGradeDisplay.innerHTML = 'Grade: ' + chosenGrade;
  } else {
    alert('Please fill out all fields');
    return;
  }

  quizMechanicsContainer.style.display = 'none';
  quizScopeContainer.style.display = 'block';

  const scopeDescription = scopes[chosenSubject][chosenGrade].scopeDescription;
  const scopeDetails = scopes[chosenSubject][chosenGrade].scopeDetails;
  const overallScope = scopes[chosenSubject][chosenGrade].overallScope;

  // Generate the bullet points as a string using map
  const bulletPointsHTML = scopeDetails.map((detail) => `<li>${detail}</li>`).join(''); // Join the array elements into a single string

  const scopeHTML = `
  <p>${scopeDescription}</p>
  <ul><br>
    <li>${bulletPointsHTML}</li>
  </ul><br>
  <p>${overallScope}</p>
`;

  scopeDisplay.innerHTML = scopeHTML;
}

startGame.addEventListener('click', () => {
  score = 0; // Reset the score
  currentQuestionIndex = 0; // Reset the current question index
  quizQuestionsOptionsContainer.innerHTML = ''; // Clear the quiz container

  quizScopeContainer.style.display = 'none';

  // Shuffle the questions only once when the quiz starts
  const shuffledQuestions = shuffleArray(
    questions[chosenSubject][chosenGrade].map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }))
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
  const nextQuestionContainer = document.querySelector('#nextQuestionContainer');
  const answerButtons = document.querySelectorAll('.answer-button');

  if (e.target.nodeName === 'BUTTON') {
    answerButtons.forEach((button) => {
      // Disable all the answer buttons to prevent changing the answer
      button.disabled = true;
      if (button === e.target) {
        const selectedOptionText = e.target.textContent.split(') ')[1];
        const selectedOption = currentQuestion.options.find((option) => option.text === selectedOptionText);

        if (selectedOption && selectedOption.hasOwnProperty('isCorrect') && selectedOption.isCorrect) {
          score++;
          // If the selected option is correct, turn the button green
          e.target.classList.add('correct-answer');
        } else {
          // Show the correct answer when the user selects the wrong option
          explanationContainer.style.display = 'block';
          explanationDisplay.innerHTML = 'Explanation: ' + getCorrectAnswerExplanation(currentQuestion);
          // If the selected option is wrong, turn the button red
          e.target.classList.add('wrong-answer');
        }
      } else {
        const buttonOptionText = button.textContent.split(') ')[1];
        const buttonOption = currentQuestion.options.find((option) => option.text === buttonOptionText);

        if (buttonOption && buttonOption.hasOwnProperty('isCorrect') && buttonOption.isCorrect) {
          // For other buttons, if the option is correct, turn it green
          button.classList.add('correct-answer');
        } else {
          button.classList.add('disabled-answer-button');
        }
      }
    });

    // Create Next Question Button
    const nextQuestionButton = document.createElement('button');
    nextQuestionButton.setAttribute('id', 'nextQuestion');
    nextQuestionButton.classList.add('quiz-next-question-button');
    nextQuestionButton.textContent = 'Next';

    // Use appendChild to add the nextQuestionButton to the nextQuestionContainer
    nextQuestionContainer.appendChild(nextQuestionButton);

    nextQuestionButton.addEventListener('click', () => {
      // Clear visual indication and re-enable the answer buttons
      answerButtons.forEach((button) => {
        button.classList.remove('correct-answer', 'wrong-answer');
        button.disabled = false;
      });

      quizQuestionsOptionsContainer.innerHTML = '';
      currentQuestionIndex++;
      explanationDisplay.innerHTML = '';
      explanationContainer.style.display = 'none';
      createQuestions();

      // Remove the "Next Question" button
      nextQuestionContainer.removeChild(nextQuestionButton);
    });
  }
}

function getCorrectAnswer(currentQuestion) {
  // Find the correct option in the options array of the current question
  const correctOption = currentQuestion.options.find((option) => option.isCorrect);
  return correctOption.text;
}
function getCorrectAnswerExplanation(currentQuestion) {
  // Find the correct option in the options array of the current question
  const explanation = currentQuestion.options.find((option) => option.isCorrect);
  return explanation.explanation;
}

function createQuestions() {
  // Access the shuffled questions for the chosen subject and grade
  const shuffledQuestions = window.shuffledQuestions;

  if (shuffledQuestions && shuffledQuestions.length > 0 && currentQuestionIndex < shuffledQuestions.length) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    // Create a div to hold the question and options
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('quiz-question-container');

    // Display the question
    const questionElement = document.createElement('h2');
    questionElement.textContent = currentQuestionIndex + 1 + '.) ' + currentQuestion.question;
    questionDiv.appendChild(questionElement);

    quizQuestionsOptionsContainer.appendChild(questionDiv);

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('quiz-options-container');

    const letters = ['a', 'b', 'c', 'd'];
    for (let i = 0; i < currentQuestion.options.length; i++) {
      const option = currentQuestion.options[i];
      const optionItemElement = document.createElement('button');
      optionItemElement.setAttribute('id', 'answerButton');
      optionItemElement.classList.add('answer-button');
      optionItemElement.textContent = letters[i] + ') ' + option.text;

      optionItemElement.addEventListener('click', (e) => {
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
  timerDisplay.innerHTML = 'Time left: ' + formatTime(timer);

  if (currentQuestionIndex === shuffledQuestions.length) {
    clearInterval(countDownTimer);
    quizQuestionsOptionsContainer.innerHTML = '';
    quizScopeHeaderContainer.style.display = 'block';
    explanationContainer.innerHTML = '';
    getResult();
  } else if (timer === 0) {
    clearInterval(countDownTimer);
    quizQuestionsOptionsContainer.innerHTML = '';
    quizScopeHeaderContainer.style.display = 'block';
    explanationContainer.style.display = 'none';
    nextQuestionContainer.style.display = 'none';
    getResult();
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
  return formattedTime;
}

function getResult() {
  const quizResultContainer = document.querySelector('#quizResultContainer');

  const divElement = document.createElement('div');

  const spanScoreElement = document.createElement('h2');
  spanScoreElement.classList.add('quiz-result-score');
  spanScoreElement.textContent = score;

  const spanResultElement = document.createElement('span');
  spanResultElement.classList.add('quiz-result');

  score >= 10
    ? (spanResultElement.textContent = 'You Passed !')
    : (spanResultElement.textContent = 'You failed, sorry!');

  const btnElement = document.createElement('button');
  btnElement.setAttribute('id', 'retakeButton');
  btnElement.classList.add('quiz-retake-button');
  btnElement.textContent = 'Try again?';

  btnElement.addEventListener('click', () => {
    location.reload();
  });

  divElement.append(spanScoreElement, spanResultElement, btnElement);

  quizResultContainer.appendChild(divElement);

  quizResultContainer.classList.add('slide-up');
}
