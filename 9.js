function calculate(a, b, callback) { //define função que recebe dois valores e um callback.
  return callback(a, b); //executa o callback com a e b e retorna o resultado.
}

console.log(calculate(3, 4, (a, b) => a * b)); //chama calculate com uma função multiplicadora e imprime o resultado
