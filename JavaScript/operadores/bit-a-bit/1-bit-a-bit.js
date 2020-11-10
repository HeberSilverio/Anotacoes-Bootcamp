//Operadores bit a bit tratam seus operandos como um conjunto de 32 bits (zeros e uns), em vez de tratá-los como números decimais, hexadecimais ou octais. Por exemplo, o número decimal nove possui uma representação binária 1001. Operadores bit a bit realizam suas operações nestas representações, mas retornam valores numéricos padrões do JavaScript.

//A tabela a seguir resume os operadores bit a bit do JavaScript.

//Operadores bit a bit
//Operador	Expressão	Descrição
//AND	a & b	            Retorna um 1 para cada posição em que os bits da posição correspondente de ambos operandos sejam uns.
//OR	a | b	            Retorna um 0 para cada posição em que os bits da posição correspondente de  ambos os operandos sejam zeros.
//XOR	a ^ b	            Retorna um 0 para cada posição em que os bits da posição correspondente são os mesmos.

                            //[Retorna um 1 para cada posição em que os bits da posição correspondente sejam diferentes.]

//NOT	~ a	Inverte os bits do operando.
//Deslocamento à esquerda	a << b	Desloca a em representação binária b bits à esquerda, preenchendo com zeros à direita.
//Deslocamento à direita com propagação de sinal	a >> b	Desloca a em representação binária b bits à direita, descartando bits excedentes.
//Deslocamento à direita com preenchimento zero	a >>> b	Desloca a em representação binária b bits à direita, descartando bits excedentes e preenchendo com zeros à esquerda.