function countToFive() { //Declara uma função chamada countToFive
  let n = 1; //Cria uma variável mutável n e inicializa com 1
  const id = setInterval(() => { //Cria um intervalo que executa repetidamente a cada 5s e guarda o ID dele.
    console.log(n); //Exibe o valor atual de n.
    if (n === 5) clearInterval(id); //Quando n chegar a 5, para o intervalo.
    n++; //Incrementa n para a próxima execução.
  }, 500); //Define que o intervalo acontece a cada tempo
}

countToFive(); //Chama a função e inicia a contagem.
