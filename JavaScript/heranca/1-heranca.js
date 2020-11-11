// O prototype contem a definição do objeto


'use strict';
const myText = 'Hello prototype!';
myText.split(''); // <- de onde vem esse "split"? 

'use strict';
console.log(String.prototype.split); //a função split nada mais é que o split que é carregado no prototype da função construtora String

//a criação da variável const myText esta usando a função construtora string


'use strict'; //essa é a mesma variação das linhas anteriores
const myText = String('Hello prototype!');
console.log(myText.__proto__.split);
// f split() { [native code] }
//estamos usando uma função construtora string. Toda função construtora tem um prototype atrelado a ela. E todas as vezes que você cria uma variável a partir de função construtora, você vai ter essa referência do __proto__ atrelado a ela.


'use strict'; 
const myText = String('Hello prototype!');
console.log(myText.__proto__.split === String.prototype.split); // true
// se eu comparar o proto split ele vai ser igual a função split dentro do prototype da função construtora String. Basicamente o proto aponta para o prototype de string

//se esta comparação é verdadeira eu posso assumir que o constructor do myText é string então ambas retorna verdadeiro
'use strict'; 
const myText = String('Hello prototype!');
console.log(myText.__proto__.split === String.prototype.split);
// true
console.log(myText.constructor === String);
// true

__proto__ -> prototype -> constructor
//o proto aponta para um prototype e este prototype é criado a partir de um constructor de uma função construtora.

//então quando eu estou fazendo const myText que recebe uma string 'Hello prototype!, eu estou dizendo que constructor do myText é uma string, e o proto dele vai ser igual a string prototype
const myText = 'Hello prototype!';
myText.constructor -> String
myText.__proto__ -> String.prototype

'use strict'; 
function Animal() {}
console.log(Animal.constructor);
// f Function() { [native code] }


//Exemplos
'use strict'; 
function Animal() {
    this.qtdPatas = 4;
}
const cachorro = new Animal();
console.log(cachorro.qtdPatas);

//Exemplos
new Foo(...);
/*
O que ocorre?
1 - Um novo objeto é criado, herdando Foo.prototype
2 - A função construtora Foo é chamada com os argumentos especificados e com o `this` vinculado ao novo objeto criado.
3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu `return`. Senão, será retornado o objeto criado no passo 1.
*/
//exemplo:
function Pessoa(name) {
    this.name = name;
}
const p = new Pessoa('Guilherme');
console.log(p);

//Exemplo quando a função construtora tem um retorno explícito
function Pessoa(name) {
    this.name = name;   //o console.log não retornou o objeto criado pelo operador new
                        //o console.log imprimiu o que foi criado no return devido termos um retorno explícito
    return {
        name: 'Teste' 
    };
}
const p2 = new Pessoa('Guilherme'); 

console.log(p2);
// retornou name: "Teste"