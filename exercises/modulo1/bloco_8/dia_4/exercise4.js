// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

const assert = require('assert');
const { count } = require('console');

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

const bornIn20c = (year) => year >= 1900 && year <= 1999; // valida se o valor de year corresponde as condições
const isAustralian = (nationality) => nationality === "Australian"; // valida se o valor de nationality corresponde as condições
const filterPeople = () => people.filter(({ bornIn, nationality }) => { 
    return bornIn20c(bornIn) && isAustralian(nationality); // O bornIn e nationality é desestruturado nos parâmetros, seu valor referente a current person é comparado e validado
  });

const filteredPeople = filterPeople(people)

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })
