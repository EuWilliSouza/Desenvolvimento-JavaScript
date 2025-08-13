// Valor gasto pelo usuario.
// Metodo de pagamento
//   - 1 - Boleto/Pix = 10% desconto
//   - 2 - Débito - 5% desconto
//   - 3 - Credito = Valor total  
//   Metodo Parcelamento
//     1 - A vista - Valor final
//     2 - 2x - com juros 5% no valor total
//     3 - 3x - com juros 10% no valor total



let valorGasto = 1000
let metodoPagamento = 1
let debito = 2


if (metodoPagamento == 1) {
    let valorFinal = valorGasto * 0.9
    console.log("MÉTODO DE PAGAMENTO BOLETO/PIX")
    console.log("O valor final foi de R$ " + valorFinal);      
}

else if (metodoPagamento == 2) {
    let valorFinal = valorGasto * 0.95
    console.log("METODO DE PAGAMENTO DEBITO"); 
    console.log("O valor final foi de R$" + valorFinal);   
   
} 
else {

    let umaParcela = valorFinal
    let duasParcelas = valorFinal * 0.95
    let tresParcelas = valorFinal * 0.99

    if (metodoParcelamento == 1) {
        console.log("MÉTODO DE PAGAMENTO SEM JUROS")
        console.log("O valor final foi de R$ " + valorFinal);     

    }  else if (metodoParcelamento == 2) {
        console.log("METODO DE PAGAMENTO COM 5% DE JUROS");
        console.log("O valor finaç foi de R$ " + valorFinal * 0.05);
    }
       else  {
        console.log("METODO DE PAGAMENTO COM 10% DE JUROS");
        console.log("O valor finaç foi de R$ " + valorFinal * 0.09);

       }
       
       
        
    }

     
    
    




