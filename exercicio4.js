const prompt = require('prompt-sync')();

const opcao = parseInt(prompt(`
    ---------Bem-vindo---------

    Digite o número de uma opção:

    1 - Faixa Etária de Crianças
    2 - Faixa Etária de Adolescentes
    3 - Faixa Etária de Adultos
    4 - Faixa Etária de Idosos

    : `));

switch(opcao) {
    case 1:
        console.log("Crianças: 0 a 11 anos");
        break;
    case 2:
        console.log("Adolescentes: 12 a 17 anos");
        break;
    case 3:
        console.log("Adultos: 18 a 59 anos");
        break;
    case 4:
        console.log("Idosos: acima de 60 anos");
        break;
    default:
        console.log("Opção inválida!");
        break;
}