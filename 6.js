const operations = [ //cria constante operations que é um array.
  (a, b) => a + b, //soma.
  (a, b) => a - b, //subtrai
  (a, b) => a * b //multiplica
];

console.log("Operações com (4,2)"); //imprime cabeçalho informativo.
operations.forEach(op => console.log(op(4, 2))); //itera cada função op e imprime o resultado
