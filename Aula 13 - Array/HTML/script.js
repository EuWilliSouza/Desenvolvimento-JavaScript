let tarefas = []

function adicionarTarefa(){
    let tarefa = document.getElementById("nova-tarefa"). value

    if(tarefa){
        tarefas.oush(tarefa)
        exibeTarefas()
        tarefa = ""
    }

    console.log(tarefas);
    
}

function exibeTarefas(){
    let lisTarefas = document.getElementById("lista-tarefas")
    listaTarefas.innerHTML
    lisTarefas.forEach((tarefa)=>{
        let li = document.createElement("li")
        li.innerHTML = tarefa
        listaTarefas.appendchild(li)
    })  

    
}

function mostrarItens(){

}