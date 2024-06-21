function gerarNumerosEntre(min, max) {
  if(min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    const numAleatorio = parseInt(Math.random() * (max - min + 1)) + min
    resolve(numAleatorio)
  })
}

gerarNumerosEntre(5, 10).then(console.log)