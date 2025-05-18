
function fibonacci() {
    let a = 0;
    let b = 1;
    console.log(a);
    console.log(b);
    for(let i=2; i < 10; i++) {
        const proximo  = a + b;
        console.log(proximo);
        a = b;
        b = proximo;
    }
}
console.log("Os 10 primeiros números da sequência de fibonacci são:");

fibonacci();