//1. Logic for computer choice
//Return a Randomly generated number from 1 to 3

function getComputerChoice() {
  let choice =  Math.floor(Math.random() * 3 + 1);
  if(choice == 1) return "rock";
  if(choice == 2) return "paper";
  if(choice == 3) return "scissors";
}

//2, Logic for Human choice
//Ask user to input a Rock, Paper or Scissors
//Turn the string into all lower case
//Return that value

function getHumanChoice() {
  let choice = prompt("Please enter rock, paper or scissors: ");
  choice = choice.toLowerCase();
  return choice;
}
// 3. Logic for keeping track of score
// Make 2 global variables of int type with initial value 1
// Increment the score after a side won
let isGameOver = 0;
let humanScore = 0;
let computerScore = 0;

// 4. Logic for playing one round
// Compare human and computer choice
//   Compare two choices rock vs paper, rock vs scissors, paper vs scissors, paper vs rock, scissors vs rock, scissors vs paper. Equal choices = draw
//     if draw, call 4 again

function playRound(computerChoice, humanChoice) {
  
  let resultPanel = document.querySelector(".result-panel");
  resultPanel.innerHTML = '';

  let choicesDisplay = document.createElement('p');
  choicesDisplay.textContent = `Computer: ${computerChoice}, Human: ${humanChoice}`;
  resultPanel.appendChild(choicesDisplay);

  let result = document.createElement('p');
  
  if(computerChoice == humanChoice) {
    result.textContent = "Draw! Go again";
  }
  else if(
    computerChoice == "rock" && humanChoice == "scissors" ||
    computerChoice == "scissors" && humanChoice == "paper" ||
    computerChoice == "paper" && humanChoice == "rock"
  ) {
    computerScore++;
    result.textContent = `Computer's ${computerChoice} beats Human's ${humanChoice}. Computer Wins!`;
  }
  else if(
    humanChoice == "rock" && computerChoice == "scissors" ||
    humanChoice == "scissors" && computerChoice == "paper" ||
    humanChoice == "paper" && computerChoice == "rock"   
  ) {
    humanScore++;
    result.textContent = `Human's ${humanChoice} beats Computer's ${computerChoice}. Human Wins!`;
  }

  resultPanel.appendChild(result);
}

// 5. Logic for playing a game (5 rounds)
// Loop 4 until one of the score reaches 3

function endGame() {
  let winner = humanScore > computerScore ? "Human":"Computer";
  let gameoverPanel = document.querySelector(".gameover-panel");
  gameoverPanel.textContent = `Game over. Winner: ${winner}. Final score: ${humanScore} - ${computerScore}`;
  document.body.appendChild(gameoverPanel);
  isGameOver = 1;
}

function displayScore() {
  let humanScoreDisplay = document.querySelector(".human-score");
  let computerScoreDisplay = document.querySelector(".computer-score");

  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
}

let buttonPanel = document.querySelector(".button-panel");
buttonPanel.addEventListener('click', (event) => {
  
  if (!isGameOver){
    let target = event.target;
    playRound(getComputerChoice(), target.id);

    if (computerScore == 5 || humanScore == 5) {
      endGame();
    }

    displayScore();
  }
})
