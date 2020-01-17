
function runGame() {
  const userSelection = prompt("Choose ROCK, PAPER, or SCISSORS").toUpperCase();
  
  // check if the input is valid
  if (userSelection !== "ROCK" && userSelection !== "PAPER" && userSelection !== "SCISSORS") {
    console.log("False input!\n Make sure to choose ROCK, PAPER, or SCISSORS");
    return;
  }
  
  const computerSelection = playBot();
  
  console.log(`User selection: ${userSelection}`);
  console.log(`Computer selection: ${computerSelection}`);
  
  const winner = findWinner(userSelection, computerSelection);
  console.log(winner);
  
}

function findWinner(userSelection, computerSelection) {  
  let winner = "";
  
  if(userSelection === computerSelection) {
    winner = "It's a tie";
  }
  else if((userSelection === "ROCK" && computerSelection === "SCISSORS") || 
         (userSelection === "PAPER" && computerSelection === "ROCK") ||
         (userSelection === "SCISSORS" && computerSelection === "PAPER")) {
    winner = "User Wins";
  }
  else {
    winner = "Computer Wins";
  }
  
  return winner;
}

function playBot() {
  const randomNumber = Math.random();
  let selected = "";
  
  if(randomNumber > 0 && randomNumber <= 0.34) {
      selected = "PAPER"; 
  }
  else if (randomNumber >= 0.35 && randomNumber <= 0.67) {
    selected = "SCISSORS";
  }
  else if (randomNumber >= 0.68 && randomNumber < 1) {
    selected = "ROCK";
  }

  return selected;
}

runGame();
