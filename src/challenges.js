// Desafio 1


function compareTrue(number, number2) {

  if (number == number2) {

    return true;


  } else {

    return false;

  }


}

console.log(compareTrue(false, false));




// Desafio 2

function calcArea(base, height) {
  base = [10, 5, 51];
  height = [50, 2 / 2, 2];
  for (let index = 0; index < base.length; index = +1) {

    for (let index = 0; index < height; index = +1) {

      let valorArea = base * height / 2;
      return valorArea;
    }
  }


// Desafio 3
function splitSentence() {
  let separator =['go Trybe'].splice(" ");
  return separator;
}console.log(separator);

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
