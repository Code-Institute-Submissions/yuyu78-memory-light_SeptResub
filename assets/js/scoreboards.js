// Display the three highest score in the page score.html
window.onload = getThreeHighScores;
function getThreeHighScores() {
    let firstHighscore = JSON.parse(localStorage.getItem('highScore'))[2];
    document.getElementById("first-highscore").innerHTML = firstHighscore;

    let secondHighscore = JSON.parse(localStorage.getItem('highScore'))[1];
    document.getElementById("second-highscore").innerHTML = secondHighscore;

    let thirdHighscore = JSON.parse(localStorage.getItem('highScore'))[0];
    document.getElementById("third-highscore").innerHTML = thirdHighscore;
}
