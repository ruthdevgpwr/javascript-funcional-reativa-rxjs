// fn somar (3)(4)(5)
//fn -> 3 * 7
//fn -> 3 + 7
// fn -> 3 - 7
// fn calcular (num)(num)(fn)

const soma = function(num1) {
  return function(num2) {
   return num1 + num2
  }
 }

 const subtracao = function(num1) {
  return function(num2){
    return num1 - num2
  }
 }

 const multiplicacao = function(num1){
  return function(num2) {
    return num1 * num2
  }
 }

const calcular = function(num1) {
  return function(num2) {
    return function(operacao){
      if(operacao === soma) {
        return soma(num1)(num2)
      }
      if(operacao === subtracao){
        return subtracao(num1)(num2)
      }
      if(operacao === multiplicacao) {
        return multiplicacao(num1)(num2)
      }
    }
  }
}

console.log(calcular(10)(20)(soma))
console.log(calcular(10)(20)(subtracao))
console.log(calcular(10)(20)(multiplicacao))
