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
* Have clear information about the rule
* Succeed the sequence of each round as much as they can.
* Able to play on a different device 

**Need**:
* To understand easily the game
* Play with easy and good interaction
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
* For the moment, the game is a grid 3 X 3. Add different levels with a different grid to vary the difficulty:  2 X 2 and  4 X 4. 
* Add javascript in the contact form.
* Add stats board displaying the three highest score of the player
* Add option to use the timer so it will increase the difficulty of the game
* Add sounds effects


### Structure plane <a name="structure-plane"></a>
---
* When the player will open the game, it will show the logo and underneath, two buttons: 
    * The button play to direct to the game 
    * The button instruction will direct to the instruction page to understand the rule.

* If the player failed, it will show the current score and the high score.  
The player has the option to play again by clicking the button "Let's start".

* On the score page, it will show the three highest scores of the player. 

* The instruction page provides all the information about the game, the rules. The player has an option to click below the instruction the button to start the game after reading the instruction.

* On the contact page, the player has to fill out the name, email address, and the message to add any question, suggestion, or feedback.

### Skeleton plane <a name="skeleton-plane"></a>
---
#### Wireframe

[Home play page](https://github.com/yuyu78/memory-light/blob/master/wireframe/home%20page%20play.pdf)

[After clicking play button](https://github.com/yuyu78/memory-light/blob/master/wireframe/after%20clicking%20play.pdf) : this will be a feature implement in the future. 

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
* Red when hovering the button, social media icon, menu, name of the game on top-left and the color of the light sequence during the game

Those colors are chosen to make a contrast between colors and make the game more visible, easier to play. 

#### Typography 
* **Play** in all the pages. The reason for this font family is the form of this typography is straight and ideal for a game app.

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
* [Jshint](https://jshint.com/)
* [Grammarly](https://app.grammarly.com/)
* [Stack Overflow](https://stackoverflow.com/)


## Testing <a name="testing"></a>
---
The testing process can be found [here](https://github.com/yuyu78/memory-light/blob/master/TESTING.md)

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
