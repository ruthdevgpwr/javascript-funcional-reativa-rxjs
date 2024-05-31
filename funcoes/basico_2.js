function bomDia() {
  console.log('Bom dia!')
}

const boaTarde = function() {
  console.log('Boa tarde!')
}

// 1) Passar funcao como parametro para outra funcao

function executarQualquerCoisa(funcao){
  if(typeof funcao === 'function') {
    funcao()
  }
}

executarQualquerCoisa(boaTarde)


// 2) Retornar uma funcao a partir de uma outra func

function potencia(base) {
  return function(exp) {
    return Math.pow(base, exp)
  }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

// ou posso chamar diretamente sem armazenar potencia numa constante

console.log(potencia(2)(8))