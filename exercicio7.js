const prompt = require('prompt-sync')();

const macasCompradas = Number(prompt("Digite a quantidade de maças compradas: "))

function totalCompra(macasCompradas) {
    let preco = macasCompradas < 12 ? 0.30 : 0.25;
    let totalPreco = macasCompradas * preco ;
    console.log(`O total da compra foi R$ ${totalPreco.toFixed(2)}`);  
}

totalCompra(macasCompradas);