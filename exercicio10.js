const prompt = require('prompt-sync')();

const numero = Number(prompt("Digite um número: "))

function imprimirNumero(numero) {
    for(let i=1; i <= 10; i++){
        console.log(`${i}: ${numero}`);
    }
}
imprimirNumero(numero);