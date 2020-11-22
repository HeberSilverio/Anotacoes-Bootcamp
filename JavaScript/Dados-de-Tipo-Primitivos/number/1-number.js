const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string:', numberAsString) //transformou o myNumber para o tipo string. O valor é 12.4032 mas o tipo é string. Veja:
console.log(typeof numberAsString); //Ele continua tendo o valor, mas o tipo dele é uma string

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);//com toFixed você estabelece a quantidade de casas decimais
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

// Transforma uma string em float
console.log('\nString parseada para float:', parseFloat('13.22'));//parseFloat permite casas decimais
console.log(typeof parseFloat('13.22')); 

// Transforma uma string em inteiro
console.log('\nString parseada para int:', parseInt('13.20'));//parseInt permite casas decimais
console.log(typeof parseInt('13.20')); 

//No tipo de número só temos o type number, não existe os tipos inteiros ou decimais (Int, Float)

console.log('\nString parseada para float:', parseFloat('13.20'));
console.log('\nString parseada para float, mostrando o zero:', parseFloat('13.20').toFixed(2));//Casas decimais terminadas com zero não são apresentadas. Se você precisa que apareça o zero é necessário chamar o toFixed()