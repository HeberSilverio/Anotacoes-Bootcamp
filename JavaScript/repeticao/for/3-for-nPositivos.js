let n1 = parseFloat(gets());
let n2 = parseFloat(gets());
let n3 = parseFloat(gets());
let n4 = parseFloat(gets());
let n5 = parseFloat(gets());
let n6 = parseFloat(gets());

let valores = [n1,n2,n3,n4,n5,n6];
var total = 0

for(i=0; i < valores.length; i++){
  if(valores[i] > 0){
    total++
  }
}
console.log(total + " valores positivos")