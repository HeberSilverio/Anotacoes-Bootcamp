//let valor = parseInt(gets());
/*
let valor = 86//parseInt(gets());
const notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00];

console.log(valor)

notas.forEach((item, index) => {
    const div = Math.trunc(valor / notas[index])
    valor = valor % notas[index]
    console.log(div + ' notas(s) de R$ ' + notas[index].toFixed(2))
})*/

let valor = 86// parseInt(gets());
const notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00];

for (i = 0; i < notas.length; i++){
    let resultado = parseInt(valor / notas[i]);

    valor -= resultado * notas[i];
    console.log(resultado + " nota(s) de R$ " + notas[i] +",00" );
}
