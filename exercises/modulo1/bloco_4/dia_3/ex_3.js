let n = 5;

let column = '';

for (let indexRow = 0; indexRow < n; indexRow += 1) {
    for (let indexColumn = 0; indexColumn < n; indexColumn += 1) {
        if (indexColumn < n - (indexRow + 1)) {
            column += '-'
        } else {
            column += '*'
        }
    }
    console.log(column)
    column = ''
} 
