
function verificarPar(numero) {
    if (numero % 2 === 0) {
        alert(numero + " é um número par.");
    } else {
        alert(numero + " é um número ímpar.");
    }
}

let numero = verificarPar(prompt('Verificador de número pares - Insira um número: '));

verificarPar(7)
verificarPar(5)
verificarPar(4)



