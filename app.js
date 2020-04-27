var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("questOption"));
var questionNumberText = document.getElementById("questionNumber");
var scoreText = document.getElementById("score");
var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionNumber = 0;
var availableQuestions = [];

var questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "IS this question 2?",
        choice1: "maybe",
        choice2: "yes",
        choice3: "no",
        choice4: "maybe-so",
        answer: 2
    },
    {
        question: "Are you going crazy?",
        choice1: "no",
        choice2: "maybe",
        choice3: "shoulder shrug",
        choice4: "yes",
        answer: 4
    },
    {
        question: "Inside which HTML element do we put the Javascript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "IS this question 2?",
        choice1: "maybe",
        choice2: "yes",
        choice3: "no",
        choice4: "maybe-so",
        answer: 2
    },
    {
        question: "Are you going crazy?",
        choice1: "no",
        choice2: "maybe",
        choice3: "shoulder shrug",
        choice4: "yes",
        answer: 4
    },
    {
        question: "Inside which HTML element do we put the Javascript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "IS this question 2?",
        choice1: "maybe",
        choice2: "yes",
        choice3: "no",
        choice4: "maybe-so",
        answer: 2
    },
    {
        question: "Are you going crazy?",
        choice1: "no",
        choice2: "maybe",
        choice3: "shoulder shrug",
        choice4: "yes",
        answer: 4
    },
    {
        question: "Are you going crazy?",
        choice1: "no",
        choice2: "maybe",
        choice3: "shoulder shrug",
        choice4: "yes",
        answer: 4
    }
];

var correctBonus = 10;
var maxQuestions = 10;


function startGame() {
    questionNumber = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionNumber >= maxQuestions) {
        return window.location.assign("input.html");
    }
    questionNumber++;
    questionNumberText.innerText = questionNumber + "/" + maxQuestions;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(function (choice) {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(function (choice) {
    choice.addEventListener("click", function (e) {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];

        var classToApply = "incorrect";
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = "correct";
        }

        if (classToApply === "correct") {
            incrementScore(correctBonus);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(function () {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 700);

    });
});

incrementScore = function (num) {
    score += num;
    scoreText.innerText = score;
}

startGame();









































