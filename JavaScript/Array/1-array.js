const users = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Guilherme',
    age: 26,
    gender: gender.MAN
  },
  {
      name: 'Pedro',
      age: 43,
      gender: gender.MAN
  },
  {
      name: 'Jennifer',
      age: 18,
      gender: gender.WOMAN
  }
];

//.length Retorna a quantidade de itens de um array
console.log('Quantidade de itens deste array:', persons.length);

//a função Array.isArray() Verifica se é array
console.log('A variável persons é um array', Array.isArray(persons));

// Iterar os itens do array
//forEach (para cada item) executa uma função. No primeiro parâmetro foi informado o array person que vai ser iterado(merge, fundir). 
//também é possível pegar o index e o array corrente assim: persons.forEach((person, index, arr) => { 
persons.forEach((person, index, arr) => { 
    console.log(`Nome: ${person.name}`); //index: ${index}, arr);
});

// As funções filter(), map(), e reduce() não alteram as referências do nosso objeto, eles retornam um novo

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log(`\nNova lista apenas com homens:`, mens);

// Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

// Transformar um array em outro tipo 
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

// Juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)//filtrou e dividiu com resto zero para ser par.
                        .reduce((age, person) => { //juntou as funções filter e reduce
                            age += person.age;
                            return age;
                        }, 0);

console.log('\nSoma de idade das pessoas que possuem idade par', totalEvenAges);                    
