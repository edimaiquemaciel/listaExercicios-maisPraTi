const prompt = require('prompt-sync')();

const idade = parseInt(prompt("Digite sua idade: "), 10);

if(!isNaN(idade)){
    if(idade >= 0 && idade < 12) {
        console.log("Categoria: Criança");
    }else if(idade >= 12 && idade <= 17){
        console.log("Categoria: Adolescente");
    }else if(idade >= 18 && idade <= 59){
        console.log("Categoria: Adulto");
    }else if(idade >= 60){
        console.log("Categoria: Idoso");
    }else {
        console.log("Digite uma idade que não seja negativa");
    }
}else {
    console.log("Digite um número válido");
}