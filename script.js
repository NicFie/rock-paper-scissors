let computerSelection = "";
let userSelection = "";
let userTotal = 0;
let computerTotal = 0;
const computerChoice = document.querySelector('#computer-choice')
const results = document.querySelector('#results');
const userRunningTotal = document.querySelector('#user-running-total');
const computerRunningTotal = document.querySelector('#computer-running-total');
const instructions = document.querySelector('#instructions');
const playAgainButton = document.querySelector('#play-again')
const weapons = document.querySelector('#weapons');

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerSelection = 'rock';
    } else if (randomNumber === 1) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
    return computerSelection;
}


function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        results.textContent = 'It\'s a tie. Play again';
    } 
      
      else if (computerSelection === 'rock') {
        if (userSelection === 'paper') {
            results.textContent = 'You win this round';
            return userTotal += 1;
        } else {
            results.textContent = 'The computer wins this round';
            return computerTotal += 1;
        };
    }
     

      else if (computerSelection === 'paper') {
        if (userSelection === 'rock') {
            results.textContent = 'The computer wins this round';
            return computerTotal += 1;
        } else {
            results.textContent = 'You win this round';
            return userTotal += 1;
        }
    } 
      
      else if (computerSelection === 'scissors') {
        if (userSelection === 'rock') {
            results.textContent = 'You win this round';
            return userTotal += 1;
        } else {
            results.textContent = 'The computer wins this round';
            return computerTotal += 1;
        }
    } 
}

function game() {
    computerChoice.textContent = `The computer has chosen ${computerSelection}`;
    userRunningTotal.textContent = `You have ${userTotal} points.`;
    computerRunningTotal.textContent = `The computer has ${computerTotal} points.`;
        if (userTotal == 3) {
           instructions.textContent = 'You win the game!';
           playAgainButton.style.display = "block";
           weapons.style.display = "none";
        } else if (computerTotal == 3) {
           instructions.textContent = 'The computer wins the game!'
           playAgainButton.style.display = "block";
           weapons.style.display = "none";
        } else {
           instructions.textContent = 'Pick again';
        }
}





document.getElementById("rock").addEventListener("click", function(){
        computerPlay();
        playRound('rock', computerSelection);
        game();

    })
document.getElementById("paper").addEventListener("click", function(){
        computerPlay();
        playRound('paper', computerSelection);
        game();
    })
document.getElementById("scissors").addEventListener("click", function(){
        computerPlay();
        playRound('scissors', computerSelection);
        game();
    })
          



/* Option to restart match. */
function playAgain() {
   userTotal = 0;
   computerTotal = 0;
   userRunningTotal.textContent ="";
   computerRunningTotal.textContent = "";
   instructions.textContent = "";
   computerChoice.textContent = "";
   results.textContent = "";
   playAgainButton.style.display = "none";
   weapons.style.display = "block";
}
