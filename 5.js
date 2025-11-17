function applyFunction(fn, value) { //função que recebe uma função e value.
  return fn(value); //executa a função passando value e retorna o resultado.
}

console.log(applyFunction(x => x * 2, 10)); //passa uma arrow function que duplica x e imprime 20.
