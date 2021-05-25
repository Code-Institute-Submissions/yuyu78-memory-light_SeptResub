# Memory Light

The project is a simple and fun memory game inspired by the electronic game Simon, which allows improving memory skills.

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

The goal of this memory game is to repeat and click the sequence of light that the game generated. After each round, one more light will be added to the sequence so it will become progressively longer and more complex which makes it harder to remember, the objective is to succeed the maximum of sequences as the user can.

#### The game is building for: 
* players for all age, for the kids, teenager, adult, senior 
* players who want to improve the memory skills 
* to develop concentration skills
* Ideal for playing during free time, while waiting the bus, during the break...

#### The goal & need of the player:
**Goal**:
* Enjoy the game
* Have a clear information of rule
* Succeed the sequence of each round as much as they can.
* Able to play in different device 

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
* I want to be able to play the game on different device
* I want to access to the instruction and have an easy understanding of the rule 
* I want a good and simple visual so it makes the game more enjoyable 
* I want to be able to turn off the sound if I am playing in quiet place
* I want to play the game with good interaction, no any slowness with quick loading  

##### As a  returning player: 
* I want to improve my memory skills
* I want to save my highscore in a stats board so that I can check my progress 
* I want to select different number of grid 
* I want to contact the business if I have any suggestion, feedback related to the game


### Scope plane <a name="scope-plane"></a>

#### Features
* A navigation bar in all the pages with : **Play, Instruction, score, contact**.  
On the mobile device, the hamburger menu will be used with the toggling behavior. 
On the right of the navbar, the icon sound will allow to turn on or off the sound.
* The footer will be displayed in all the page with the copy right, the icon github which will direct to the github page of the project and the social media link.
* The player can choose between three differents grid to vary the level of difficulty:  2 X 2, 3 X 3, 4 X 4.  
* Each time the user succeed a round, one light will be added to the sequence to make the game more complex and difficult to memorize. 
* If the user failed, it will show the score and the high score of the user.
* In the page of the score, it will show the best score of the user to check the progress.
* In the instruction page, it explains all the information of the game and the user can click on play button.
* In the contact page, the user can submit a form for any questions, feedback or suggestion.


### Structure plane <a name="structure-plane"></a>

* When the player will open the game, the "play" page will be shown. It will display 3 differents pages on the same "play" section:  
    - The first page is the option to click on “play “and “instruction”.  
    - If the user click on play, it will show 3 grid options: 2 X 2, 3 X 3, 4 X 4.  
    - After choosing one of thoses options, it will show the page to allow the user to play the game. 

    If the user click on “instruction”, it will direct to the instruction page.

* If the player failed, it will show the page with the current score and the highscore.  
The player has the option to play again by clicling the button below the score.

* On the score page, it will show the four highest score of the player. 

* The instruction page provides all the information about the game, the rules. The player has an option to click on the button on the button to start the game after reading the instruction.

* On the contact page, the player has to fill out the name, email address and the message to add any question, suggestion or feedback.

### Skeleton plane <a name="skeleton-plane"></a>

### Surface plane <a name="surface-plane"></a>

## Technologies Used <a name="technologies-used"></a>

## Testing <a name="testing"></a>

## Deployment <a name="deployment"></a>

## Credits <a name="credits"></a>