let user = { //é um objeto por causa {}
    name:'Guilherme'
};
console.log(user);

// Alterando a propriedade de um objeto
user.name ='Outro nome 1'; //é possível acessar com ponto. E a propriedade com valor 'Guilherme' foi alterada para 'Outro nome 1'
console.log(user);

user['name'] = 'Outro nome 2';//é possível acessar com ['']. E a propriedade com valor 'Outro nome 1' foi alterada para 'Outro nome 2'
console.log(user);

const prop = 'name'; //criamos uma variável que recebe 'name';
user[prop] = 'Outro nome 3';//acessa a propriedade 'name' parecido com user['name']
console.log(user);

//todas as vezes que eu preciso ter o valor ("valuar") eu utilizo o [], como no exemplo desta função
/*
function getProp(prop) {
    return user[prop] //retorna a propriedade deste user
}
*/


//Criando uma propriedade
user.sobreNome = 'Cabrini da Silva';
user.idade = 25;



console.log(user);
user['estadoCivil'] = 'Solteiro'; //é um modo de criar propriedade


//Deletando uma propriedade
delete user.name;
//delete user.primeiroNome;
console.log(user);