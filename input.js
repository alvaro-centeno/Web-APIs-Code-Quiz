var username = document.getElementById("username");
var save = document.getElementById("save");
var finalScore = document.getElementById("finalScore")
var mostRecentScore = localStorage.getItem('mostRecentScore');

var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
var maxHigh = 10;

finalScore.innerText = mostRecentScore;

username, addEventListener("keyup", function () {
    console.log(username.value);
    save.disabled = !username.value;

})
saveHighScore = function (e) {
    console.log("clicked save");
    e.preventDefault();

    var score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);

    highScores.sort(function (a, b) {
        return b.score - a.score;
    })

    highScores.splice(10);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("index.html");
};








