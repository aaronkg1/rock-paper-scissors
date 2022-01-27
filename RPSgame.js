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

scoresContainer.appendChild(displayChoices);
scoresContainer.appendChild(outcomeDisplay);
scoresContainer.appendChild(displayScores);
scoresContainer.appendChild(overallScoresDisplay);



buttons.forEach(button => button.addEventListener('click', userSelect));
buttons.forEach(button => button.addEventListener('click', game));

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
    computerPlay();
    displayChoices.textContent = `You picked ${userChoice} : Computer picked ${computerChoice}`;
    checkResults();

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


  displayScores.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
  displayUserScore.textContent = `User Score: ${userScore}`;
  displayCompScore.textContent = `Computer Score: ${computerScore}`;


  

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
        outcomeDisplay.textContent = 'It was a tie!';
        return 0;
    }

    else if (userChoice == choice[0] && computerChoice == choice[1]) {
        outcomeDisplay.textContent = `${choice[1]} beats ${choice[0]}. Computer wins the round.`;
        computerScore += 1;
    }

    else if (userChoice == choice[0] && computerChoice == choice[2]) {
        outcomeDisplay.textContent = `${choice[0]} beats ${choice[2]}. You win the round.`;
        userScore += 1;
    }

    else if (userChoice == choice[1] && computerChoice == choice[0]) {
        outcomeDisplay.textContent = `${choice[1]} beats ${choice[0]}. You win the round`;
        userScore += 1;
    }

    else if (userChoice == choice[1] && computerChoice == choice[2]) {
        outcomeDisplay.textContent = `${choice[2]} beats ${choice[1]}. Computer wins the round`;
        computerScore += 1;
    }

    else if (userChoice == choice[2] && computerChoice == choice[0]) {
        outcomeDisplay.textContent = `${choice[0]} beats ${choice[2]}. Computer wins the round.`;
        computerScore += 1;
    }

    else if (userChoice == choice[2] && computerChoice == choice[1]) {
        outcomeDisplay.textContent = `${choice[2]} beats ${choice[1]}. You win the round`;
        userScore += 1;

    }
}


function checkScore() {
    if (userScore >= 5 || computerScore >= 5) {
        return true;
    }

    else return false;


}


