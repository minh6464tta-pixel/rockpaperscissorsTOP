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

let humanScore = 0;
let computerScore = 0;

// 4. Logic for playing one round
// Compare human and computer choice
//   Compare two choices rock vs paper, rock vs scissors, paper vs scissors, paper vs rock, scissors vs rock, scissors vs paper. Equal choices = draw
//     if draw, call 4 again

function playRound(computerChoice, humanChoice) {
  if(computerChoice == humanChoice) {
    console.log("Draw! Go Again");
    playRound(getComputerChoice(), getHumanChoice());
  }
  else if(
    computerChoice == "rock" && humanChoice == "scissors" ||
    computerChoice == "scissors" && humanChoice == "paper" ||
    computerChoice == "paper" && humanChoice == "rock"
  ) {
    computerScore++;
    console.log("Computer wins!");
  }
  else if(
    humanChoice == "rock" && computerChoice == "scissors" ||
    humanChoice == "scissors" && computerChoice == "paper" ||
    humanChoice == "paper" && computerChoice == "rock"   
  ) {
    humanScore++;
    console.log("Human wins!");
  }

  console.log(`Computer: ${computerScore}, Human: ${humanScore}`);
}

// 5. Logic for playing a game (5 rounds)
// Loop 4 until one of the score reaches 3

function playGame() {
  while(humanScore < 3 && computerScore < 3) {
    playRound(getComputerChoice(), getHumanChoice());
  }

  let winner = humanScore > computerScore ? "Human":"Computer";
  console.log(`Game over! Winner is: ${winner}`)
}

playGame();

