function fakeRequest(url, callback) { //Define uma função que simula uma requisição.
    setTimeout(() => {  //Cria um atraso de 1 segundo para simular tempo de resposta.
        console.log(`Requisição feita para: ${url}`); //Mostra qual URL está sendo “acessada”.
        callback(null, "OK"); //Chama o callback dizendo que deu tudo certo.
    }, 1000); //Tempo de espera: 1 segundo.
}
fakeRequest("url1", (err, res) => { 
    console.log("Resposta 1:", res); //Faz a primeira requisição.

    fakeRequest("url2", (err, res) => {
        console.log("Resposta 2:", res); //Só roda depois da primeira

        fakeRequest("url3", (err, res) => {
            console.log("Resposta 3:", res); //Só roda depois da segunda
        });

    });

});
