const choice = ['Rock', 'Paper', 'Scissors'];
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
const games = {
    computer: 0,
    user: 0
};

const buttons = document.querySelectorAll('button');
const displayChoices = document.createElement('p');
const outcomeDisplay = document.createElement('p');
const displayScores = document.createElement('p');
const overallScoresDisplay = document.createElement('p');
const scoresContainer = document.querySelector('.scores');
const displayUserScore = document.querySelector('#user');
const displayCompScore = document.querySelector('#computer');
const compImage = document.createElement('img');
compImage.classList.add('shrinkimage');
const displayCompImage = document.querySelector('#computerdisplay');
const computerMessage = document.querySelector('#computermessage');
const userMessage = document.querySelector('#yourmessage');

scoresContainer.appendChild(displayChoices);
scoresContainer.appendChild(outcomeDisplay);
scoresContainer.appendChild(displayScores);
scoresContainer.appendChild(overallScoresDisplay);

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    setTimeout(() => {button.disabled = false;}, 3300);    
    })
}




buttons.forEach(button => button.addEventListener('click', userSelect));
buttons.forEach(button => button.addEventListener('click', game));
buttons.forEach(button => button.addEventListener('click', function () {
    disableButtons();
    this.classList.add('spin');
    setTimeout(() => {this.classList.remove('spin');}, 1000);
    this.classList.add('highlight-user');
    setTimeout(() => {this.classList.remove('highlight-user');}, 3300);
}));

function userSelect(e) {
    if (e.target.value === "ROCK") {
        userChoice = choice[0];
        
    }

    else if (e.target.value === "PAPER") {
        userChoice = choice[1];
    }

    else if (e.target.value === "SCISSORS") {
        userChoice = choice[2];
    }
};



console.log("ROCK PAPER SCISSORS\n---------------------------------------------\nFIRST TO 5 WINS! to begin game type game();\n---------------------------------------------")

function game() {
    displayCompImage.appendChild(compImage);
    
    setTimeout(() => {
        userMessage.textContent = '';
        computerMessage.textContent =`Rock`;}, 200);
    setTimeout(() => {compImage.setAttribute('src',`Images/Rock.png`);}, 200);
    setTimeout(() => {compImage.setAttribute('src',``);}, 600);
    setTimeout(() => {computerMessage.textContent =`. . .`;}, 600);
    setTimeout(() => {computerMessage.textContent =`Paper`;}, 1000);
    setTimeout(() => {compImage.setAttribute('src',`Images/Paper.png`);}, 1000);
    setTimeout(() => {computerMessage.textContent =`. . .`;}, 1400);
    setTimeout(() => {compImage.setAttribute('src',``);}, 1400);
    setTimeout(() => {computerMessage.textContent =`Scissors!`;}, 1800);
    setTimeout(() => {compImage.setAttribute('src',`Images/Scissors.png`);}, 1800);
    setTimeout(() => {computerMessage.textContent =`. . .`;}, 2200);
    setTimeout(() => {compImage.setAttribute('src',``);}, 2200);
    setTimeout(() => {compImage.setAttribute('src',``);}, 2400);
    setTimeout(() => {computerMessage.textContent =`.`;}, 2400);
    setTimeout(() => {computerMessage.textContent =`. .`;}, 2500);
    setTimeout(() => {computerMessage.textContent =`. . .`;}, 2600);
    setTimeout(() => {computerMessage.textContent =`. . . .`;}, 2700);
    setTimeout(() => {computerMessage.textContent =`. . . . .`;}, 2800);
    setTimeout(() => {computerMessage.textContent =`.`;}, 2900);
    setTimeout(() => {computerMessage.textContent =`. . `;}, 3000);
    setTimeout(() => {computerMessage.textContent =`. . . `;}, 3100);
    setTimeout(() => {computerMessage.textContent =`. . . . `;}, 3200);
    setTimeout(() => {computerMessage.textContent =`. . . . .`;}, 3300);
 
   setTimeout(() => {
    computerPlay();
    compImage.setAttribute('src',`Images/${computerChoice}.png`);
    compImage.setAttribute('src',`Images/${computerChoice}.png`);
    userMessage.textContent = `You picked: ${userChoice}`;
   computerMessage.textContent = `Computer picked: ${computerChoice}`;
   checkResults();
   displayUserScore.textContent = `User Score: ${userScore}`;
   displayCompScore.textContent = `Computer Score: ${computerScore}`;}, 3400);
    
    
    
    

    if (checkScore()) {
        if (userScore >= 5) {
            games.user += 1;
            userScore = 0;
            computerScore = 0;
            overallScoresDisplay.textContent = `Overall scores User: ${games.user}  Computer: ${games.computer}`;
            return;
        }

        else if (computerScore >= 5) {
            games.computer += 1;
            userScore = 0;
            computerScore = 0;
            overallScoresDisplay.textContent = `Overall scores User: ${games.user}  Computer: ${games.computer}`;
            return;
        }

    }


  


  

}

function computerPlay() {
    let randomNumber = (Math.random() * 100);

    if (randomNumber <= 33.33) {
        computerChoice = choice[0];
    }
    else if (randomNumber <= 66.66) {
        computerChoice = choice[1];
    }
    else
        computerChoice = choice[2];
}





function checkResults() {
    if (userChoice == computerChoice) {
        return 0;
    }

    else if ((userChoice == choice[0] && computerChoice == choice[1]) || 
    (userChoice == choice[1] && computerChoice == choice[2]) ||
     (userChoice == choice[2] && computerChoice == choice[0])) {
        computerScore += 1;
        displayCompScore.classList.toggle('add-Point');
        setTimeout(() => {displayCompScore.classList.toggle('add-Point');}, 200);
    }

    
    else  {
        userScore += 1;
        displayUserScore.classList.toggle('add-Point');
        setTimeout(() => {displayUserScore.classList.toggle('add-Point');}, 200);

    }
}


function checkScore() {
    if (userScore >= 5 || computerScore >= 5) {
        return true;
    }

    else return false;

}

