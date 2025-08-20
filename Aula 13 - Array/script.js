let times =  ["Santos", "Palmeiras", "Corinthians", "São Paulos"]

// Verificar o valor de um item a partir da posição 
console.log(times[0]);


// Adicionando itens no array
times.push("Flamengo")
times.push("Gremio")
times.push("Botafogo")
times.push("Vasco")

//Verificar o tamanho do array
console.log(times.length);

// Adicionar item na primeira posição 
times.unshift("fluminense")
console.log(times);

// Remover item no começo da lista 

times.shift("Fluminense")
console.log(times);

// Remover o ultimo 

times.pop("Vasco")
console.log(times);

// Encontrar a posição de um item 
console.log(times.indexOf("São Paulo"))


let times2 = ["Santos", "São Paulo", "Palmeiras"]

// .splice
//Remover Elemento

times2.splice(1,1)
console.log(times2);

// substituir elementos 

times2.splice(1, 1, "São Paulo")
console.log(times2);
