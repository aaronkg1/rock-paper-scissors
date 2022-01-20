var choice = ['Rock', 'Paper', 'Scissors'];
let userChoice;
let computerChoice;
var userWins;
let userScore = 0;
let computerScore = 0;

console.log("---------------------------------------------\nROCK PAPER SCISSORS\n---------------------------------------------\nFIRST TO 5 WINS! to begin game type game();\n---------------------------------------------")

function game() {
    
    userPlay();
    console.log(`You picked ${userChoice}`);
    computerPlay();
    console.log(`Computer picked ${computerChoice}`);
    checkResults();
    // addScores();
    if (checkScore()) {
        if (userScore >= 5) {
            console.log("Congratulations! You beat the computer :)\n---------------------------------------------\nTo play again type game();");
            userScore = 0;
            computerScore = 0;
            return;
        }

        else if (computerScore >= 5) { console.log("The computer won...Game over :(\n---------------------------------------------\nWant to try again? Just type game();");
        userScore = 0;
        computerScore = 0;
        return;  }

    }


    console.log(`Your score: ${userScore} Computer score: ${computerScore}`);
    
    
     game();


    
}

// function addScores() {
//     if (checkResults === 2) {
//          let = userScore += 1;
//          return userScore;
//     }

//     else if (checkResults === 1) {
//         let = computerScore += 1;
//         return userScore;
//     }

//     else return;
// }
function computerPlay() {
    let randomNumber = (Math.random()*100);
    
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

    if (userChoice == "rock" || userChoice == "Rock") {
        userChoice = choice[0];
    }

    else if (userChoice == "paper" || userChoice == "Paper") {
        userChoice = choice[1];
    }

    else if (userChoice == "scissors" || userChoice == "Scissors") {
        userChoice = choice[2];
    }

    else if (userChoice == '' || userChoice == null) {
        let userChoice = alert('Please make a valid selection!');
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

