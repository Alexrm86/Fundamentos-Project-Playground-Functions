// Desafio 1


function compareTrue(number, number2) {

  if (number == true && number2 == true) {
    return true;


  } else {

    return false;

  }


}

console.log(compareTrue(true, false));




// Desafio 2

function calcArea(base, height) {

    
  valorArea = base * height / 2;

  if (base==51){
    base/2;
    
  }
  if(height==1){
    base/2;
  }
  return valorArea

  

} console.log(calcArea(51,1));

// Desafio 3
function splitSentence(separetor) {

    let separador = separetor.split(',');
    
    
    return separador

  }

console.log(splitSentence('go , Trybe'));

// Desafio 4
function concatName(Array) {

  let nome = Array[0];
  let ultimonome = Array[Array.length - 1];
  let variaveis = ultimonome.concat(nome);



  return variaveis


} console.log(concatName([', foguete', 'não', 'tem', 'ré']));




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
