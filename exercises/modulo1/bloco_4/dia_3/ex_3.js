let n = 5;

let coluna = '';


for (let index = 0; index < n; index += 1) {
    for (let j = 0; j < n; j += 1) {
        coluna += ' '
    } 
    coluna += '*'
    console.log(coluna)
    // coluna = ''
} 


// 
// let n = 5;
// let asteriscos = '';

// if (n > 1) {
//   for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
//     for (let indexColuna = 0; indexColuna < n; indexColuna += 1) {
//       if (indexColuna < n - (indexLinha + 1)) {
//         asteriscos += ' ';
//       } else {
//         asteriscos += '*';
//       }
//     }
//     console.log(asteriscos);
//     asteriscos = '';
//   }
// } else {
//   console.log('Valor inválido.');
// }
