// Console

// console.log('Black text');
console.warn('yellow text with alert');
console.error('Red error text');

console.trace();

console.group('My groupe');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My group');

console.assert(); //exibir uma mensagem de erro no console caso a asserção não passe.

console.time('Log time');
setTimeout(() => {
    console.timeEnd('Log time');
}, 2000);

console.table(['Celso Henrique', 'Digital Innovation One']);

console.log('%c styled log', 'color: blue; font-size: 40px');