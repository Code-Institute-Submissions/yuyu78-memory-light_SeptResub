function startGame() {
    // When click on the button "Let's start, the button will disappear
    document.getElementById('button-start').style.display = 'none';

    // Create a random list of number and add in the array
    let turn = 3;
    numbers =[];
    for (i = 0; i < turn; i++) {
        let randomNumber = Math.floor(Math.random() * 9);
        numbers.push(randomNumber);
    }
    console.log(numbers);
    showLights(0, turn)
    
    if(document.getElementById("addListenerFlag").innerHTML == "true") {
        playerFunctionality(turn);
    }
    document.getElementById("addListenerFlag").innerHTML = "false";
}

function playerFunctionality(turn) {
    // Get all squares
    let squares = document.querySelectorAll(".square-3x3");
    for (const element of squares) {
        element.addEventListener("click", () => {
            if (Number(element.id) == numbers[0]) {
                numbers.shift(); 
                console.log(numbers);
                if(numbers.length == 0) {
                    console.log("correct");
                    document.getElementById("button-start").style.display = "block";
                }
            } else {
                console.log("wrong");
                document.getElementById("button-start").style.display = "block";
            }
        });
    };
};

function showLights(count, turn) {
    document.getElementById(numbers[count].toString()).style.backgroundColor = "red";
    i = count;
    setTimeout(function() {
        document.getElementById(numbers[i].toString()).style.backgroundColor = "black";
        i++;
        if (i < turn) {
            showLights(i, turn);
        }
    }, 1000);
}