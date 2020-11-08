function init() { //tenho a função init
    const exemplo = 'Essa variável'; //crio uma variável que chama exemplo

    return function() { //a função init retorna outras funções
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);

        return function() {
            console.log(`2 - O valor da variável exemplo é: ${exemplo}.`);

            return function() {
                console.log(`3 - O valor da variável exemplo é: ${exemplo}.`);
            } //todas as funções de retorno utilizaram o valor da variável exemplo
        }
    }
}

const initFn1 = init();//executa a função init e traz todos os retornos

const initFn2 = initFn1();//faz uma cadeia de execução

const initFn3 = initFn2();

initFn3();

//é interessante conhecer mas na prática é bom evitar isso, porque em projetos grandes você pode esquecer de onde vem cada variável. O ideal é sempre que possível trabalhar com funções puras.
 
//Funções puras - basicamente é uma função que recebe um parâmetro e retorna alguma coisa.

//CLOSURE tradução Clausura (Local fechado. Situação de quem não pode sair do claustro; internamento, encerramento).

//Closure - Algumas linguagens tem isso, por exemplo no python. Também pode ser conhecido como escopo léxico. 
//- É a capacidade de uma função lembrar do ambiente em que ela foi criada.
//- É uma função que referencia variáveis livres no contexto léxico. Uma clausura ocorre normalmente quando uma função é declarada dentro do corpo de outra, e a função interior referencia variáveis locais da função exterior.

//No JavaScript temos 3 tipos de escopo:
//- Global
//- De função
//Com a inclusão do let e const temos também:
//- Escopo de bloco 