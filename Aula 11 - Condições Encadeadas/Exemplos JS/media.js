let nota1 = 50
let nota2 = 50
let media = (nota1 + nota2) / 2

if(media >= 70) {
    console.log("APROVADO");    
} 

else if (media >= 50) {
    console.log("Recuperação"); 
    let recuperacao = 90
    let mediFinal = (media +recuperacao) / 2
    
    if (mediFinal >= 70){
        console.log("APROVADO");        
    } else {
        console.log("REPROVADO");        
    }
} 

else {
    ("REPROVADO")
}