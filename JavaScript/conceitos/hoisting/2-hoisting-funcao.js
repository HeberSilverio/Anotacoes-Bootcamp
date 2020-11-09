function fn() {//a função fn
    log('Hoisting de função');//eu utilizo a função log que ainda não foi declarada
    
    function log(value) { //aqui ela foi declarada
        console.log(value);
    }
}

fn();

 //é uma boa prática sempre declarar uma função antes de utilizá-la

/*
function fn() {
    function log(value) { //aqui teve que ser definida a nova função para poder utiliza-la
        console.log(value);
    }

    log('Hoisting de função');
}
*/