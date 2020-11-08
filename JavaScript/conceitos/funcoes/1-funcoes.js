function getName() {
    return 'Guilherme Cabrini da Silva';
}

function logFn(fn) { //função logFn recebe uma função por parâmetro
    console.log(fn()); //aplica um console.log no que esta função fn retornar
    // return fn()); - eu poderia também retornar a execução
    // return fn(); - ou até retornar apenas a argumentação da função.

const logFnRsult = logFn; //atribuir com uma variável

const objeto = { //atribuir por um objeto
    logFn: logFn
}

const array = [logFn] //atribuir por array

logFnResult(getName); //passada por argumento

//função de primeira classe:
//1. pode ser atribuída com uma variável
//2. pode ser atribuída por uma estrutura de dados (objetos, array)
//3. pode ser passada por argumento