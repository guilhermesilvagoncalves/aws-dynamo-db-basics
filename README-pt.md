# aws-dynamo-db-basics
Uma introdução simples aos comandos básicos para operar o AWS DynamoDB usando NodeJS

## Objetivos

Esse projeto foi construído a partir do aprendizado obtido no curso https://www.udemy.com/course/amazon-aws-dynamodb-para-iniciantes/, da [Udemy](https://www.udemy.com/), e visa ajudar a comunidade na disseminação do conhecimento sobre o [AWS DynamoDB](https://aws.amazon.com/pt/dynamodb/).

O objetivo foi pura e simplesmente prover exemplos de uso do serviço, por isso boas práticas de código não foram consideradas durante o seu desenvolvimento.

Quaisquer contribuições são bem vindas!

## Pré-requisitos

Esse projeto foi implementado para realizar a conexão com uma instância de uma tabela do AWS DynamoDB. Dessa forma, é necessário que, antes de rodá-lo:

* Você já tenha uma tabela criada no serviço
* Você já tenha credenciais de acesso (accessKey e secretKey)
* Você insira essas credenciais e a respectiva região no arquivo [config.json](config.json)

Os exemplos detalhados aqui se baseiam no nome das tabelas que foram criadas na instância do [AWS DynamoDB](https://aws.amazon.com/pt/dynamodb/). Por isso, é importante observar os nomes e alterá-los de acordo com as suas tabelas:

* [server.js - Linha 63](server.js#L63)
* [server.js - Linha 98](server.js#L98)
* [server.js - Linha 123](server.js#L123)
* [server.js - Linha 154](server.js#L154)
* [server.js - Linha 154](server.js#L154)
* [server.js - Linha 187](server.js#L187)
* [server.js - Linha 215](server.js#L215)
* [server.js - Linha 223](server.js#223)
* [server.js - Linha 254](server.js#254)
* [server.js - Linha 264](server.js#264)

## Como rodar esse projeto

1. Instalação das aplicações localmente

Este projeto é baseado no NodeJS 12.x. Então, antes de tudo, você precisa instalar o `NodeJs` em seu ambiente local:

https://nodejs.org/en/download/

Usamos ainda `npm` para gerenciar pacotes.

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

2. Instalar dependências de pacotes

Execute `npm instal` para instalar localmente todas as dependências em sua máquina

3. Executar aplicativo localmente

Execute `node server.js` para executar o aplicativo localmente