const person = {
  name: 'Carine',
  lastName: 'Becker',
  fullName: function() {
    return `${this.name} ${this.lastName}`
  }
}
person.age = 28; // adiciona novo valor

console.log(person.fullName())
console.log(person.age)


// Object.keys
console.log(`As chaves do objeto são: ${Object.keys(person)}`);

// Object.values
console.log(`Os valores do objeto são: ${Object.values(person)}`);

// Object.entries 
console.log(`As entradas do objeto são: ${Object.entries(person)}`);

// Object.assign

let person2 = { };

// Object.assign(destino, objetoQueVaiSerCopiado)
Object.assign(person2, person);

console.log(`Person2: ${Object.entries(person2)}`)
