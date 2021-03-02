// SPREAD OPERATOR (...)
// "Espalha" os elementos do array

const array = ['Carine', 'Carlos', 'Zakk'];
console.log(...array);

// ---------------------
const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of steel'];

const books = [...horrorBooks, ...scifiBooks]; // Espalha e junta os dois arrays
console.log(books);

// --------------------
const point = [1.0, 2.2, -6.6];
const otherPoint = [0.1, 3.5, -99.6];

printPointCoordinates = (x, y, z) => `Point coordinates are x = ${x}, y = ${y} and z = ${z}.`;
console.log(printPointCoordinates(...point)) // Pode usar o spread nos parametros da função quando ela é chamada.
console.log(printPointCoordinates(...otherPoint))

// PARÂMETRO REST (...)
// Tem a mesma sintaxe do spread, mas é colocado direto no parâmetro da função, permitindo que sejam passados inúmeros parâmetros.




