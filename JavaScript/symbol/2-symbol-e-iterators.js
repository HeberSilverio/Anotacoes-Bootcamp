// symbol é uma maneira de gerar um identificador único. E a maneira de gerar este identificar é invocando um symbol;
// const uniqueId = symbol(); basta invoca-lo igual a uma função.
// symbol não pode ser invocado utilizando new.
//const uniqueId = symbol('hello'); você pode passar um valor, mas este valor serve única e exclusivamente para debug, assim você saberá do que se trata aquele symbol mas não estará ligado ao seu valor de fato.
// symbol pode ser utilizado para gerar propriedades privadas, elas não serão inacessíveis, porém evita que não sejam acessadas se não for intencionalmente.
// const obj = {
//    [uniqueId]: 'Hello',
//};
//console.log(obj);
//se você utilizar Object.keys(obj); não irá ser demonstrado a propriedade;
//se você utilizar Object.getOwnPropertySymbols(obj); você verá a propriedade.
// é uma maneira de deixar claro para outros desenvolvedores que essa é uma propriedade que não se deve mexer.
// symbol possuem propriedades - well known symbols
// Symbol.iterator
// Symbol.split
// Symbol.toPrimitive
// Symbol.asyncIterator
/*
const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();

console.log(it);            //Object [Array Iterator] {}
console.log(it.next());     //{ value: 1, done: false }
console.log(it.next());     //{ value: 2, done: false }
console.log(it.next());     //{ value: 3, done: false }
console.log(it.next());     //{ value: 4, done: false }
console.log(it.next());    //{ value: undefined, done: true } quando terminou de percorrer ele retorna true, que significa que nesta estrutura a iteração acabou, e traz o valor indefinido. */ 
/*
const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
while (true) {
    let { value, done } = it.next();
    if (done) {
        break;
    }
    console.log(value);
}
*/
/*
const arr = [1, 2, 3, 4]; // no ecma6 já temos uma maneira mais simples sem precisar gerar o iterador, bastar dar um for of
for (let value of arr) {
    console.log(value);
}*/
/*
const str = 'Digital Innovation One';
for (let value of str) {
    console.log(value);
}
*/