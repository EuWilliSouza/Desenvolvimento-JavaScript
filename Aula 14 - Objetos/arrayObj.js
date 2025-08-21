let produtos = [
    {tipo: "Notebook", preco: 5000, categoria: "Eletrônico"},
    {tipo: "Teclado", preco: 200, categoria: "Periférico"},
    {tipo: "Mouse", preco: 120, categoria: "Periférico"},
    {tipo: "Computador", preco: 500, categoria: "Eletrônico"},
    {tipo: "Monitor", preco: 800, categoria: "Periférico"},
    {tipo: "Fone", preco: 200, categoria: "Periférico"},
    {tipo: "Microfone", preco: 300, categoria: "Periférico"},
    {tipo: "Processador", preco: 3100, categoria: "Periférico"},
    {tipo: "Placa de Video", preco: 2000, categoria: "Eletrônico"},
    {tipo: "Mouse Pad", preco: 50, categoria: "Periférico"}
]

// Array Produtos

produtos.forEach((produto) => {
    console.log(produto.tipo + "R$" + produto.preco);
    
})

// Filtro

const produtosEletronicos = produtos.filter(produto => produto.categoria === "Eletrônico")
console.log("Produtos Eletrônicos");

produtosEletronicos.forEach((produto) => {
    console.log(produto.tipo + " R$ " + produto.preco);
    

})

// Map

const produtosEletronicosDesconto = produtosEletronicos.map(produto => ({
    tipo: produto.tipo,
    preco: produto.preco * 0.95,
    categoria: produto.categoria
}))

