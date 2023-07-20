const questions = {
  English: {
    Grade7: [
      {
        question:
          "Read the following sentence and identify the verb tense: 'She will be singing at the concert tomorrow.'",
        options: [
          { text: "a) Past tense", isCorrect: false },
          { text: "b) Present tense", isCorrect: false },
          { text: "c) Future tense", isCorrect: true },
          { text: "d) Present continuous tense", isCorrect: false },
        ],
      },
      // Add more grade 7 English questions here if needed
    ],
    gradeEight: [
      {
        question: "Who painted the Mona Lisa?",
        options: [
          { text: "a) Leonardo da Vinci", isCorrect: true },
          { text: "b) Vincent van Gogh", isCorrect: false },
          { text: "c) Pablo Picasso", isCorrect: false },
          { text: "d) Michelangelo", isCorrect: false },
        ],
      },
      // Add more grade 8 English questions here if needed
    ],
  },
  Science: {
    gradeSeven: [
      {
        question: "What planet is known as the 'Red Planet'?",
        options: [
          { text: "a) Mars", isCorrect: true },
          { text: "b) Venus", isCorrect: false },
          { text: "c) Jupiter", isCorrect: false },
          { text: "d) Saturn", isCorrect: false },
        ],
      },
      // Add more grade 7 Science questions here if needed
    ],
    gradeEight: [
      {
        question: "What is the chemical symbol for water?",
        options: [
          { text: "a) H2O", isCorrect: true },
          { text: "b) CO2", isCorrect: false },
          { text: "c) O2", isCorrect: false },
          { text: "d) NaCl", isCorrect: false },
        ],
      },
      // Add more grade 8 Science questions here if needed
    ],
  },
  // Add more subjects (e.g., Math, Filipino, etc.) and grade levels if needed
};

const quizContainer = document.querySelector("#quizBody");
const userNameInput = document.querySelector("#inputUserName");

const userNameDisplay = document.querySelector("#userName");
const chosenSubjectDisplay = document.querySelector("#chosenSubject");
const chosenGradeDisplay = document.querySelector("#chosenGrade");

const subjects = {
  english: document.getElementById("englishSubject"),
  science: document.getElementById("scienceSubject"),
  math: document.getElementById("mathSubject"),
  filipino: document.getElementById("filipinoSubject"),
};

const grades = {
  gradeSeven: document.getElementById("grade7"),
  gradeEight: document.getElementById("grade8"),
  gradeNine: document.getElementById("grade9"),
  gradeTen: document.getElementById("grade10"),
  gradeEleven: document.getElementById("grade11"),
  gradeTwelve: document.getElementById("grade12"),
};

const startGame = document.querySelector("#quizStartQuiz");

let quizStart = false;
let chosenSubject;
let chosenGrade;

startGame.addEventListener("click", () => {
  userNameDisplay.innerHTML = "Name: " + userNameInput.value;

  const selectedSubject = document.querySelector(
    'input[name="subject"]:checked'
  );

  if (selectedSubject) {
    chosenSubject = selectedSubject.value;
    chosenSubjectDisplay.innerHTML = "Subject :" + chosenSubject;
  }

  const selectedGrade = document.querySelector('input[name="grade"]:checked');

  if (selectedGrade) {
    chosenGrade = selectedGrade.value;
    chosenGradeDisplay.innerHTML = "Grade :" + chosenGrade;
  }

  createQuestions();
});

function createQuestions() {
  // Access the questions for the chosen subject and grade
  const questionsForGrade = questions[chosenSubject][chosenGrade];

  // Assuming you want to display the first question from the array
  if (questionsForGrade && questionsForGrade.length > 0) {
    const questionElement = document.createElement("h2");
    questionElement.innerHTML = questionsForGrade[0].question;
    quizContainer.appendChild(questionElement);

    // Display the options
    const optionsList = document.createElement("ul");
    for (const option of questionsForGrade[0].options) {
      const optionItem = document.createElement("li");
      optionItem.innerHTML = option.text;
      optionsList.appendChild(optionItem);
    }
    quizContainer.appendChild(optionsList);
  } else {
    // Handle the case when there are no questions available for the selected subject and grade
    const noQuestionsElement = document.createElement("p");
    noQuestionsElement.innerHTML =
      "No questions available for the selected subject and grade.";
    quizContainer.appendChild(noQuestionsElement);
  }
}
