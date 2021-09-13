/*jshint esversion: 6 */
// Displays the historical high score
// to be used at the beginning
function initiateHighScore() {
    // Check localStorage and if there get the highest score
    let highScoreBegin = localStorage.getItem('highScore') ? JSON.parse(localStorage.getItem('highScore'))[2] : 0;

    // get the current high score
    let currentHighScore = Number(document.getElementById('result-highscore').innerHTML);

    // If the highScore is there and it's bigger than the current one set the current score
    // as the new high score.
    if (highScoreBegin && highScoreBegin > currentHighScore) {
        document.getElementById('result-highscore').innerHTML = highScoreBegin;
    }
}
// Call this function when page begins to ensure scores are started at beginning of game
initiateHighScore();

// Starts game when button clicked.
function startGame() {
    // Ensure previous game's comments are not showing at start of new turn
    document.querySelector('.wrong').style.display = 'none';
    document.querySelector('.correct').style.display = 'none';

    // When click on the button "Let's start, the button will disappear
    document.getElementById('button-start').style.display = 'none';

    // Create a random list of number and add in the array
    let turn = Number(document.getElementById("turn").innerHTML);
    numbers = [];
    for (i = 0; i < turn; i++) {
        let randomNumber = Math.floor(Math.random() * 9);
        // Avoid the same number
        if (numbers.includes(randomNumber)) {
            i--;
        } else {
            numbers.push(randomNumber);
        }
    }

    document.querySelector(".grid-3x3").style.pointerEvents = "none";

    // Computer shows light
    showLights(0, turn);

    // Player turn
    if (document.getElementById("addListenerFlag").innerHTML == "true") {
        playerFunctionality(turn);
    }

}

// human player interaction
function playerFunctionality(turn) {
    // Get all squares
    let squares = document.querySelectorAll(".square-3x3");
    // Add click functionality for each square
    for (const element of squares) {
        element.addEventListener("click", () => {
            // After the player clicks a square, it change the background color for 300ms
            element.style.backgroundColor = "#f37979ab";
            setTimeout(() => {
            element.style.backgroundColor = "black";  
            }, 300);
            // Check if player choice is correct
            if (Number(element.id) == numbers[0]) {
                numbers.shift();
                // If player choices are all correct
                if (numbers.length == 0) {
                    flashGreen();
                    // Increase score
                    let resultScore = Number(document.getElementById("result-score").innerHTML);
                    document.getElementById("result-score").innerHTML = resultScore + 1;

                    // New turn and increase difficulty one by one
                    turn = turn + 1;
                    document.getElementById("turn").innerHTML = turn.toString();

                    setTimeout(() => {
                        startGame(); 
                    }, 1000);
                }
            } else {
                // Get the current game's score
                let resultScore = Number(document.getElementById("result-score").innerHTML);
                Number(document.getElementById("result-score").innerHTML);

                // Get the current total high score
                let currentHighScore = Number(document.getElementById("result-highscore").innerHTML);

                // Compare the current game's score with the total high score and if the
                // Current game's score is bigger than the current highScore make the current
                // Score the new total high score
                if (resultScore > currentHighScore) {
                    document.getElementById("result-highscore").innerHTML = resultScore;
                    // use function to set up the new highscore in localStorage
                    setAllHighScores(resultScore);
                }

                // Show wrong message if player fails
                document.querySelector(".wrong").style.display = "block";

                // Show start button after wrong to allow to restart the game
                document.getElementById("button-start").style.cssText = "display: flex; justify-content: center";

                // Ensure the turn goes back to 0
                document.getElementById('turn').innerHTML = '2';

                // Reset the current score to 0
                document.getElementById("result-score").innerHTML = 0;

                // Show the current score
                document.getElementById("score").style.display = "block";

                // Ensure the turn goes back to 2 for the click events section
                // so that when game is restarted after a fail it begins with just two lights again.
                turn = 2;

            }
        });
    }
    // To ensure that the click event listeners are only added once to each button and not repeatedly
    document.getElementById("addListenerFlag").innerHTML = "false";
}

// Flash green when player is correct
function flashGreen() {
    let squares = document.querySelectorAll(".square-3x3");
    for (const element of squares) {
        element.style.backgroundColor = "green";
        setTimeout(() => {
            element.style.backgroundColor = "black";
        }, 320);
    }
}

// Computer choice
function showLights(count, turn) {
    // Show red light
    document.getElementById(numbers[count].toString()).style.backgroundColor = "red";
    i = count;
    // Make light wait 1 second before dissapearing
    setTimeout(function () {
        document.getElementById(numbers[i].toString()).style.backgroundColor = "black";
        i++;
        if (i < turn) {
            // Display next light
            showLights(i, turn);
        } else {
            // If player turn, make the tiles clickable again
             document.querySelector(".grid-3x3").style.pointerEvents = "auto";
        }
    }, 1000);
}