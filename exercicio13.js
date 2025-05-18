const prompt = require('prompt-sync')();

function mediaAritmetica() {
    let numeros = [];
    let valor;
    do {
        valor = Number(prompt("Digite um número decimal (digite 0 para parar): "));
        if(isNaN(valor)){
            console.log("Por favor, digite um número válido.");
            continue;
        }
        
        if(valor !== 0) {
            numeros.push(valor);
        }
    }while(valor !== 0)
    if(numeros.length === 0) {
        console.log("Nenhum número foi digitado.");
        return;
    }
    const soma = numeros.reduce((acc, att) => acc + att);
    const media = soma / numeros.length;
    console.log(`A média aritmética dos números é: ${media.toFixed(2)}`);
}

mediaAritmetica();