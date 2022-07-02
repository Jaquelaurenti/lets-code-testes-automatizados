const soma = (a,b) => {
  return a+b
}
const divisão = (a,b) => {
  if(b === 0 ) return 'Opa, não é possível dividir por 0'
  return a/b
}
const multiplicar = (a,b) => {
  return a*b
}
const subtracao = (a,b) => {
  return a-b
}
module.exports = {
  soma, divisão, subtracao, multiplicar
}