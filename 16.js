const obj = { //cria objeto
  name: "Roberto", //propriedade name com valor "Roberto"


  sayThisArrow: () => { //método definido com arrow function. Arrow functions não têm this próprio; this é léxico (do escopo externo).
    return "arrow this.name = " + (this?.name ?? "undefined"); //tenta acessar this.name do escopo externo; usa operador de encadeamento opcional ?. e ?? para fallback undefined.
  },

  sayThisFunction: function() { //método tradicional (function expression) que tem this dinâmico quando chamado como obj.sayThisFunction().
    return "function this.name = " + this.name; //aqui this refere-se ao obj, então retorna Roberto.
  }
};

console.log(obj.sayThisArrow()); //chama e imprime o resultado do método arrow
console.log(obj.sayThisFunction()); //chama e imprime o resultado do método tradicional
