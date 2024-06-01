// fn somar (3)(4)(5)
//fn -> 3 * 7
//fn -> 3 + 7
// fn -> 3 - 7
// fn calcular (num)(num)(fn)

 const soma = (num1, num2) => num1 + num2
 const subtracao = (num1, num2) => num1 - num2
 const multiplicacao = (num1, num2) => num1 * num2

const calcular = function(num1) {
  return function(num2) {
    return function(operacao) {
      return operacao(num1, num2)
    }
  }
}

console.log(calcular(2)(5)(multiplicacao))
