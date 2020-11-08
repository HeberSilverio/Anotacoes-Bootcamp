//para aplicar a técnica, em cada parâmetro a gente cria uma nova função
function soma(a) { //na primeira função eu só recebo o "a"(primeiro parâmetro)
    return function(b){//o "a" retorna uma nova função que recebe o segundo parâmetro
        return a + b;
    }
}
const soma2 = soma(2);//ao executar soma2 ele retorna a função, e foi armazenado na variável


console.log(soma2(2));//ai soma2 é o primeiro parâmetro e segundo esta entre parênteses
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

//Explicação do Guilherme:
//Currying é a técnica de transformar uma função de vários parâmetros, em apenas uma função que recebe um parâmetro, e para cada parâmetro a gente vai retornando uma nova função.