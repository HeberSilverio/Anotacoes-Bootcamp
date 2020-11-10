// Spread ...
var partes = ['ombro','joelhos'];
var musica = ['cabeça', ...partes,'e', 'pés']; //...partes esta inserindo ombro e joelhos no array musica

function fn(x, y, z) {}
var args = [0, 1, 2];
fn(...args); //neste caso esta passando o array args da linha anterior
