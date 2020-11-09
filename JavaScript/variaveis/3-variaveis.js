const name = 'Guilherme';

//Não podemos alterar o valor quando for um tipo primitivo como string
//name = 'Guilherme';

const user = {
    name: 'Guilherme'
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

// Porém, não podemos fazer o objeto "apontar" para outro lugar
//user = {
    name: 'Guilherme'
//};

// A mesma regra é valida para array
const persons = ['Guilherme', 'Pedro', 'Jennifer'];

// Podemos adicionar novos itens
persons.push('João'); //adiciona João no final do array
//['Guilherme', 'Pedro', 'Jennifer', 'João']

// Podemos remover algum item
persons.shift(); //shift remove o primeiro item do array, neste caso Guilherme
//['Pedro', 'Jennifer', 'João']

//podemos alterar diretamente
persons[1] = 'James';
//['Pedro', 'James', 'João']

console.log('\nArray após as alterações: ', persons);