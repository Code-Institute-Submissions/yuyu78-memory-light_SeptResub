function startGame() {
    // When click on the button "Let's start, the button will disappear
    document.getElementById('button-start').style.display = 'none';

    // Create a random list of number and add in the array
    let turn = Number(document.getElementById("turn").innerHTML);
    numbers =[];
    for (i = 0; i < turn; i++) {
        let randomNumber = Math.floor(Math.random() * 9);
        // Avoid the same number
        if(numbers.includes(randomNumber)) {
            i--;
        } else {
            numbers.push(randomNumber);
        }
        console.log(numbers);
    }

    // Computer shows light
    showLights(0, turn)
    
    // Player turn
    if(document.getElementById("addListenerFlag").innerHTML == "true") {
        playerFunctionality(turn);
    }

}

function playerFunctionality(turn) {
    // Get all squares
    let squares = document.querySelectorAll(".square-3x3");
    // Add click functionality for each square
    for (const element of squares) {
        element.addEventListener("click", () => {
            // Check if player choice is correct
            if (Number(element.id) == numbers[0]) {
                numbers.shift(); 
                // If player choices are all correct
                console.log(numbers);
                if(numbers.length == 0) {
                    console.log("correct");
                    // New turn and increase difficulty one by one 
                    turn = turn + 1;
                    document.getElementById("turn").innerHTML = turn.toString();
                    document.getElementById("button-start").style.display = "block";
                }
            } else {
                console.log("wrong");
                document.getElementById("button-start").style.display = "block";
            }
        });
    };
    // To ensure that the click event listeners are only added once to each button and not repeatedly
    document.getElementById("addListenerFlag").innerHTML = "false";
};

// Computer choice 
function showLights(count, turn) {
    // Show red light
    document.getElementById(numbers[count].toString()).style.backgroundColor = "red";
    i = count;
    // Make light wait 1 second before dissapearing 
    setTimeout(function() {
        document.getElementById(numbers[i].toString()).style.backgroundColor = "black";
        i++;
        if (i < turn) {
            // Display next light
            showLights(i, turn);
        }
    }, 1000);
}