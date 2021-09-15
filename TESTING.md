# TESTING Memory Light
[README file](https://github.com/yuyu78/memory-light/blob/master/README.md)   

## Table of contents

1. [Testing User Stories](#testing-user-stories)  

2. [Manual Testing](#manual-testing)  

3. [Bugs](#bugs)  

4. [Validators](#validators)

5. [Lighthouse Testing](#lighthouse-testing)

## Testing User Stories <a name="testing-user-stories"></a>

1. **As a first-time player, I want to be able to play the game on different device**  
    Used the site https://responsivedesignchecker.com/ to check if the website is responsive in all devices.  

2. **As a first-time player, I want to access the instruction so I can have an easy understanding of the rule**  
    * The player can click on the first page the instruction button or the navbar before playing.  
    * The explanation is simple and clear. At the end of the instruction, the player can click on the button "play" to start the game. 

3. **As a first-time player, I want a good and simple visual so it makes the game more enjoyable**  
    The design of the game is very simple. 
    * The background is black and the grid, font color are white so it gives a great contrast between colors and makes the visual better.    
    * When the user plays the game, it will display a sequence of red color. A flashy red color is chosen to also give a good contrast.

4. **As a first-time player, I want to be able to turn off the sound so I can play in a quiet place**  
    The sound effect is a feature Left to Implement in the future, for the moment, there is no sound in the game.  

5. **As a first-time player, I want to play the game with good interaction so there is no slowness and the page will load quickly**
    * When the user hovers all the buttons, including the social media link, menue and name of the game, the color will turn red.
    * Every time the user succeeds in the game, it will add one point in the current score and will appear a correct message in green color "Correct! Click the button again to continue". 
    * If the user failed the game, it will reset the current score to 0 and will appear a message in red color "Wrong! Click the button to Start Again". 

6. **As a returning player, I want the game become mmore difficult so I can improve my memory skills**
    * The game will start with a sequence of two lights. Each time the player succeeds the round, one more light will be added to the sequence so it will become progressively longer and more difficult to remember.  
    This is a good exercise to improve memory skills. 

7. **As a returning player, I want to save my high score on a stats board so I can check my progress**
    * Due to the lack of time, the score page which will show the three highest scores of the player will be a feature implemented in the future.  
    For the moment, only one high score will be shown on the page before the player starts the game, below the grid with the current score. 
    * The high score will be saved in the storage so if the player reloads the page, it will still show the high score. 

8. **As a returning player, I want to select a different grid so I can develop my memory skills**
    *  This is a future feature to implement the grids of 2 X 2 and 4 X 4 so that the player can vary the level of difficulty.

9. **As a returning player, I want to contact the business so I can ask question or give feedback**
    * The player can access the contact page to fill the form. All the inputs are required to submit the form.

## Manual testing <a name="manual-testing"></a>

## Bugs <a name="bugs"></a>
* Issue with the footer: it doesn´t stay on the bottom of the page.   
![issue space bottom footer](https://user-images.githubusercontent.com/76018052/121042792-eb8aa880-c7ab-11eb-84d0-812ea2f4dae3.PNG)  

    To fix the problem check the solution [here](https://dev.to/nehalahmadkhan/how-to-make-footer-stick-to-bottom-of-web-page-3i14) and add in CSS:   
    *body{*  
        *min-height: 100vh;*  
        *display: flex;*  
        *flex-direction: column;*  
    *}*  
    *footer{*  
        *margin-top: auto;*  
    *}*  

* Sometimes the light is selected twice in the same square but it looks like it is selected once so it might be confusing visually for the user.  
To avoid that, in the function startGame(), add the code:  
*if(numbers.includes(randomNumber)) {*  
            *i--;*  
        *} else {*  
            *numbers.push(randomNumber);*  
        *}*  

* The light generated from the computer will show in the devtools as a list of numbers in an array.  
Each time the player guesses the first light selected by the computer, the number guessed will be removed from the array because I added ***numbers.shift();*** in the if condition inside the ***function playerFunctionality***.   
In the screenshot below, the computer chose [7, 6]. When the player guesses the first number, it will be removed the number 7 so it will show only the number 6 inside the array as we can see in the screenshot below. When there will be no number on the array, as written on the second condition if (numbers.length == 0), it will display “correct” because the user succeeded in guessing the sequence.  

    ![correct](https://user-images.githubusercontent.com/76018052/121048890-20e4c580-c7af-11eb-8e8e-06ae53adf687.PNG)

* When the red light will show, to make disappear the light in one second I added setTimeout on the function showLights so after one second. the red light will turn to black.
This solution was found in stack overflow [here](https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop).

* Check if every time the first round is succeeded, it will add one point in the current score with the correct green message.

* Check if the game failed, the current score will reset to 0 with the wrong red message. 

* Check if the current score is higher than the last high score, it will set the new high score in the local storage and show in the game. 

* The problem is when reloading the page, the high score will show 0. To display the last high score even after reloading the page, add the function **initiateHighScore** and get the last high score if there is one in the local storage. 

* While the red lights are being showed, the tiles are clickable so it is not good user experience. To disable the tiles to be clickable when it is the turn of the computer, I added the style pointerEvents to "none" in javascript.  
![pointer event none](https://user-images.githubusercontent.com/76018052/132959353-4f092888-157f-4728-8204-e7af4793e4f7.PNG)  

    To make the tiles clickable when it is the player turn, put the pointerEvents to "auto"
![pointer event auto](https://user-images.githubusercontent.com/76018052/132959372-006578ff-2152-4f13-9942-1e217b6aafb1.PNG)

* From the advise of the tutor, to show a green flash light when the player turn is correct, I added a separate *function flashGreen()* and call inside the *function playerFunctionality(turn)*

## Validators <a name="validators"></a>

### HTML and CSS validators 
Checked the validity of the code with HTML Markup Validation Service and CSS Validation Service and there were no errors.

### Javascript
in JS hint. there are several error : 
    * An error message 	"**'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).**".  
    I checked in [stack overflow](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const) so just need to add comment /*jshint esversion: 6 */  on the top of the JS file. 
    * An error saying that the variable "**numbers**" is not defined, but if I defined this variable, the code is not working.    

## Lighthouse testing <a name="lighthouse-testing"></a>  