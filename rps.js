//1. Logic for computer choice
//Return a Randomly generated number from 1 to 3

function computerChoice() {
  let choice =  Math.floor(Math.random() * 3 + 1);
  return choice;
}
for (i = 0; i <= 10; i++) {
console.log(computerChoice());
}

//2, Logic for Human choice
//Ask user to input a Rock, Paper or Scissors
//Turn the string into all lower case
//Return that value

//3. Logic for keeping track of score
//Make 2 global variables of int type with initial value 1
// Increment the score after a side won

// 4. Logic for playing one round
// Compare human and computer choice
//   Compare two choices rock vs paper, rock vs scissors, paper vs scissors, paper vs rock, scissors vs rock, scissors vs paper. Equal choices = draw
//     if draw, call 4 again

// 5. Logic for playing a game (5 rounds)
// Loop 4 until one of the score reaches 3




