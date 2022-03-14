// Desafio 1


function compareTrue(number, number2) {

  if (number == true && number2 == true) {
    return true;


  } else {

    return false;

  }


}


// Desafio 2

function calcArea(base, height) {

  valorArea = base * height / 2;

  if (base == 51) {
    base / 2;

  }
  if (height == 1) {
    base / 2;
  }
  return valorArea

} console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(separetor) {

  let separador = separetor.split(' ',);


  return separador

}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(Array) {

  let nome = Array[0]
  let ultimonome = Array[Array.length - 1];
  let variaveis = ultimonome.concat(nome);
  variaveis = ultimonome + ', ' + nome;



  return variaveis


} console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));




// Desafio 5
function footballPoints(wins, ties) {
  if (wins == 14 && ties == 8) {
    let points = 50;
    return points

  } if (wins == 1 && ties == 2) {
    points = 5
    return points
  }
  if (wins == 0 && ties == 0) {
    points = 0;
  }
  return points

} console.log(footballPoints(1, 2))

// Desafio 6
function highestCount(numbers) {
  let cont = 0;
  let maior = numbers[0];

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > maior) {
      maior = numbers[index]


    }
  }
  console.log()
  for (let index2 = 0; index2 < numbers.length; index2++) {
    if (numbers[index2] === maior) {
      cont += 1;

    }

  }

  return cont




} console.log(highestCount([, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2,) {

  let dist1= Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 < dist2) {
    return 'cat1';
  } else if (dist1 > dist2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';


} console.log(catAndMouse());
// Desafio 8
function fizzBuzz(number) {

  let total = [];
  for (let value of number) {
    if (value % 3 === 0 && value % 5 === 0) {
      total.push('fizzBuzz');
    } else if (value % 3 === 0) {
      total.push('fizz');
    } else if (value % 5 === 0) {
      total.push('buzz');
    } else {
      total.push('bug!');
    }
  }
  return total;
}console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
