//Hoisting deve ser um dos motivos de ter o escopo de bloco como o let e const. 
//Hoisting significa levantar ou suspender algo. 
//Basicamente as declarações tanto de variáveis como de funções são elevadas ao escopo que ela se encontra (de bloco, função ou global).
//Podemos separar o hoisting em dois tipos:
//- variáveis -> neste caso só eleva a criação da variável, e não a sua atribuição.
//- funções -> neste caso é elevada ao topo como um todo, então você terá até a assinatura dela.




function fn() { //função fn
    console.log(text);//faz console.log de text uma variável que ainda não foi declarada e será declarada logo abaixo. Em outras linguagens você receberia um tipo de erro informando que esta variável não existe ainda.

    var text = 'Exemplo';//aqui a variável text foi declarada com valor de exemplo

    console.log(text);//imprime
}

fn();
//neste caso ele vai subir(içar) a declaração, e não vai retornar erro, apenas um undefined, dizendo que esta variável existe só que não foi definida ainda. E depois de declarada é retornado o valor exemplo.

/*
function fn() { // este também é um exemplo de hoisting
    var text; 
    console.log(text);

    text = 'Exemplo';

    console.log(text);
}
 */