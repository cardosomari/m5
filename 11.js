function fakeRequest(url, callback) { //declara função que simula requisição assíncrona.
  setTimeout(() => { //agenda execução assíncrona de uma função após atraso.
    callback(null, "OK from " + url); //após o atraso, chama callback com null e uma resposta simulada.
  }, 1000);  //define atraso de 1 segundo.
}

fakeRequest("site.com", (err, res) => { //chama fakeRequest passando site.com e um callback
  console.log(res); //dentro do callback, imprime a resposta quando estiver disponível.
});
