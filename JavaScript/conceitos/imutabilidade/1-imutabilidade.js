//Imutabilidade é um conceito de linguagem funcional mas que também temos no JavaScript.
//Em linguagens funcionais os dados que são criados nunca mudam. 
//Imutabilidade, de forma geral, é a característica ou qualidade de algo não se alterar. Em programação orientada a objetos, por exemplo, uma vez que um objeto imutável é criado/instanciado, o mesmo não poderá sofrer alterações no seu estado até o final da sua vida. 
//A variável nunca irá mudar e se você precisar alterá-la, você vai criar uma nova. Por exemplo, ao invés de mudar um array, a gente vai criar um novo array, e então pega todo o conteúdo do array e concatena o novo. E se for remover, a gente filtra para remover. 
//É a mesma coisa com objeto. Um objeto nunca é atualizado, você nunca vai mudar uma propriedade deste objeto, o que você faria é copiá-lo e ai faz a alteração.
 
//toda as vezes que a gente passa para a função um objeto ou um array ele é passado por referência




const usuario = { //temos um usuário
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'
};

function obterUsuarioComNomeCompleto(usuario) { //temos uma função que recebe o usuário. E eu preciso criar um atributo nome completo.
    return {
        ...usuario, //...(reticências é o spread operator)(neste caso ele pega as propriedades de usuário e coloca dentro do novo objeto) 
        fullName: `${usuario.name} ${usuario.lastName}`//me retorne o usuário com nome completo. 

        //``(a cráse é a string literal) seria a mesma coisa que user.name + ' ' + user.lastName
    }
}

const usuarioComNomeCompleto = obterUsuarioComNomeCompleto(usuario);

console.log(usuarioComNomeCompleto, usuario);


