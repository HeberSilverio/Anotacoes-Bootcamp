//escopo global
//uma variável criada aqui será atribuída como global

{
    //escopo de bloco
    //só de abrir fechar chaves já é um escopo de bloco
}

function test() {
    //escopo de função
}

//é importante entender isso, para quando for criar variáveis, não interferir em outras variáveis
//teremos escopo dentro de:
//- if () {}
//- for () {} e etc

//var não respeito o escopo de bloco. Ele só vai aceitar o escopo global ou escopo de função.
//let e const vão respeitar
