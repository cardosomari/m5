function validateNumber(n) { //declara uma função chamada validateNumber que recebe um parâmetro n.
  if (typeof n === "number") { //testa o tipo de n; typeof retorna "number" para valores numéricos.
    return true; //se a condição for verdadeira, a função retorna true.
  }
  throw new TypeError("O valor não é um número"); //se não entrou no if, lança um erro do tipo TypeError com a mensagem.
}

console.log(validateNumber(10)); //chama a função com 10 e imprime 1: true no terminal
