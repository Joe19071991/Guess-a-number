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
let givenNumber = getNumber();
