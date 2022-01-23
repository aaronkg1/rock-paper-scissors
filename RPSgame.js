const choice = ['Rock', 'Paper', 'Scissors'];
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
const games = {
    computer: 0,
    user: 0
};


console.log("ROCK PAPER SCISSORS\n---------------------------------------------\nFIRST TO 5 WINS! to begin game type game();\n---------------------------------------------")

function game() {

    userPlay();
    
    if (userChoice == choice[0] || userChoice == choice[1] || userChoice == choice[2])
    {
        
    }  else if (userChoice == '' || userChoice == null) {
        console.log('---------------------------------------------\nPlease make a valid selection\n---------------------------------------------\n');
        game();
    }
    computerPlay();
    console.log(`You picked ${userChoice} : Computer picked ${computerChoice}\n---------------------------------------------`);
    checkResults();

    if (checkScore()) {
        if (userScore >= 5) {
            console.log("\n \n \nCongratulations! You beat the computer :)\n \n \n---------------------------------------------\nTo play again type game();");
            games.user += 1;
            userScore = 0;
            computerScore = 0;
            console.log(`Overall scores\n--------------------------------------------- \nUser: ${games.user}  Computer: ${games.computer}`);
            return;
        }

        else if (computerScore >= 5) {
            console.log("\n \n \nThe computer won...Game over :(\n \n \n---------------------------------------------\nWant to try again? Just type game();");
            games.computer += 1;
            userScore = 0;
            computerScore = 0;
            console.log(`Overall scores\n--------------------------------------------- \nUser: ${games.user}  Computer: ${games.computer}`);
            return;
        }

    }


    console.log(`---------------------------------------------\nYour score: ${userScore}\n---------------------------------------------\nComputer score: ${computerScore}\n---------------------------------------------\n`);


    game();

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

function userPlay() {
    userChoice = prompt('Please choose Rock, Paper or Scissors!')
    if (userChoice == null) {
        return;
    }
    let lowerCaseUserChoice = userChoice.toLowerCase();

    if (lowerCaseUserChoice == "rock") {
        userChoice = choice[0];
        
    }

    else if (lowerCaseUserChoice == "paper") {
        userChoice = choice[1];
        
    }

    else if (lowerCaseUserChoice == "scissors") {
        userChoice = choice[2];
        
    }

    else if (lowerCaseUserChoice == '' || lowerCaseUserChoice == null) {

    }
}



function checkResults() {
    if (userChoice == computerChoice) {
        console.log('It was a tie!');
        return 0;
    }

    else if (userChoice == choice[0] && computerChoice == choice[1]) {
        console.log(`${choice[1]} beats ${choice[0]}. Computer wins the round.`);
        computerScore += 1;
    }

    else if (userChoice == choice[0] && computerChoice == choice[2]) {
        console.log(`${choice[0]} beats ${choice[2]}. You win the round.`);
        userScore += 1;
    }

    else if (userChoice == choice[1] && computerChoice == choice[0]) {
        console.log(`${choice[1]} beats ${choice[0]}. You win the round`);
        userScore += 1;
    }

    else if (userChoice == choice[1] && computerChoice == choice[2]) {
        console.log(`${choice[2]} beats ${choice[1]}. Computer wins the round`)
        computerScore += 1;
    }

    else if (userChoice == choice[2] && computerChoice == choice[0]) {
        console.log(`${choice[0]} beats ${choice[2]}. Computer wins the round.`)
        computerScore += 1;
    }

    else if (userChoice == choice[2] && computerChoice == choice[1]) {
        console.log(`${choice[2]} beats ${choice[1]}. You win the round`)
        userScore += 1;

    }
}


function checkScore() {
    if (userScore >= 5 || computerScore >= 5) {
        return true;
    }

    else return false;


}

