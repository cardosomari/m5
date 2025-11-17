const user = { //começa a criação do objeto user.
  name: "Lucas", //propriedade name do objeto com valor "Lucas".
  sayHi: function() { //função (método).
    return "Oi! Eu sou " + this.name; //dentro do método, this.name referencia user.name; retorna a frase.
  }
};

console.log(user.sayHi()); //chama user.sayHi() e imprime o resultado
