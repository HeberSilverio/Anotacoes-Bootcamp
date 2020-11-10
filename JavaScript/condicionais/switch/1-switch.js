/*
switch (expressão) {
    case valor1:
        console.log();
        break;
    case valueN:
        console.log();
        break;

    default:
        break;
}
*/

const fruit = 'pera';

switch (fruit) {
    case 'banana':
        console.log('R$ 3,00 / kg');
        break;
    case 'mamão':
    case 'abacate':
    case 'pera': //neste caso as 3 frutas terão o mesmo valor, e não será preciso colocar o break
        console.log('R$ 2,00 / kg');
        break;//se tirar esse break aparecerá o console.log() anterior e também do default 
    default:
        console.log('Produto não existe no estoque.');
        break;
}