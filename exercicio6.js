const prompt = require('prompt-sync')();

const ladoA = Number(prompt("Informe o lado A do triângulo: "));
const ladoB = Number(prompt("Informe o lado B do triângulo: "));
const ladoC = Number(prompt("Informe o lado C do triângulo: "));


function verificarTriangulo(ladoA, ladoB, ladoC) {
    const isTriangulo = ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;
    if(isTriangulo){
        if (ladoA === ladoB && ladoB === ladoC) {
            console.log("Triângulo equilátero");
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            console.log("Triângulo isósceles");
        } else {
            console.log("Triângulo escaleno");
        }
    } else {
        console.log("Não é um triângulo");
    }
}

verificarTriangulo(ladoA, ladoB, ladoC)