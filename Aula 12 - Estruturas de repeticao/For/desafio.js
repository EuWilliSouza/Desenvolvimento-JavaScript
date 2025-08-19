const input = require("prompt-sync") ();
let soma = 0

for (let i = 1; i <= 20; i += 2){
    let numero = parseInt(input("Digite um valor: "))
    let impar = numero % 2
    let multiplo3 = numero % 3
    
    if (impar === 1 && multiplo3 === 0){
        soma = numero + soma 
        console.log("Esse número atende os requisitos");
        
    }
    else {         
        console.log("Esse número não atende aos requisitos");
        
    }
    
}