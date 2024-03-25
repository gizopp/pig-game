let diceNumber;
let activePlayer = 1;
let score;

function generateDiceNumber() {
  diceNumber = Math.floor(Math.random() * 6) + 1;
}

function hideDices() {
  for (i = 1; i < 7; i++) {
    if (!containsHidden("img-dice-" + i)) {
      addHidden("img-dice-" + i);
    }
  }
}

function containsHidden(id) {
  document.getElementById(id).classList.contains("hidden");
}

function addHidden(id) {
  document.getElementById(id).classList.add("hidden");
}

function removeHidden(id) {
  document.getElementById(id).classList.remove("hidden");
}

function playerWins() {
  document.getElementById("player-wins").textContent = `Player ${activePlayer} wins!`
  removeHidden("player-wins");
  removeHidden("trophy");
  hideDices();
}

function newGame() {
  for (i = 1; i < 3; i++) {
    document.getElementById("current-score-p" + i).textContent = 0;
    document.getElementById("player-" + i + "-score").textContent = 0;
  }
  hideDices();
  addHidden("trophy");
  addHidden("player-wins");
}

function resetPlayer() {
  document.getElementById("current-score-p" + activePlayer).textContent = 0;
}

function changePlayer() {
  activePlayer = activePlayer === 1 ? 2 : 1;
}

function sumCurrentScore() {
  let currentScore = document.getElementById("current-score-p" + activePlayer);
  currentScore.textContent = parseInt(currentScore.textContent) + diceNumber;
}

function holdDice() {
  let score = document.getElementById("player-" + activePlayer + "-score");
  let currentScore = document.getElementById("current-score-p" + activePlayer);
  let sumScore = parseInt(score.textContent) + parseInt(currentScore.textContent);
  score.textContent = sumScore < 100 ? sumScore : 100;
  resetPlayer();
  if (sumScore >= 100) {
    playerWins()
  } else {
    changePlayer();
  } 
}

function rollDice() {
  generateDiceNumber();
  hideDices();

  switch (diceNumber) {
    case 1:
      resetPlayer();
      changePlayer();
      removeHidden("img-dice-1");
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      removeHidden("img-dice-" + diceNumber);
      sumCurrentScore();
      break;
  }
}
