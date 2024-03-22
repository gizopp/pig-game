let diceNumber;
let activePlayer = 1;
let score;

function generateDiceNumber() {
  diceNumber = Math.floor(Math.random() * 6) + 1;
}

function resetChangePlayer() {
  document.getElementById("current-score-p" + activePlayer).textContent = 0;
}

function changePlayer() {
  activePlayer = activePlayer === 1 ? 2 : 1;
}

function sumCurrentScore() {
  console.log(
    document.getElementById("current-score-p" + activePlayer).textContent
  );
  document.getElementById("current-score-p" + activePlayer).textContent +=
    diceNumber;
}

function holdDice() {
  console.log(
    document.getElementById("current-score-p" + activePlayer).textContent
  );
  changePlayer();
}

function rollDice() {
  generateDiceNumber();

  for (i = 1; i < 7; i++) {
    if (
      !document.getElementById("img-dice-" + i).classList.contains("hidden")
    ) {
      document.getElementById("img-dice-" + i).classList.add("hidden");
    }
  }

  switch (diceNumber) {
    case 1:
      resetChangePlayer();
      document.getElementById("img-dice-1").classList.remove("hidden");
      break;
    case 2:
      document.getElementById("img-dice-2").classList.remove("hidden");
      break;
    case 3:
      document.getElementById("img-dice-3").classList.remove("hidden");
      break;
    case 4:
      document.getElementById("img-dice-4").classList.remove("hidden");
      break;
    case 5:
      document.getElementById("img-dice-5").classList.remove("hidden");
      break;
    case 6:
      document.getElementById("img-dice-6").classList.remove("hidden");
      break;
  }

  if (!diceNumber == 1) {
    sumCurrentScore();
  } else {
    resetChangePlayer();
  }
}
