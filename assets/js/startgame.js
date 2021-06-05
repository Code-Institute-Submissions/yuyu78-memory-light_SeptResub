function startGame() {
    // When click on the button "Let's start, the button will disappear
    document.getElementById('button-start').style.display = 'none';

    // Create a random list of number and add in the array
    let turn = 5;
    numbers =[];
    for (i = 0; i < turn; i++) {
        let randomNumber = Math.floor(Math.random() * 9);
        numbers.push(randomNumber);
    }
    console.log(numbers);
    showLights(0, turn)
}

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