let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EXERCÍCIO 1

console.log(numbers)

// EXERCÍCIO 2

let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index]
};

console.log('O resultado é ' + resultado + '.')

// EXERCÍCIO 3

let media = resultado / numbers.length

console.log('A média dos números é ' + media + '.')

// EXERCÍCIO 4

if (media > 20) {
    console.log('Valor maior que 20.')
} else {
    console.log('Valor menor ou igual a 20.')
}

// EXERCÍCIO 5

let maiorValor = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index]
    }
};

console.log('O maior valor é ' + maiorValor + '.');

// EXERCÍCIO 6

let numerosImpares = [];

for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0) {
        numerosImpares.push(numbers[index])
    }
}

if (numerosImpares != 0) {
    console.log('A quantidade de números ímpares é ' + numerosImpares.length + '.')
} else {
    console.log('Nenhum valor ímpar encontrado')
}

// EXERCÍCIO 7

let menorValor = numbers[0];

for (index = 0; index < numbers.length; index += 1) {
    if(numbers[index] < menorValor) {
        menorValor = numbers[index]
    }
}

console.log('O menor valor é ' + menorValor + '.')

// EXERCÍCIO 8

let until25 = [];

for (index = 1; index <= 25; index += 1) {
    until25.push(index)
}

console.log(until25)

// EXERCÍCIO 9

let dividedBy2 = [];

for (index = 0; index < until25.length; index += 1) {
    dividedBy2.push(until25[index] / 2)
}

console.log(dividedBy2)
