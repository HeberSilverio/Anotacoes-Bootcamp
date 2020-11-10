// Módulo (%) - Operador binário. Retorna o inteiro restante da divisão dos dois operandos
12 % 5 // retorna 2.

// Incremento (++) e Decremento (--)
++x
x++

//Qual a diferença?
const a = ++2; //se o operador vem primeiro, o a já vai receber o valor incrementado 3
const b = 2++; //se o operador vem depois, o b recebe o valor atual que é 2. Em ambos os casos será incrementado

--x
x--

// Negação (-) e Adição (+)
-3          //quando o menos esta junto ao número ele esta negando o 3, como -(3)
+"3"        // retorna 3 - o mais tem o poder de converter de string para numérico
+true       // retorna 1 - o mais força a conversão para numérico
+false      // retorna 0 - o mais força a conversão para numérico
-true       // retorna -1 - o menos força a conversão para numérico

// Operador de exponenciação (**)
2 ** 3      // retorna 8 - dois elevado a três
10 ** -1    // retorna 0.1 - dez elevado a menos um

// Operador de agrupamento ()
2 * (3 + 2) // eu preciso que três mais dois seja executado antes da multiplicação - e também é possível agrupar condicionais: por exemplo em um if é como dizer isso aqui é uma comparação e isso é outra.
