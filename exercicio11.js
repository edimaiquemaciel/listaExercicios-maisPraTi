const prompt = require('prompt-sync')();

function somarNumeros() {
    let numeros = [];
    for(let i=1; i <= 5; i++){
        let valor;
        do {
            valor = Number(prompt(`Digite o valor ${i}: `))
        } while(isNaN(valor))
        numeros.push(valor);
    }
    const soma = numeros.reduce((acc, att) => acc + att,0);
    console.log(`O valor da soma é: ${soma}`); 
}

somarNumeros();
