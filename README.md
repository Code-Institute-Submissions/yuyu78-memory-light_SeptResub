# Memory Light

![screenshot app all devices](https://user-images.githubusercontent.com/76018052/121008490-f719a780-c78a-11eb-98c1-8549c9245529.PNG)

The project is a simple and fun memory game inspired by the electronic game Simon, which allows improving memory skills.

View the website [here](https://yuyu78.github.io/memory-light/index.html).

## Table of contents
1. [UX](#ux)   
a.[Strategy plane](#strategy-plane)  
b.[Scope plane](#scope-plane)  
c.[Structure plane](#structure-plane)   
d.[Skeleton plane](#skeleton-plane)    
e.[Surface plane](#surface-plane) 

2. [Technologies used](#technologies-used)  

3. [Testing](#testing)

4. [Deployment](#deployment)

5. [Credits](#credits)

## UX <a name="ux"></a>

### Strategy plane <a name="strategy-plane"></a>
---
The goal of this memory game is to repeat and click the sequence of light that the game will generate. After each round, one more light will be added to the sequence so it will become progressively longer and more complex which makes it harder to remember, the objective is to succeed the maximum of sequences as the user can.

#### The game is building for: 
* players for all age, for the kids, teenager, adult, senior 
* players who want to improve their memory skills 
* to develop concentration skills
* Ideal for playing during free time, while waiting for the bus, during the break...

#### The goal & need of the player:
**Goal**:
* Enjoy the game
* Have clear information of rule
* Succeed the sequence of each round as much as they can.
* Able to play on a different device 

**Need**:
* to understand easily the game
* play with easy and good interaction
* Good and simple visual of the game 
* Able to contact the business 

#### The goal & need of the business:
**Goal**:
* Provide good UX design
* Build a simple and intuitive game suitable for players of all age
* Motivate the user to play again 
* Help the player to develop the memory skills


**Need**:
* Implement Javascript to set up the rule 
* Make simple and good visual to make the interaction easy

#### User Stories
##### As a first-time player
* I want to be able to play the game on a different device
* I want to access the instruction and have an easy understanding of the rule 
* I want a good and simple visual so it makes the game more enjoyable 
* I want to be able to turn off the sound if I am playing in a quiet place
* I want to play the game with good interaction, no slowness with quick loading  

##### As a  returning player: 
* I want to improve my memory skills
* I want to save my high score on a stats board so that I can check my progress 
* I want to select a different level of grid 
* I want to contact the business if I have any suggestion, feedback related to the game


### Scope plane <a name="scope-plane"></a>
---
#### Features

##### Existing features
* A navigation bar in all the pages with **Play, Instruction, score, contact**.  
On the mobile device, the hamburger menu will be used with the toggling behavior. 
On the right of the navbar, the icon sound will allow to turn on or off the sound.
* The footer will be displayed on all the pages with the copyright, the icon GitHub which will direct to the Github page of the project, and the social media link.
* Each time the user succeeds in the sequence, one light will be added to the next sequence to make the game more complex and difficult to memorize. 
* In the instruction page, it explains all the information about the game and the user can click on the play button.
* On the contact page, the user can submit a form for any questions, feedback, or suggestion.

##### Features Left to Implement  
Due to the lack of time, there are many features I couldn't implement. 
* For the moment, the game is a grid 3 X 3. Add different levels with a different grid to vary the difficulty:  2 X 2  4 X 4. 
* Add javascript in the contact form.
* Add stats board displaying the three highest score of the player
* Add option to use the timer so it will increase the difficulty of the game
* Add sounds effects


### Structure plane <a name="structure-plane"></a>
---
* When the player will open the game, the "play" page will be shown. It will display 3 different pages on the same "play" section:  
    - The first page is the option to click on “play “and “instruction”.  
    - If the user clicks on the button play, it will show 3 grid options: 2 X 2, 3 X 3, 4 X 4.  
    - After choosing one of those options, it will show the page to allow the user to play the game. 

    If the user clicks on “instruction”, it will direct to the instruction page.

* If the player failed, it will show the current score and the high score.  
The player has the option to play again by clicking the button below.

* On the score page, it will show the three highest scores of the player. 

* The instruction page provides all the information about the game, the rules. The player has an option to click below the instruction the button to start the game after reading the instruction.

* On the contact page, the player has to fill out the name, email address, and the message to add any question, suggestion, or feedback.

### Skeleton plane <a name="skeleton-plane"></a>
---
#### Wireframe

[Home play page](https://github.com/yuyu78/memory-light/blob/master/wireframe/home%20page%20play.pdf)

[After clicking play button](https://github.com/yuyu78/memory-light/blob/master/wireframe/after%20clicking%20play.pdf)

[Start game](https://github.com/yuyu78/memory-light/blob/master/wireframe/start%20game.pdf)

[Scores board](https://github.com/yuyu78/memory-light/blob/master/wireframe/scores%20page.pdf)

[Instruction](https://github.com/yuyu78/memory-light/blob/master/wireframe/instruction.pdf)

[Contact](https://github.com/yuyu78/memory-light/blob/master/wireframe/contact.pdf)

### Surface plane <a name="surface-plane"></a>
---
#### Color Scheme
The main colors of the website are: 
* Black for the background and font color
* White for the button color and font color 
* Red when hovering the button, social media icon, and the color of the light sequence during the game

Those colors are chosen to make a contrast between colors and make the game more visible, easier to play. 

#### Typography 
* **Play** in all the pages 
The reason for this font family is the form of this typography is straight and ideal for a game app.

---
## Technologies Used <a name="technologies-used"></a>
---

### Languages
* HTML5
* CSS
* Javascript, jQuery

## Coding library and others technologies 
* [Jquery](https://jquery.com/)
* [Bootstrap](https://getbootstrap.com/) version 4.3.1
* [Google fonts](https://fonts.google.com/)
* [Fontawesome](https://fontawesome.com/)
* [Git](https://git-scm.com/)
* [Github](https://github.com/)
* [Gitpod](https://www.gitpod.io/)
* [Balsamiq](https://balsamiq.com/wireframes/)
* [Google fonts](https://fonts.google.com/)
* **Google Chrome Dev tools**
* [HTML Validator](https://validator.w3.org/)
* [CSS Validator](https://jigsaw.w3.org/css-validator/)
* [Grammarly](https://app.grammarly.com/)
* [Stack Overflow](https://stackoverflow.com/)


## Testing <a name="testing"></a>
---

### Testing User Stories
1. **As a first-time player, I want to be able to play the game on different device**

    **Devices tested during the project**: 
    * Desktop
    * Moto G4 
    * Galaxy S5
    * Pixel 2
    * Pixel 2Xl
    * Iphone 5/SE 
    * Iphone 6/7/8
    * Iphone x
    * Ipad 
    * Ipad Pro
    * Surface Duo

2. **As a first-time player, I want to access the instruction and have an easy understanding of the rule**  
    * The player can click on the first page the instruction button or the navbar before playing.  
    * The explanation is simple and clear. At the end of the instruction, the player can click on the button "play" to start the game. 

3. **As a first-time player, I want a good and simple visual so it makes the game more enjoyable**
    The design of the game is very simple. 
    * The background is black and the grid, font color are white so it gives a great contrast between colors and makes the visual better.    
    * When the user plays the game, it will display a sequence of red color. A flashy red color is chosen to also give a good contrast.

4. **As a first-time player, I want to be able to turn off the sound if I am playing in a quiet place**  
    The sound effect is a feature Left to Implement in the future, for the moment, there is no sound in the game.  

5. **As a first-time player, I want to play the game with good interaction, no slowness with quick loading**
    * When the user hovers all the buttons, including the social media link, the color will turn red.
    * Every time the user succeeds in the game, it will add one point in the current score and will appear a correct message in green color "Correct! Click the button again to continue". 
    * If the user failed the game, it will reset the current score to 0 and will appear a message in red color "Wrong! Click the button to Start Again". 

6. **As a returning player, I want to improve my memory skills**
    * The game will start with a sequence of two lights. Each time the player succeeds the round, one more light will be added to the sequence so it will become progressively longer and more difficult to remember.  
    This is a good exercise to improve memory skills. 

7. **As a returning player, I want to save my high score on a stats board so that I can check my progress**
    * Due to the lack of time, the score page which will show the three highest scores of the player will be a feature implemented in the future.  
    For the moment, only one high score will be shown on the page before the player starts the game, below the grid with the current score. 
    * The high score will be saved in the storage so if the player reloads the page, it will still show the high score. 

8. **As a returning player, I want to select a different grid**
    *  This is a future feature to implement the grids of 2 X 2 and 4 X 4 so that the player can vary the level of difficulty.

9. **As a returning player, I want to contact the business if I have any suggestion, feedback related to the game**
    * The player can access the contact page to fill the form. Al the inputs are required to submit the form.
    I didn't have time to work the contact form on Javascript so for the moment, if the player clicks on the submit button, it will show an error message.  
    I will be a future feature to implement. 

### Manual testing

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

* Checked the validity of the code with HTML Markup Validation Service and CSS Validation Service and there were no errors.  However, in JS hint. there are several error : 
    * An error message 	"**'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).**".  
    I checked in [stack overflow](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const) so just need to add comment **/*jshint esversion: 6 */ ** on the top of the JS file. 
    * An error saying that the variable "**numbers**" is not defined, but if I defined this variable, the code is not working. 

---
## Deployment <a name="deployment"></a>
---

Gitpod was used to develop the project and deployed through Github Pages.   

The steps for the deployment of the project:

1. Login to [Github](https://github.com/)  
2. Click on the green and white icon on top-right and select "Your repositories"  
3. From the list of the repositories, select **memory-light**  
4. Click on **Settings**  on the right of the menu items  
5. Scroll down to the **GitHub Pages**  
6. On the **GitHub Pages** section, it will show a message "settings now has its own dedicated tab! Check it out here!", click on "Check it out here!" which will direct to the github pages
7. Under source in the dropdown menu, select **Master**
8. On the right, select the folder **/(root)**  
9. Click **Save** and it will appear a message "Your site is published at https://yuyu78.github.io/memory-light/"
9. Click on the link to the deployed site

### To run the project locally  

1. Go to the repository [memory-light](https://github.com/yuyu78/memory-light)  
2. Click to the green button **Code** and select **Download ZIP**
3. Extract the file downloaded to run the project locally

## Credits & Acknowledgments<a name="credits"></a>
---

* The concept of the game is inspired by the game Simon which is mentioned in the Assessment Handbook of Code Institute. 
* Thank you to my mentor Miguel for all the support and advice for my project
* All the tutor of Code Institute
* Code Institute Slack community
