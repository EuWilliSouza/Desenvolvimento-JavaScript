function mostrarResultado (){

let velocidade = parseInt(document.getElementById("velocidade").value)
let resultado= document.getElementById('Resultado')
let velocidadeMaxima = 80
let valorMulta = 7

if (isNaN(velocidade)) {
   resultado.innerHTML = "INFORME UM VALOR VALIDO"
   return
}

if(velocidade> velocidadeMaxima){
   let diferecaVelocidade = velocidade - velocidadeMaxima
   let multa = diferecaVelocidade * valorMulta
   resultado.innerHTML = "Você foi multado<br><br>O valor da sua multa foi de R$ " + multa.tofixed(2). replace ("." , ".")
   } else {
      resultado.innerHTML = "Você não foi Multado"
   }
}
