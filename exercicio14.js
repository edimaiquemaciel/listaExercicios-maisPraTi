const prompt = require('prompt-sync')();

function fatorial() {
    let numero;
    do {
        numero = parseInt(prompt("Digite um número inteiro e não negativo: "))
    }while(isNaN(numero) || numero < 0)
    let fatorial = 1;
    for(let i=1; i <= numero; i++) {
        fatorial = fatorial * i
    }
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}

fatorial();