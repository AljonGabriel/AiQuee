Quiz Web App
This is a simple web-based quiz application built with HTML, CSS, and JavaScript. The application allows users to take a quiz by selecting a subject and grade, answering questions, and getting a score at the end.

Table of Contents
Introduction
Setup
Features
Usage
Contributing
License
Setup
To run the Quiz Web App, you can simply open the index.html file in a web browser. Ensure that you have an active internet connection, as some resources may be loaded from external sources.

Features
Choose a subject and grade to start the quiz.
Each quiz question has multiple options, and users can select the correct answer.
After answering all questions, users receive their quiz score.
Users can retry the quiz by clicking the "Try again?" button.
Usage
The Quiz Web App consists of three main sections:

User Inputs:

userNameInput: Represents the input field where the user enters their name.
Display Elements:

userNameDisplay: Displays the user's name.
chosenSubjectDisplay: Displays the selected subject for the quiz.
chosenGradeDisplay: Displays the selected grade for the quiz.
scoreDisplay: Displays the user's quiz score.
timerDisplay: Displays the remaining time for each question.
explanationDisplay: Displays the explanation for the correct answer to a question.
scopeDisplay: Displays the scope of questions for the chosen subject and grade.
Containers:

quizMechanicsContainer: Represents the container for the quiz mechanics section.
quizBodyContainer: Represents the container for the quiz questions and options.
quizScopeContainer: Represents the container for displaying the scope of questions.
quizScopeHeaderContainer: Represents the container for the header of the scope section.
quizQuestionsOptionsContainer: Represents the container for displaying quiz questions and answer options.
Buttons:

answerButton: Represents buttons for selecting answer options in each quiz question.
startGame: Represents the button to start the quiz.
nextQuestion: Represents the button to move to the next question.
Subjects and Grades:

subjects: A collection of subject elements (English, Science, Math, Filipino) with corresponding IDs.
grades: A collection of grade elements (Seven, Eight, Nine, Ten, Eleven, Twelve) with corresponding IDs.
Variables:

chosenSubject: Holds the selected subject for the quiz.
chosenGrade: Holds the selected grade for the quiz.
score: Holds the user's quiz score.
currentQuestionIndex: Keeps track of the current question index.
timer: Holds the remaining time for each question.
quizStart: Represents the status of the quiz (whether it has started or not).
The application also contains functions that handle different aspects of the quiz, such as getting the scope, shuffling questions, creating questions, handling option clicks, handling timer, and displaying the quiz result.

Contributing
Contributions to this project are welcome. You can open issues for bug reports or feature requests, and you can submit pull requests for enhancements or fixes.

License
This project is licensed under the MIT License. You can find the license details in the LICENSE file.
