// const getNumber = () => {
//   let givenNumber = prompt("Rentrez un chiffre");
//   let inputValue = parseFloat(givenNumber);

//   if (isNaN(inputValue)) {
//     alert("Veuillez rentrer un chiffre valide");
//     return getNumber();
//   }
//   return inputValue;
// };

// // console.log(`le chiffre rentrez est : ` + getNumber());

// const didIWin = (givenNumber) => {
//   const numberToGuess = 22;
//   if (givenNumber < numberToGuess) {
//     alert("Plus grand");
//     gamePlay();
//   } else if (givenNumber > numberToGuess) {
//     alert("Plus petit");
//     gamePlay();
//   }
//   alert("Bavo ! Vous avez deviné le chiffre !");
//   return true;
// };

// // console.log(didIWin(22));

// const gamePlay = () => {
//   let givenNumber = getNumber();
//   didIWin(givenNumber);
// };

// gamePlay();
let numberToGuess;
let attempts = 0;
let minRange = 0;
let maxRange = 50;

const getNumber = () => {
  let givenNumber = prompt("Rentrez un chiffre");
  let inputValue = parseFloat(givenNumber);

  if (isNaN(inputValue)) {
    alert("Veuillez rentrer un chiffre valide");
    return getNumber();
  }
  return inputValue;
};

const startGame = () => {
  numberToGuess = getNumber();
  while (numberToGuess < 0 || numberToGuess > 50) {
    alert("Le nombre doit être entre 0 et 50. Réessayez :");
    numberToGuess = getNumber();
  }
  updateRange();
};

const didIWin = (givenNumber) => {
  if (givenNumber < numberToGuess) {
    alert("Plus grand");
    return false;
  } else if (givenNumber > numberToGuess) {
    alert("Plus petit");
    return false;
  }
  alert("Bravo ! Vous avez deviné le chiffre !");
  return true;
};

const makeGuess = () => {
  const guessInput = document.getElementById("guessInput");
  const guess = parseFloat(guessInput.value);
  attempts++;
  document.getElementById("attempts").innerText = `Tentatives : ${attempts}`;

  if (isNaN(guess) || guess < minRange || guess > maxRange) {
    alert(
      `Le nombre proposé n'est pas dans le range. Range actuel : ${minRange} < ? < ${maxRange}`
    );
    return;
  }

  if (didIWin(guess)) {
    document.getElementById("game").innerHTML =
      "<h2>Bravo ! Vous avez deviné le bon chiffre !</h2>";
  } else {
    if (guess < numberToGuess) {
      minRange = guess;
    } else {
      maxRange = guess;
    }
    updateRange();
  }

  guessInput.value = "";
};

const updateRange = () => {
  document.getElementById("range").innerText = `${minRange} et ${maxRange}`;
};

startGame();
