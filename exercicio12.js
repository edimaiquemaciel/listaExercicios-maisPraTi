const prompt = require('prompt-sync')();

function tabuada() {
    let numero;
    do {
        numero = Number(prompt("Digite o número que deseja para a tabuada: "));
    }while(isNaN(numero));
    
    for(let i=1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}
tabuada();