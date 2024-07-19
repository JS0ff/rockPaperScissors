// Computer will randomly assign one of three Values:
function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);

  if (compChoice === 0) {
    // <----- Rock
    compChoice = "Rock";
  } else if (compChoice === 1) {
    // <----- Paper
    compChoice = "Paper";
  } else if (compChoice === 2) {
    // <----- Scissors
    compChoice = "Scissors";
  }
  console.log(compChoice);
  return compChoice;
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Please write any of three values(Rock, Paper, Scissors)"
  );
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, compSelection) {
  humanSelection = humanSelection.toUpperCase();
  compSelection = compSelection.toUpperCase();
  if (humanSelection === "ROCK" && compSelection === "PAPER") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanSelection === "PAPER" && compSelection === "SCISSORS") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else if (humanSelection === "SCISSORS" && compSelection === "ROCK") {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  } else if (humanSelection === compSelection) {
    console.log("Draw!");
  } else if (humanSelection === "ROCK" && compSelection === "SCISSORS") {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (humanSelection === "SCISSORS" && compSelection === "PAPER") {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  } else if (humanSelection === "PAPER" && compSelection === "ROCK") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  }
}

// const humanSelection = getHumanChoice();
// const compSelection = getComputerChoice();
// playRound(humanSelection, compSelection);
