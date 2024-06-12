const carrinho = [
  {nome: 'Caneta', qtde: 10, preco: 7.99},
  {nome: 'Impressora', qtde: 0, preco: 649.50},
  {nome: 'Caderno', qtde: 4, preco: 27.10},
  {nome: 'Lapis', qtde: 3, preco: 5.82},
  {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

//1º pegar o total de cada elemento - qtde * preco
// final - somar todos os itens do carrinho p/ dar um valor geral da quantidade dos produtos que tem+ os preços + o valor total do carrinho para no final eu saber quanto vou precisar desembolsar para comprar os itens do carrinho

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => acc + el

const totalGeral = carrinho
  .map(getTotal)
  .reduce(somar, 0)

  console.log(totalGeral)

