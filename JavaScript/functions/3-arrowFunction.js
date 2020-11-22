//funções podem ser anônimas quando atribuídas a uma variável ou quando passadas como parâmetros de outra função.
/*
var sum = function(a, b){
    return a + b;
};
console.log(sum(5, 5));
*/
//Arrow functions - são funções anônimas
// =>
//pode se omitir a palavra function
//pode se omitir o return se o lado direito for apenas uma expressão
/*
var sum = (a, b) => a + b;
console.log(sum(5, 15));
*/
// caso não for apenas uma expressão e você for utilizar um retorno a uma variável ou laços etc é necessário colocar {} para a parte de retorno.
/*
var sum = (a, b) => {
    var x = a + b;
    if (a > b) {
    }
        return x;
    }
console.log(sum(5, 20));
*/
//Se existir apenas um parâmetro eu posso omitir os parênteses ()
/* 
var sum = a => a ;
console.log(sum(3));
*/
//para declarar objetos literais é utilizando chaves também
/*
var obj = {
    text: '123' //esta é uma propriedade do objeto
};
*/
// retorno implícito de um objeto é necessário colocar parênteses em volta
/*
var createObj = () => ({ teste: 123 }); 
console.log(createObj());
*/
// você pode construir objetos através de funções construtoras
/*
function Car() {
    this.foo = 'bar'
};
console.log(new Car());
*/

//Porém você não pode fazer o mesmo utilizando arrow function
/*
function Car = () => {
    this.foo = 'bar'
};
console.log(new Car()); //retorna que car não é construtor
*/

// a característica de hoisting de invocar a função antes mesmo dela ser declarada não funciona com arrow function
/*
var obj = {
    showContext: function showContext() {
        console.log(this);
    },
    log: function log(value) {
    console.log(value);
    }
};
obj.showContext(); // neste caso ele fez uma referência a ele mesmo
*/
/*
var obj = {
    showContext: function showContext() {
       this.log('teste');
    },
    log: function log(value) {
    console.log(value);
    }
};
obj.showContext(); // neste caso funcionou corretamente porque esta referenciando ao próprio objeto
*/
/*
var obj = {
    showContext: function showContext() {
       this.log('teste');
    
       setTimeout(
           function() {
               console.log(this);
           }.bind(this),   //bind permite que você fixe o contexto da função
           1000
       );
    },
    log: function log(value) {
    console.log(value);
    }
};
obj.showContext();
*/
// era utilizado armazenar o contexto em uma variável
/*
var obj = {
    showContext: function showContext() {
      var _that = this; //neste caso armazenou em _that
    
       setTimeout(
           function() {
              _that.log('after 1000ms');
           }, 1000);   //bind permite que você fixe o contexto da funçã
    },
    log: function log(value) {
    console.log(value);
    }
};
obj.showContext();
*/

// arrow function resolveu este problema
/*
var obj = {
    showContext: function showContext() {
      // this = obj
    
       setTimeout(() => {
              this.log('after 1000ms');
           }, 1000);   //bind permite que você fixe o contexto da funçã
    },
    log: function log(value) {
    console.log(value);
    }
};
obj.showContext();
*/
// isso funciona porque arrow function tem a propriedade de ter o contexto igual ao código que envolve ele.
//Se você observar a chaves ao redor de uma arrow function você sabe que o this dele vai referenciar estas chaves, que é chamado de contexto léxico.
// com isso não é mais necessário armazenar o this em variáveis ou utilizar o bind