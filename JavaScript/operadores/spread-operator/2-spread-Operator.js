//se eu quiser que a função funcione com números indefinidos de argumentos citados como entrada.
// no método antes do ES6 era utilizar a variável arguments
//seria desta forma:
/*
function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
};

console.log(sum(5, 5, 5, 2, 3, 4, 7));
*/
// no ES6 ele trouxe o rest operator ... ele se escreve com 3 pontos
/*
function sum(...args) { //funciona parecido com arguments, porém o prototype é um array, e arguments o prototype é um objeto.
    console.log(args);
};
console.log(sum(5, 5, 5, 2, 3, 4, 7)); 
*/
//o rest operator alem dele trazer uma lista igual o arguments ele também já traz os métodos de array para você manipular os seus argumentos passados como entrada.
//agora os argumentos obtidos com o rest operator, me permite manipula-lo com os métodos de array comum, veja:
/*
function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 2, 3, 4, 7));
*/

// o rest operator pode ser utilizados para pegar parâmetros restantes
/*
function sum(a, b, ...rest) {
   console.log(a, b, rest);
}
console.log(sum(5, 5, 5, 2, 3, 4, 7));
*/

// spread operator ... ele se escreve com 3 pontos também, mas ele funciona diferente do rest operator. O rest operator pega todos os parâmetros de uma função e transforma em um array, e spread operator neste caso aqui ele vai pegar todos os itens do array e transformar em parâmetros para essa segunda função
/*
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {
    return multiply(...rest);
};
 console.log(sum( 2, 2, 2));
 // então eu consigo quebrar listas e passar como argumentos
 */

 // o spread operator não se limita a array, ele pode ser utilizado em strings, arrays, objetos literais e objetos iteraveis
 //spread operator tem a função de quebrar os itens e repassar para algum lugar
/*
const str = 'Digital';
function logArgs(...args) {
    console.log(args);
};
logArgs(...str);
*/
/*
const arr = [1, 2, 3, 4];
function logArgs(a, b, c,) {
    console.log(a, b, c);
}
logArgs(...arr);
*/