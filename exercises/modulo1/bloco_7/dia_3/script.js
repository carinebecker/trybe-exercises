// TESTES UNITÁRIOS

// TDD - Test Driven Development (Desenvolvimento orientado a testes)

// Implemente uma função summationOf(number) que recebe um numero inteiro e retorna o seu somatório

const assert = require('assert'); // o assert vem junto com o node.js

const summationOf = number => {
  let summation = 0;

  for (let index = 1; index <= number; index += 1) {
    summation += index;
  }

  return summation;
}

assert.strictEqual(typeof(summationOf), 'function'); // Verifica se a função existe
assert.strictEqual(summationOf(1), 1);
assert.strictEqual(summationOf(3), 6);
assert.strictEqual(summationOf(5), 14, 'O somatório de 5 deveria ser 15.');
