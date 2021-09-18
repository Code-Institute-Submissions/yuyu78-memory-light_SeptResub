# TESTING Memory Light
[README file](https://github.com/yuyu78/memory-light/blob/master/README.md)   

## Table of contents

1. [Testing User Stories](#testing-user-stories)  

2. [Manual Testing](#manual-testing)  

3. [Bugs](#bugs)  

4. [Validators](#validators)

5. [Lighthouse Testing](#lighthouse-testing)

## Testing User Stories <a name="testing-user-stories"></a>

1. **As a first-time player, I want to be able to play the game on different devices**  
    * Used the site https://responsivedesignchecker.com/ to check if the website is responsive on all devices.
    * Browsers tested during the project:   
        * Chrome
        * Edge
        * Firefox    

2. **As a first-time player, I want to access the instruction so I can have an easy understanding of the rule**  
    * The player can click on the first page the instruction button or the navbar before playing.  
    * The explanation is simple and clear. At the end of the instruction, the player can click on the button "play" to start the game. 

3. **As a first-time player, I want a good and simple visual so it makes the game more enjoyable**  
    The design of the game is very simple. 
    * The background is black and the grid, font color are white so it gives a great contrast between colors and makes the visual better.    
    * When the user plays the game, it will display a sequence of red colors. A flashy red color is chosen to also give a good contrast.

4. **As a first-time player, I want to be able to turn off the sound so I can play in a quiet place**  
    The sound effect is a feature Left to Implement in the future, for the moment, there is no sound in the game.  

5. **As a first-time player, I want to play the game with good interaction so there is no slowness and the page will load quickly**
    * When the user hovers all the buttons, including the social media link, menu, and name of the game, the color will turn red.
    * Every time the user succeeds in the game, a green flashlight appears, and the user gets one point in the current score.
    * If the user loses the game, it reset the current score to 0 and will appear a message in red color "Wrong! Click the button to Start Again".

6. **As a returning player, I want the game to become more difficult so I can improve my memory skills**
    * The game will start with a sequence of two lights. Each time the player succeeds the round, one more light will be added to the sequence so it will become progressively longer and more difficult to remember.  
    This is a good exercise to improve memory skills. 

7. **As a returning player, I want to save my high score on a stats board so I can check my progress**
    * On the Score page, the user can check the three highest scores
    * The high score is saved in the storage so if the player reloads the page, it will still show the high score. 

8. **As a returning player, I want to select a different grid so I can develop my memory skills**
    *  This is a future feature to implement the grids of 2 X 2 and 4 X 4 so that the player can vary the level of difficulty.

9. **As a returning player, I want to contact the business so I can ask a question or give feedback**
    * The player can access the contact page to fill the form. All the inputs are required to submit the form.
    * When the player submits the form, a message appears "Request submitted" with the button "OK" to go back to the previous form.

## Manual testing <a name="manual-testing"></a>

### Navigation bar 
1. Check if all the links in the navigation bar will change in red color when hover
2. Check if all the links are direct to the correct page:  

| Link | Testing | Result |  
| --- | --- | --- |
| Memory Light| Check if directs to the homepage | OK | 
| Play | Check if directs to the homepage | OK | 
| Instruction| Check if directs to the instruction page | OK | 
| Score| Check if direct to the scoreboard page| OK | 
| Contact| Check if direct to contact page with a form | OK | 

3. Check if, on mobile size and Ipad, it collapses to hamburger

### Footer
1. When hover on the social media links, check if the color changes in red 
2. Check if all the links direct to the correct social media page
3. Check if the footer is responsive on all devices

### Homepage (index.html)
1. Check if the homepage is responsive on all devices
2. Check if the buttons play and instructions change in red color when hover
3. Check if the button play directs to the page with the grid to be ready to play (startgame.html)
4. Check if the button instruction directs to the instruction page

### Startgame.html (after clicking to the button "play" on the homepage)
1. Check if the page is responsive on all devices
2. Check if after clicking the button "Let's start", it shows a combination of patterns with red light
3. While the pattern is being shown, check if the tiles are not clickable so that there is no bug 
4. Check if the player clicks to the correct tiles, the current score increases
5. Check if the player clicks to the incorrect tiles, it shows a message in red "Wrong! Click the button to Start Again" and the current score reset to 0
6. If I reload the page, check if it keeps the high score

### Instruction page
1. Check if the page is responsive on all devices
2. Check if the button "Play now" changes in red color when hover
3. Check if after clicking the button "Play now", it directs to the page startgame.html with the grid

### Score page
1. Check if the page is responsive on all devices
2. Check if the first highest high score on the score page is the same in the startgame.html page under the grid

### Contact page
1. Check if the page is responsive on all devices
2. Check if the button "Submit" changes in red color when hover
3. Check if the user doesn´t fill in all the input, it appears a message to fill in the field
4. After submitting the form, check if there is a confirmation message "Request submitted!"
5. Check on my personal email if I receive the request from the user

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

* While the red lights are being shown, the tiles are clickable so it is not a good user experience. To disable the tiles to be clickable when it is the turn of the computer, I added the style pointerEvents to "none" in javascript. 
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
    * An error saying that the variable "**numbers**" in the startgame.js is not defined, but if I defined this variable, the code is not working.  
    * An error saying that the variable "emailjs" is undefined, but this is part of the email js documentation.
    * The variables "Swal" on email.js are noy defined because it is part of the documentation SweetAlert.

## Lighthouse testing <a name="lighthouse-testing"></a>  

![lighthouse 1](https://user-images.githubusercontent.com/76018052/133898450-52a2212f-5cff-4ddc-9b16-825cc3f0288a.PNG)
