// arrow function

const felizNatal = () => console.log('Feliz Natal!!')

const saudacao = nome => `Fala, ${nome}!`
console.log(saudacao('Ravi'))

//funçao com corpo:

/*
const somar = numeros => {
  let total = 0
  for(let n of numeros) {
    total += n
  }
  return total
}

console.log(somar([1,2,3,4,5,6,7,8,9,10]))

*/

//rest -> ...

const somar = (...numeros) => {
  console.log(Array.isArray(numeros))
  let total = 0
  for(let n of numeros) {
    total += n
  }
  return total
}

console.log(somar(1,2,3,4,5,6,7,8,9,10))

// uma função arrow dentro de outra função

/*const potencia = base => {
  return exp => {
    return Math.pow(base,exp)
  }
}
*/ 
//refatorção
const potencia = base => exp =>  Math.pow(base,exp)
console.log(potencia(2)(10))