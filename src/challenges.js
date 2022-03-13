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

function calcArea (base, height) {
for(let index=0;index<=2;index=+1){
  let valorArea = base =(10,5,51); height =(50,2/2,2);
      valorArea= base[index] * height[index] / 2;

}
  
       return valorArea
    


}console.log(calcArea())
  // Desafio 3
  function splitSentence() {
    let separator = 'go,Trybe'.split(' ');
    let vamos = 'vamos que vamor'.split(' ');
    let unico = 'foguete'.split(' ')
    return {separator, vamos, unico};

  }
  console.log(splitSentence());

  // Desafio 4
  function concatName(Array) {
    
    let space =[', foguete', 'não', 'tem', 'ré']
    let array = [', Lucas', 'Cassiano','Ferraz', 'Paolillo'];
    let navio =[', captain', 'my', 'captain'];
    let oceano= navio[0];
    let mar= navio[navio.length-1];
    let objt3 = mar.concat(oceano).split(' , ')
    let name = array[0];
    let lastname = array[array.length-1];
    let obj = lastname.concat(name).split(' , ')
    let primeiro = space[0];
    let ultimo = space[space.length-1]
    let obj1 =ultimo.concat(primeiro).split(',')

    return {obj,obj1, objt3}; 


  }console.log(concatName());




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
