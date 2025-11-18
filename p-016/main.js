document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  const resultEl = document.getElementById("result");
  const playerScoreEl = document.getElementById("user-score");
  const computerScoreEl = document.getElementById("computer-score");

  let playerScore = 0;
  let computerScore = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerChoice = button.id;
      const compChoice = computerPlay();
      const result = playRound(playerChoice, compChoice);
      resultEl.textContent = result;
    });
  });

  function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  }
  let test =[1,2,23,"Mahya",14]
  console.log(test);
  console.log(test[0]);
  console.log(test[3]);
  console.log(test[2]);
 

  function playRound(playSelection, computerSelection) {
    if (playSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playSelection === "rock" && computerSelection === "scissors") ||
      (playSelection === "paper" && computerSelection === "rock") ||
      (playSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      playerScoreEl.textContent = playerScore;
      return `You win! ${playSelection} beats ${computerSelection}`;
    } else {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      return `You lose! ${computerSelection} beats ${playSelection}`;
    }
  }
});
