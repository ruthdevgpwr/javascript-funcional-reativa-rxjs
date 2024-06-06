const filesystem = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

//console.log(__dirname, 'dados.txt')

function exibirConteudo(err, conteudo) {
  if(err) {
    console.error("Erro ao ler o arquivo: ", err)
    return
  }
  console.log(conteudo.toString())
}

filesystem.readFile(caminho, exibirConteudo)

