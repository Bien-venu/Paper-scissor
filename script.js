let player1Score = 0;
let player2Score = 0;
const resultDiv = document.getElementById("result");

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! Both players chose " + playerSelection + ".";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    player1Score++;
    return "You win! " + playerSelection + " beats " + computerSelection + ".";
  } else {
    player2Score++;
    return (
      "Computer wins! " + computerSelection + " beats " + playerSelection + "."
    );
  }
}

function updateScores() {
  document.getElementById("player1Score").textContent = player1Score;
  document.getElementById("player2Score").textContent = player2Score;
  
}

function announceWinner() {
  if (player1Score >= 5) {
    resultDiv.textContent = "You win the game!";
    alert("You win the game!");
    location.reload();
  } else if (player2Score >= 5) {
    resultDiv.textContent = "Computer wins the game!";
    alert("Computer wins the game!");
    location.reload();
  }
}

function handleClick(event) {
  const playerSelection = event.target.id;
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  const result = playRound(playerSelection, computerSelection);
  resultDiv.textContent = result;

  updateScores();
  announceWinner();
}

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => button.addEventListener("click", handleClick));
