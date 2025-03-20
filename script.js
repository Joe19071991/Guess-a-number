const getNumber = () => {
  const givenNumber = parseFloat(prompt("Rentrez un chiffre"));
  if (isNaN(givenNumber)) {
    alert("Veuillez rentrer un chiffre");
    return null;
  }
  return givenNumber;
};

console.log(`le chiffre rentrez est : ` + getNumber());
