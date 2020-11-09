const user = {
    name: 'Heber',
    lastName: 'Silvério da Costa'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user)); //retorna apenas as chaves (propriedades) do objeto

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Héber Silvério da Costa'});//Object.assign recebe um objeto por parâmetro que direciona onde irá acontecer o merge(fundir), e depois ele aceita n outros objetos. Neste exemplo estamos concatenando um objeto que tem a propriedade fullName com o objeto user.
console.log('\nAdiciona a propriedade fullname no objeto user, veja:', user); //não é recomendado fazer isso, e alterar o objeto principal


// O idela é criar um novo array. Então dentro do primeiro parâmetro do Object.assign a gente passa {} objeto vazio indicando a criação de um novo objeto, e depois fazemos o merge(fundir) com user e demais propriedades que você quiser incluir. Veja na linha abaixo:
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 35})); 


console.log(user);//veja que aqui o user não tem o {age: 35}, porque a gente não alterou a referência dele, a gente criou uma nova a partir dele.

// Previne todas as alterações em um objeto
const novoObjeto = { brinquedos: 'carrinhos' };
console.log('\n','\nMostra o conteúdo da const novoObjeto', novoObjeto);

novoObjeto.brinquedos = 'bonecos';
novoObjeto.bricadeiras = 'esconde-esconde';
novoObjeto.estripulia = 'artes';
delete novoObjeto.estripulia;
console.log('\nA const permitiu alterar o valor da propriedade, criar nova propriedade e excluir estripulia, veja:', novoObjeto);

Object.freeze(novoObjeto);//esta função Object.freeze() congela. A partir deste momento você não consegue alterar ele de jeito nenhum.

//Essa alteração não aconteceu porque o Object.freeze(novoObjeto) na linha 36 impediu.
novoObjeto.brinquedos = 'aviões';
novoObjeto.exercicios = 'andar de bicicleta';
novoObjeto.estripulia = 'artes';
delete novoObjeto.brinquedos;

console.log('\nA const novoObjeto após freeze permanece sem alterações:', novoObjeto);

// Permite apenas a alteração de propriedades existente em um objeto
const person = { name: 'Guilherme'};
Object.seal(person); //seal ele só não permite que crie e delete, mas aceita trocar valor.
console.log('\nNova const com a propriedade e valor:', person);

person.name = "Guilherme Cabrini"
person.age = 26;
console.log('\nAlterou a propriedade existente, porém não criou age:', person);

delete person.name;
console.log('\nDelete person.name não foi executada:', person);


