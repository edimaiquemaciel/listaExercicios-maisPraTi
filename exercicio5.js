const prompt = require('prompt-sync')();

console.log("------Calculadora IMC------");
const peso = parseFloat(prompt("Digite seu peso (kg): "));
const altura = parseFloat(prompt("Digite sua altura (m): "))


function calcularIMC(peso, altura) {
    if(isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
        console.log("Por favor, digite números válidos e positivos");
        return;
    }
    const imc = peso / (altura * altura);
    console.log(`Seu IMC é : ${imc.toFixed(2)}`);
    
    if(imc < 18.5){
        console.log("Classificação: Baixo peso");
    }else if (imc < 25) {
        console.log("Classificação: Peso normal");
    }else if (imc < 30) {
        console.log("Classificação: Sobrepeso");
    }else {
        console.log("Classificação: Obesidade");
    }
}
calcularIMC(peso, altura);

