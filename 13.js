function delayedHello() { //declara função que fará uma ação atrasada.
  setTimeout(() => { //agenda uma função para executar depois de um tempo.
    console.log("Hello after 1 second"); //imprime a mensagem quando o timer expira.
  }, 1000); //define o atraso de 1s.
}

delayedHello(); //chama a função para iniciar o timer.
