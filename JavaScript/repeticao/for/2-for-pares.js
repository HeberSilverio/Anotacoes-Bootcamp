//Exibe os números pares 
function passandoPelosPares() {
    for (var i = 0; i < 7; i++) {
        if ((i % 2) === 0) {
                        console.log('aqui eu tenho o valor de ' + i);
        }
    }
}

passandoPelosPares(7); 

// para os desafios é necessário colocar o parseFloat(gets()) para receber a entrada.
let n = parseFloat(gets());

function numerosPares() {
    for (var i = 0; i <= n; i++) { // se não for incluir o zero basta que o index comece com 1
        if ((i % 2) === 0) {
                        console.log(i);
        }
    }
}

numerosPares(n);