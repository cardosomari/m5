function formatMessage(msg, formatter) { //função que recebe uma mensagem e um formatador.
  return formatter(msg); //aplica o formatter sobre msg e retorna.
}

console.log(formatMessage("hello", s => s.toUpperCase())); //formata "hello" para "HELLO" e imprime.
