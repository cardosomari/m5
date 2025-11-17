function countDown(n) { //declara função countDown.
  if (n < 1) return; //se n menor que 1, encerra sem imprimir.
  console.log(n); //imprime o valor atual de n.
  countDown(n - 1); //chama a própria função com n-1 (recursão).
}

countDown(5); //inicia a contagem regressiva a partir de 5.
