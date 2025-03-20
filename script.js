const getNumber = () => {
  let givenNumber = parseFloat(prompt("Rentrez un chiffre"));
  if (isNaN(givenNumber)) {
    alert("Veuillez rentrer un chiffre valide");
    return getNumber();
  }
  return givenNumber;
};

// console.log(`le chiffre rentrez est : ` + getNumber());
let givenNumber = getNumber();
