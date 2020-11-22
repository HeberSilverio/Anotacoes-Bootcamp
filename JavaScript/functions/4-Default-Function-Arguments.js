// a sinal = atribui um valor default para o parâmetro, e neste caso se ele não fosse atribuído a function ainda funcionaria com o valor default atribuído.
/*
function multiply(a = 2, b = 1) {
    return a * b;
}
console.log(multiply(undefined, 5));
*/

// lazy evaluation
// digamos que eu queira um número randômico 
/*
function randomNumber() {
    console.log('Generating a random number...');
    return Math.random() * 10;
}
function multiply(a, b = randomNumber()) {
    return a * b;
}
console.log(multiply(5)); // neste caso deixei de passar um parâmetro
console.log(multiply(5));
*/
/*
var obj = {
    sum: function sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum(1, 5));
*/
var obj = {
    sleep: function() {
      setTimeout(() => {
        console.log(this);
      }, 1000);
    }
  }
  
 console.log(obj.sleep());