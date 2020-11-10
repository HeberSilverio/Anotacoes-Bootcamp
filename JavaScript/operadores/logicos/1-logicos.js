// AND lógico (&&) no português é e
exp1 && exp2

//caso a primeira expressão seja falsa o && retorna a primeira, 
var a1 = true && true;      // t && t retorna true
var a2 = true && false;     // t && f retorna false //se a comparação for do tipo boolean ele vai retorna o false nesta condição
var a3 = false && true;     // f && t retorna false
var a4 = false && (3 == 4); // f && f retorna false
var a5 = "Gato" && "Cão";   // t && t retorna Cão
var a6 = false && "Gato";   // f && t retorna false //neste caso se o primeiro valor é falso o a6 não recebe a string, vai receber o boolean
var a7 = "Gato" && false;   // t && f retorna false

// OU lógico (||)
exp1 || exp2
// no OU se a primeira for false ele retorna a segunda
var o1 = true || true;      // t || t retorna true
var o2 = false || true;     // f || t retorna true
var o3 = true || false;     // t || f retorna true
var o4 = false || (3 == 4); // f || f retorna false
var o5 = "Gato" || "Cão";   // t || t retorna gato
var o6 = false || "Gato";   // f || t retorna gato
var o7 = "Gato" || false;   // t || f retorna gato

// NOT lógico (!) - basicamente nega a condição
!exp1

var n1 = !true;     //!t retorna false
var n2 = !false;    //!f retorna true
var n3 = !"Gato";