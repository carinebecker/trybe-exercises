//  EXERCÍCIO 1

function checkPalindrome(param) {
    let newStr = param.split('').reverse('').join('')
    if (newStr === param) {
        return true
    } else {
        return false
    }
}

console.log(`It's palindrome? ${checkPalindrome('arara')}`)

// EXERCÍCIO 2

let values = [ 2, 3, 6, 7, 10, 1]

function majorValue(param) {
    let major = 0;
    let majorIndex = 0;
    for (let index = 0; index < param.length; index += 1) {
        if (param[index] > major) {
            major = param[index]
            majorIndex = index
        }
    }
    return majorIndex
}

console.log(`O índice do maior valor é ${majorValue(values)}`)

// EXERCÍCIO 3

let array = [2, 4, 6, 7, 10, 0, -3]

function minorValue(param) {
    let minor = 0;
    let minorIndex;
    for(index = 0; index < param.length; index += 1) {
        if(param[index] < minor) {
            minor = param[index]
            minorIndex = index
        }
    }
    return minorIndex
}

console.log(`O índice do menor valor é ${minorValue(array)}`)