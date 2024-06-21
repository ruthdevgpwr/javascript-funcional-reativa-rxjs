let p = new Promise(function(cumprirPromessa){
  cumprirPromessa(3)
})

/*
p.then(function(valor) {
  console.log(valor)
})*/

//p.then(valor => console.log(valor))

const primeiroNome = array => array[0]
const primeiraLetra = nome => nome[0]
const letraMinuscula = letra => letra.toLowerCase() 

/*
let nomes = new Promise(function(cumprirPromessa){
  cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

nomes
  .then(primeiroNome)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(imprimirLetraMinuscula => console.log(imprimirLetraMinuscula))
*/

new Promise(function(cumprirPromessa){
  cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
  .then(primeiroNome)
  .then(primeiraLetra)
  .then(letraMinuscula)
  //.then(imprimirLetraMinuscula => console.log(imprimirLetraMinuscula))
  .then(console.log)