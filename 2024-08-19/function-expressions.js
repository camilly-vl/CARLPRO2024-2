//anonymous function 

// versão 1
const multiplicar = function (a, b) {
    return a * b;
}

//versão 2
const somar = function (a, b) { return a + b; }

// chamada das funções
somar(1,2) //  chama a função, calcula, mas não exibe nada.

let n1 = 5;
let n2 = 10;
let resultado = multiplicar(n1, n2);
console.log(resultado); // 50
