// fn somar (3)(4)(5)
//fn -> 3 * 7
//fn -> 3 + 7
// fn -> 3 - 7
// fn calcular (num)(num)(fn)

 const soma = (num1, num2,num3) => num1 + num2 + num3
 const subtracao = (num1, num2,num3) => num1 - num2 - num3
 const multiplicacao = (num1, num2,num3) => num1 * num2 * num3

const calcular = function(num1) {
  return function(num2) {
    return function (num3) {
      return function(operacao) {
        return operacao(num1, num2, num3)
      }
    }
  }
}

console.log(calcular(100)(10)(10)(multiplicacao))
console.log(calcular(100)(10)(10)(subtracao))
console.log(calcular(100)(10)(10)(soma))
