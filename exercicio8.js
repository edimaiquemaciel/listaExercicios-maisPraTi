const prompt = require('prompt-sync')();

const valor1 = Number(prompt("Digite o primeiro valor: "));
const valor2 = Number(prompt("Digite o segundo valor: "));
const valores = [valor1, valor2]

if(valor1 !== valor2) {
    console.log(valores.sort((a,b) => a - b).join(" "));
}else {
    console.log("Os valores devem ser diferentes");
}