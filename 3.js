function factorial(n) { //declara função factorial que recebe n.
  if (n === 0 || n === 1) return 1; // para 0 ou 1 retorna 1 imediatamente.
  return n * factorial(n - 1); //retorna n multiplicado pelo fatorial de n-1.
}

console.log("fatorial(5) =", factorial(5)); //imprime o resultado 
