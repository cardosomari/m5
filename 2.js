function validateUser(name, age) { //define função com parâmetros name e age.
  if (typeof name !== "string" || name.trim() === "") { //verifica se name não é string ou é só espaços.
    throw new TypeError("Nome inválido"); //lança erro se o nome for inválido.
  }
  if (typeof age !== "number" || age < 0) { //verifica se age não é número ou é negativo.
    throw new TypeError("Idade inválida"); //lança erro para idade inválida.
  }
  return true; // retorna true
}

console.log(validateUser("Ana", 20)); //chama a função e imprime o resultado no terminal.
