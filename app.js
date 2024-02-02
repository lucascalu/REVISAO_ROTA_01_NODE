const express = require('express') //Responsável por criar uma váriavel (Alocar um espaço de memória do computador) para que o pacote express funcione (https://www.npmjs.com/package/express)
const app = express() //Responsável por criar uma váriavel chamada app que irá chamar uma função capaz de gerar um servidor com o pacote express

app.get('/', function (req, res) {
  res.send('Hello World')
})

//Através da variavel anterior criada (app) faz-se uma requisição no servidor express (get) para que dentro de uma função quando digitarmos o endereço "/" no navegador tenhamos como resposta (res.send) o envio de uma frase na tela chamada ("hello word")


app.listen(3000)

//Por fim através da variavel criada (app) faz-se uma chamada de função (listen) capaz de rodar de maneira local nosso servidor express na porta de saída de rede de nosso computador 3000
