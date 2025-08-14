// Solicitar dois numeros e apos isso o usuario deve informar qual operação eçe deseja fazer, tendo as seguites opções:
// +- Soma, -- Subtração, *- Multiplicação, /- Divisão

function mostrarResultado (){
    let numero1 = parseInt(document.querySelector("#numero1").value)
    let numero2 = parseInt(document.querySelector("#numero1").value)
    let operacao = document.querySelector("operacao").value
    let resultado = document.querySelector("#resultado")
    let resultadoConta = 0
    

    if (operacao === "1"){
        resultadoConta = numero1 + numero2
        resultado.innerHTML = `A soma entre ${numero1} e ${numero2} é igual ${resultadoConta}`        
    }
    else if (operacao === "2"){
        resultadoConta = numero1 - numero2
        resultado.innerHTML = `A subtração entre ${numero1} e ${numero2} é igual ${resultadoConta}`
    }
    else if (operacao === "3"){
        resultadoConta = numero1 * numero2
        resultado.innerHTML = `A multiplicação entre ${numero1} e ${numero2} é igual ${resultadoConta}`
    }
    else {
        resultadoConta = numero1 / numero2
        resultado.innerHTML = `A divisão entre ${numero1} e ${numero2} é igual ${resultadoConta}`
    }

}