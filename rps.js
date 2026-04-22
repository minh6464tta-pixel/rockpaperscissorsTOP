//1. Logic for computer choice
//Return a Randomly generated number from 1 to 3

function getComputerChoice() {
  // let choice =  Math.floor(Math.random() * 3 + 1);
  let choice = 1;
  return choice;
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
  else if(computerChoice == 1 && humanChoice == "paper") {
    console.log("Computer rock vs Human paper")
    console.log("Human wins");
    humanScore++;
    console.log(`Computer: ${computerScore}, Human: ${humanScore}`);
  }
  else if(computerChoice == 1 && humanChoice == "scissors") {
    console.log("Computer rock vs Human scissors")
    console.log("Computer wins");
    computerScore++;
    console.log(`Computer: ${computerScore}, Human: ${humanScore}`);  
  }
  else if(computerChoice == 2 && humanChoice == "scissors") {
    console.log("Computer paper vs Human scissors")
    console.log("Human wins");
    humanScore++;
    console.log(`Computer: ${computerScore}, Human: ${humanScore}`);    
  } 
  else if(computerChoice == 2 && humanChoice == "rock") {
    console.log("Computer paper vs Human rock")
    console.log("Computer wins");
    computerScore++;
    console.log(`Computer: ${computerScore}, Human: ${humanScore}`); 
  } 
  else if(computerChoice == 3 && humanChoice == "rock") {
    console.log("Computer scissors vs Human rock")
    console.log("Human wins");
    humanScore++;
    console.log(`Computer: ${computerScore}, Human: ${humanScore}`);      
  }
  else if(computerChoice == 3 && humanChoice == "paper") {
    console.log("Computer scissors vs Human paper")
    console.log("Computer wins");
    computerScore++;
    console.log(`Computer: ${computerScore}, Human: ${humanScore}`);  
  }
  return; 
}

playRound(getComputerChoice(), getHumanChoice());

// 5. Logic for playing a game (5 rounds)
// Loop 4 until one of the score reaches 3




