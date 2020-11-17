var valor = ["-5", "0","-3","-4","12"]
/*let n1 = parseInt(gets()); //dessa maneira para os desafios
let n2 = parseInt(gets());
let n3 = parseInt(gets());
let n4 = parseInt(gets());
let n5 = parseInt(gets());
let valor = [n1,n2,n3,n4,n5];
*/
 var par = 0
 var impar = 0
 var positivo = 0
 var negativo = 0

 for(i = 0; i < valor.length; i++){
   if(valor[i] > 0){
     positivo++
   }
   if (valor[i] < 0){
     negativo++
   }
   if(valor[i]%2===0){
     par++
   }else{
     impar++
   }

 }
 console.log(par + " valor(es) par(es)")
 console.log(impar + " valor(es) impar(es)")
 console.log(positivo + " valor(es) positivo(s)")
 console.log(negativo + " valor(es) negativo(s)")