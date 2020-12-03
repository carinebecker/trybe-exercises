/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
*/

//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) 
function changeText() {
    document.getElementsByTagName('p')[1].innerText = '2 anos mais velha. Ganhando milhõooes. 💰'
}
changeText();

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeSquareColor() {
    document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109'
}
changeSquareColor();

// Crie uma função que mude a cor do quadrado vermelho para branco. 
function changeInnerSquareColor() {
    document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white'
}
changeInnerSquareColor();

// Crie uma função que corrija o texto da tag <h1>.
function correctText() {
    document.getElementsByTagName('h1')[0].innerText = 'Exercício 1 - JavaScript'
}
correctText();

//   Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function upperCase() {
    const paragraph = document.getElementsByTagName('p');
    for (let index = 0; index < paragraph.length; index += 1) {
        paragraph[index].style.textTransform = 'uppercase'
    }
}
upperCase();

//   Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function printParagraph() {
    const paragraph = document.getElementsByTagName('p')
    for (let index = 0; index < paragraph.length; index += 1) {
        console.log(paragraph[index].innerText)
    }
}
printParagraph();
