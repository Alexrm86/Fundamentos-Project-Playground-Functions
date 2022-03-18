// Desafio 11
function generatePhoneNumber(numbers) {
    if (numbers.length !== 11) {
        return "Array com tamanho incorreto."
    }
    let maisVezesRepetido = 0;
    for (let indice in numbers) {
        let valorRepetido = 0;
        for (let indice2 in numbers) {
            if (numbers[indice] === numbers[indice2]) {
                valorRepetido += 1;
            }
        }
        if (valorRepetido > maisVezesRepetido) {
            maisVezesRepetido = valorRepetido;
        }
        if (numbers[indice] < 0 || numbers[indice] > 9 || valorRepetido >= 3) {
            return "não é possível gerar um número de telefone com esses valores";
        }
    }

    let numeroTelefone = []
    numeroTelefone.length = 15;
    numeroTelefone[0] = '(';
    numeroTelefone[1] = numbers[0];
    numeroTelefone[2] = numbers[1];
    numeroTelefone[3] = ')';
    numeroTelefone[4] = ' ';
    numeroTelefone[5] = numbers[2];
    numeroTelefone[6] = numbers[3];
    numeroTelefone[7] = numbers[4];
    numeroTelefone[8] = numbers[5];
    numeroTelefone[9] = numbers[6];
    numeroTelefone[10] = '-';
    numeroTelefone[11] = numbers[7];
    numeroTelefone[12] = numbers[8];
    numeroTelefone[13] = numbers[9];
    numeroTelefone[14] = numbers[10];
    return numeroTelefone.join('');

}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    // seu código aqui
    if ((lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) &&
        ((lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineC)))) {
        return false;
    } else {
        return true;
    }
}

// Desafio 13
function hydrate(pedido) {
    // seu código aqui
    let regex = /\d+/g;
    let matches = pedido.match(regex);
    let numbers = 0;
    let sum = 0;
    for (let indice in matches) {
        numbers = parseFloat(matches[indice]);
        sum += numbers;
    }
    if (sum == 1) {
        return (sum.toString() + " copo de água")
    } else
        return (sum.toString() + " copos de água")
}


module.exports = {
    generatePhoneNumber,
    hydrate,
    triangleCheck,

};