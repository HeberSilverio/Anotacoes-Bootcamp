function clicou(){
    document.getElementById("agradecer").innerHTML = "Obrigado por clicar";
    console.log(document.getElementById("agradecer"));
};

function redirecionar(){
    window.open("https://metodoafd.com.br");
    window.location.href = "https://google.com"
}

/*
function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(3, 2));
*/

/*let ArraydicionaryFruit = [{name:"maça", color:"vermelha"},{name:"uva", color:"roxo"},{name:"laranja"},{name:"melancia"},{name:"abacate"},{abacaxi:"yellow"}];
console.log(ArraydicionaryFruit);
console.log(ArraydicionaryFruit[2].color); //o ponto permite acessar a propriedade do objeto
console.log(ArraydicionaryFruit[5].name); */


/*let dicionaryFruit = {name:"maça", color:"vermelha"}
console.log(dicionaryFruit);
console.log(dicionaryFruit.color); //o ponto permite acessar a propriedade do objeto
console.log(dicionaryFruit.name); */

/*
var lista = ["maça", "pera", "laranja"];
lista.push("uva","melancia","abacate","abacaxi");
console.log(lista);
console.log(lista[0]); //mostra a primeira posição do array
//lista.pop(); //remove the last element from lista
console.log(lista); //mostra o conteúdo da variável
console.log(lista.length); //mostra o comprimento ou tamanho 
console.log(lista.reverse()); //mostra a lista de forma reversa
console.log(lista.toString()[16]); //transforma para string e separa com virgulas
console.log(lista.join(" - ")); //transforma em string e tem a opção de escolher o que vem entre as string
*/
/* var nome = "Heber";
var n1 = 29;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(idade +  idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão", "Brasil")); //substitui palavras na string
//alert(frase.replace("mundo","Asia")); //replace substitui string no alert
console.log(frase.toLocaleUpperCase()); */

//var idade = prompt("Qual a sua idade?"); //prompt abre campo para receber dados
/*
if (idade >= 18) {
    console.log("Completou e é Maior de idade");
}else{
    console.log("menor de idade");
}



while (idade < 18){
    console.log(idade);
    idade++;
};


for(idade = prompt("Qual a sua idade"); idade >= 18; idade--){
    console.log(idade);
};

var data = new Date();

if (data.getMonth() == 10) {
    console.log("outubro")
}else{
console.log(data);
}
//var mes = data.getMonth();
for(mes = data.getMonth(); mes < 20; mes++) {
    console.log(mes);
}

//console.log(data.getMonth()+1);
//console.log(24 - data.getHours());*/
