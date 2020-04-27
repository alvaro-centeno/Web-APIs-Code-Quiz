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
    }
];

