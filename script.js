const getNumber = () => {
  let givenNumber = prompt("Rentrez un chiffre");
  let inputValue = parseFloat(givenNumber);

  if (isNaN(inputValue)) {
    alert("Veuillez rentrer un chiffre valide");
    return getNumber();
  }
  return inputValue;
};

// console.log(`le chiffre rentrez est : ` + getNumber());

const didIWin = (givenNumber) => {
  const numberToGuess = 22;
  if (givenNumber < numberToGuess) {
    alert("Plus grand");
    gamePlay();
  } else if (givenNumber > numberToGuess) {
    alert("Plus petit");
    gamePlay();
  }
  alert("Bavo ! Vous avez deviné le chiffre !");
  return true;
};

// console.log(didIWin(22));

const gamePlay = () => {
  let givenNumber = getNumber();
  didIWin(givenNumber);
};

gamePlay();
