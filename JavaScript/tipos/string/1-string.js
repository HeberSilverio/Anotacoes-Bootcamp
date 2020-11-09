// Retorna o tamanho de uma string
const textSize = 'Paralelepípedo'.length; // length fala a quantidade de caracteres da string
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Caracteres'.split('c');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');//O primeiro parâmetro é o que vamos procurar e o segundo é o valor que ela terá
console.log('\nSubstituição de valor:', replacedText);

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);//-1 retorna o último caracter
console.log('\nÚltima letra de uma string:', lastChar);

//No slice a gente passa o start e o end
const allWithoutLastChar = 'Paralelepípedo'.slice(0, -1);// estabelece a primeira e última posição desejada
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

//mostra da posição escolhida para o primeiro parâmetro até a última letra da string
const secondToEnd = 'Paralelepípedo'.slice(1);//apenas um parâmetro se refere ao primeiro parâmetro da função
console.log('\nValor da string da segunda letra até a última:', secondToEnd);

// Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Paralelepípedo'.substr(0, 5);//No substr a gente passa o inicio e a quantidade de caracters
console.log('\nAs cinco primeiras letras são:', twoCharsBeforeFirstPos);