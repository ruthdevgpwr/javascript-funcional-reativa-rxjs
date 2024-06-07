function exec(fn, a, b) {
  return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const fn = () => console.log('Exec...')
setInterval(fn, 1000)

/* outras formas :
1)
setInterval(() => console.log('Exec...'), 1000)

setInterval(function() {
  console.log('Exec 3...')
}, 1000)

*/