let arr = [3, 5, 7]; //cria Array
arr.foo = "hello"; //como Array e função é tudo objeto, conseguimos colocar propriedade

for (let i in arr) {    //o for in vai mostrar cada propriedade
    console.log(i);     // logs "0", "1", "2", "foo" // i é index
}

for (let i of arr) {    //já o for off só mostra o valor de propriedade enumeradas, por isso não mostrará foo
    console.log(i);     // logs "3", "5", "7", 
}