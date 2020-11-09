// O grande objetivo do symbol é dinamicamente produzir um valor único e anônimo.
//Ele não permite sobrescrever as propriedades
const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

// Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Guilherme',
    [nameSymbol2]: 'Heber',
    lastName: 'Cabrini da Silva'
}

console.log(user);

// Symbols criam propriedades que não são enumeráveis
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedades do objeto user:', Object.keys(user));//não exibe Object.keys
console.log('Valores das propriedades do objeto user:', Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));
//como não aparece nem com Object.keys e também com Object.values, a solução é usar Object.getOwnPropertySymbols() para exibí-los

//Para acessar todas as propriedades do objeto use o método Reflect.ownKeys
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));

//Cria um enum 
const directions = {
    UP  : Symbol('UP'),
    DOWN : Symbol('DOWN'),
    LEFT : Symbol('LEFT'),
    RIGHT : Symbol('RIGHT')
};