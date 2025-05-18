const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Digite um numero inteiro: "), 10);

if(!isNaN(numero)){
    if(numero % 2 === 0){
    console.log(`O número ${numero} é par`)
    }else {
        console.log(`O número ${numero} é ímpar`)
    }
}else {
    console.log("Digite um número válido!");
}