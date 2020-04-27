var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("questOption"));
var questionNumberText = document.getElementById("questionNumber");
var scoreText = document.getElementById("score");
var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionNumber = 0;
var availableQuestions = [];
var totalSeconds = 60 * 5;
var minutes = parseInt(totalSeconds / 60);
var seconds = parseInt(totalSeconds % 60);


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
        question: "What is a string?",
        choice1: "a string is a datatype that returns either of two values i.e. true or false.",
        choice2: 'a string stores a series of characters like "John Doe".',
        choice3: "a string is a single variable that is used to store different elements.",
        choice4: " a string is an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs.",
        answer: 2
    },
    {
        question: "What is local storage?",
        choice1: "The uhal building in Portrero Hill",
        choice2: "The platform used to create and edit HTML, CSS, and Javascript",
        choice3: "Your e-mail inbox",
        choice4: "a type of web storage that allows JavaScript sites and apps to store and access data right in the browser with no expiration date.",
        answer: 4
    },
    {
        question: "DOM is an acronym for:",
        choice1: "Document Object Model",
        choice2: "Data of Model",
        choice3: "Document Object Maker",
        choice4: "Data Object Model",
        answer: 1
    },
    {
        question: "The for statement creates a loop that is executed as long as a condition is true.",
        choice1: "maybe",
        choice2: "true",
        choice3: "false",
        choice4: "sometimes",
        answer: 2
    },
    {
        question: "What is the result of the following: Number('1') - 1 === 0;",
        choice1: "TypeError",
        choice2: "false",
        choice3: "true",
        choice4: "NaN",
        answer: 3
    },
    {
        question: "What is the result of the following: (true + false) > 2 + true;",
        choice1: "TypeError",
        choice2: "true",
        choice3: "false",
        choice4: "Nan",
        answer: 3
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the following HTML code: <h1 id='music'> Music Lover </h1> ",
        choice1: "document.getElement('music').innerHTML='I am a music lover';",
        choice2: "document.getElementById('music').innerHTML='I am a music lover';",
        choice3: "document.getId('music')='I am a music lover';",
        choice4: "document.getElementById('music').innnerHTML= I am a music lover;",
        answer: 2
    },
    {
        question: "What is the correct syntax for referring to an external script called 'app.js'?",
        choice1: "<script href='app.js'></script>",
        choice2: "<script ref='app.js'></script>",
        choice3: "none is needed as long as it's in the same folder",
        choice4: "<script src='app.js'></script>",
        answer: 4
    },
    {
        question: "Which of the following is the correct syntax to display “MusicLove” in an alert box using JavaScript",
        choice1: "alertbox('MusicLove');",
        choice2: "msg('MusicLove');",
        choice3: "msgbox('MusicLove');",
        choice4: "alert('MusicLove');",
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

function checkTime() {
    document.getElementById("timer").innerText = minutes + " minutes " + seconds + " seconds";
    if (totalSeconds <= 0) {
        setTimeout("document.game.submit(),1");
    } else {
        totalSeconds = totalSeconds - 1;
        minutes = parseInt(totalSeconds / 60);
        seconds = parseInt(totalSeconds % 60);
        setTimeout("checkTime()", 1000);
    }
}
setTimeout("checkTime()", 1000);

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









































