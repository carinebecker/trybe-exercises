let piece = 'peão';

let pieceTLC = piece.toLowerCase()

switch (pieceTLC) {
    case 'torre':
        console.log('Movimentos ortogonais.');
        break;
    case 'bispo':
        console.log('Movimentos diagonais.');
        break;
    case 'dama':
        console.log('Todos os movimntos quantas casa quiser.');
        break;
    case 'rei':
        console.log('Todos os movimentos somente uma casa por vez.');
        break;
    case 'cavalo':
        console.log('Movimentos em L.');
        break;
    case 'peão':
        console.log('Coluna (vertical) somente para a frente e uma casa.');
        break;
        default:
            console.log('Peça não encontrada.')
}
