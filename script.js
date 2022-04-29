let computerSelection = "";
let userSelection = "";
let userTotal = 0;
let computerTotal = 0;
const userChoice = document.querySelector('#user-choice');
const userImage = document.querySelector('#user-image');
const computerChoice = document.querySelector('#computer-choice')
const computerImage = document.querySelector('#computer-image');
const results = document.querySelector('#results');
const userRunningTotal = document.querySelector('#user-running-total');
const computerRunningTotal = document.querySelector('#computer-running-total');
const instructions = document.querySelector('#instructions');
const nextRoundButton = document.querySelector('#next-round');
const playAgainButton = document.querySelector('#play-again')
const weapons = document.querySelector('#weapons');

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerSelection = 'rock';
        computerImage.innerHTML = '<img src="https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="rock">';
    } else if (randomNumber === 1) {
        computerSelection = 'paper';
        computerImage.innerHTML = '<img src="https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="paper">';
    } else {
        computerSelection = 'scissors';
        computerImage.innerHTML = '<img src="https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="scissors">';
    }
    return computerSelection;
}


function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        results.textContent = 'It\'s a tie. Play again';
    } 
      
      else if (computerSelection === 'rock') {
        if (userSelection === 'paper') {
            results.textContent = 'Paper beats rock. You win this round';
            return userTotal += 1;
        } else {
            results.textContent = 'Rock beats scissors. The computer wins this round';
            return computerTotal += 1;
        };
    }
     

      else if (computerSelection === 'paper') {
        if (userSelection === 'rock') {
            results.textContent = 'Paper beats rock. The computer wins this round';
            return computerTotal += 1;
        } else {
            results.textContent = 'Scissors beats paper. You win this round';
            return userTotal += 1;
        }
    } 
      
      else if (computerSelection === 'scissors') {
        if (userSelection === 'rock') {
            results.textContent = 'Rock beats scissors. You win this round';
            return userTotal += 1;
        } else {
            results.textContent = 'Scissors beats paper. The computer wins this round';
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
           nextRoundButton.style.display = "none";
        } else if (computerTotal == 3) {
           instructions.textContent = 'The computer wins the game!'
           playAgainButton.style.display = "block";
           weapons.style.display = "none";
           nextRoundButton.style.display = "none";
        } else {
           instructions.textContent = '';
        }
}





document.getElementById("rock").addEventListener("click", function(){
        userChoice.textContent = "You have chosen rock";
        userImage.innerHTML = "<img src=\"https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80\">";
        nextRoundButton.style.display = "block";
        computerPlay();
        playRound('rock', computerSelection);
        game();
        weapons.style.display = "none";
        

    })
document.getElementById("paper").addEventListener("click", function(){
        userChoice.textContent = "You have chosen paper";
        userImage.innerHTML = '<img src="https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="paper">';
        nextRoundButton.style.display = "block";
        computerPlay();
        playRound('paper', computerSelection);
        game();
        weapons.style.display = "none";
        
        
    })
document.getElementById("scissors").addEventListener("click", function(){
        userChoice.textContent = "You have chosen scissors";
        userImage.innerHTML = '<img src="https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="scissors">'
        nextRoundButton.style.display = "block";
        computerPlay();
        playRound('scissors', computerSelection);
        game();
        weapons.style.display = "none";
        
    })
          

function nextRound() {
    weapons.style.display = "block";
    nextRoundButton.style.display = "none";
    computerChoice.textContent = "";
    results.textContent = "";
    userChoice.textContent = "";
    userImage.innerHTML = "";
    computerImage.innerHTML = "";
}

/* Option to restart match. */
function playAgain() {
   userTotal = 0;
   computerTotal = 0;
   userRunningTotal.textContent ="";
   computerRunningTotal.textContent = "";
   instructions.textContent = "";
   userChoice.textContent = "";
   userImage.innerHTML = "";
   computerChoice.textContent = "";
   computerImage.innerHTML = "";
   results.textContent = "";
   playAgainButton.style.display = "none";
   weapons.style.display = "block";
}
