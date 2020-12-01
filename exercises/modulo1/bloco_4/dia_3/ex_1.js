let n = 5;

let coluna = '';

for ( let index = 0; index < n; index += 1 ) {
    for ( let j = 0; j < n; j += 1 ) {
        coluna += '*'
    }
    console.log(coluna)
    coluna = ''
};
