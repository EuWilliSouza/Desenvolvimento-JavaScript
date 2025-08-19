function mostrarResultado(){
    let numero = parseInt(document.getElementById("numero").value)
    let mostrarResultado = document.getElementById("resultado")
    mostrarResultado.innerHTML = ""

    for(let i = 0; i <= 10; i++){
        mostrarResultado.innerHTML += ${numero} x ${i} = ${numero * i} <br>
    }
}