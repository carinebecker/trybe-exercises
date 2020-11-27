let n = 4;

let coluna = '';

for ( let index = 1; index <= n; index += 1 ) {
    for ( let j = 1; j <= n; j += 1 ) {
        coluna += '*'
    }
    console.log(coluna)
    coluna = ''
};
