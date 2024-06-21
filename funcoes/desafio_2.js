const carrinho = [
  {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
  {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
  {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
  {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
  {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
]

//1. pegar apenas os elementos que tem fragil: true
//2. pegar quantidade: 4 e preco 27.10 -> ttotal
//3. media totais

const isFragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
  const novaQtde = acc.qtde + 1
  const novoTotal = acc.total + el
  return {
    qtde: novaQtde,
    total: novoTotal,
    media: novoTotal / novaQtde
  }
}

const mediaInicial = {qtde: 0, total: 0, media: 0}

const media = carrinho 
  .filter(isFragil)
  .map(getTotal)
  .reduce(getMedia, mediaInicial)
  .media

  console.log(`A média é ${media}!`)
