const express = require("express");
const app = express();

const AWS = require("aws-sdk");

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

AWS.config.loadFromPath("./config.json");

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.send("OK Express");
});

app.get("/listarTabelas", function (request, response) {
  var dynamodb = new AWS.DynamoDB();
  var params = {};
  dynamodb.listTables(params, function (err, data) {
    if (err) {
      response.send(err);
      console.log(err, err.stack);
    } else response.json(data);
  });
});

// inclusão de dados no DynamoDB
app.get("/inserir", function (request, response) {
  var e_mail = request.query.email;
  var nome = request.query.nome;

  var params = {
    TableName: "clients",
    Item: {
      email: e_mail,
      nome: nome,
    },
  };

  var documentClient = new AWS.DynamoDB.DocumentClient();

  documentClient.put(params, function (err, data) {
    if (err) {
      response.send(err);
      console.log(err);
    } else response.json(data);
  });
});

// alteração de dados no DynamoDB
app.get("/atualizar", function (request, response) {
  var e_mail = request.query.email;
  var nome = request.query.nome;
  var valor = request.query.valor;

  var params = {
    TableName: "clients",
    Key: {
      email: e_mail,
      nome: nome,
    },
    UpdateExpression: "set #s = :y",
    ConditionExpression: "#c = :x",
    ExpressionAttributeNames: {
      "#s": "salario",
      "#c": "cidade",
    },
    ExpressionAttributeValues: {
      ":y": valor,
      ":x": "Cotia",
    },
  };

  var documentClient = new AWS.DynamoDB.DocumentClient();

  documentClient.update(params, function (err, data) {
    if (err) {
      console.log(err);
      response.send(err);
    } else {
      response.send(data);
    }
  });
});

// exclusão de dados no DynamoDB
app.get("/excluir", function (request, response) {
  var e_mail = request.query.email;
  var nome = request.query.nome;

  var params = {
    TableName: "clients",
    Key: {
      email: e_mail,
      nome: nome,
    },
  };

  var documentClient = new AWS.DynamoDB.DocumentClient();

  documentClient.delete(params, function (err, data) {
    if (err) {
      console.log(err);
      response.send(err);
    } else {
      response.send(data);
    }
  });
});

// consulta de dados no DynamoDB
app.get("/getItem", function (request, response) {
  var e_mail = request.query.email;
  var nome = request.query.nome;

  var params = {
    TableName: "clients",
    Key: {
      email: e_mail,
      nome: nome,
    },
    //AttributesToGet: ['email','nome','documentos']
    ConsistentRead: false,
    ProjectionExpression: ["email"],
    ReturnConsumedCapacity: "TOTAL",
  };

  var documentClient = new AWS.DynamoDB.DocumentClient();

  documentClient.get(params, function (err, data) {
    if (err) {
      console.log(err);
      response.send(err);
    } else {
      response.send(data);
    }
  });
});

// scan de dados no DynamoDB
app.get("/scan", function (request, response) {
  var e_mail = request.query.email;
  var nome = request.query.nome;

  var documentClient = new AWS.DynamoDB.DocumentClient();

  var params = {
    TableName: "clients",
    //FilterExpression: " salario > :p_salario",
    //ExpressionAttributeValues: {
    //  ":p_salario": 2000,
    //},
    Limit: 2,
  };

  if (e_mail && nome) {
    params.ExclusiveStartKey = {
      email: e_mail,
      nome: nome,
    };
  }

  documentClient.scan(params, function (err, data) {
    if (err) {
      console.log(err);
      response.send(err);
    } else {
      response.send(data);
    }
  });
});

// query de dados no DynamoDB
app.get("/query", function (request, response) {
  var e_mail = request.query.email;
  var nome = request.query.nome;

  var documentClient = new AWS.DynamoDB.DocumentClient();

  var params = {
    TableName: "clients",
    KeyConditionExpression: "email = :e and nome = :n",
    ExpressionAttributeValues: {
      ":e": e_mail,
      ":n": nome,
    },
  };

  documentClient.query(params, function (err, data) {
    if (err) {
      console.log(err);
      response.send(err);
    } else {
      response.send(data);
    }
  });
});

// get em batch de dados no DynamoDB
app.get("/lerEmBatch", function (request, response) {
  var e_mail = request.query.email;
  var nome = request.query.nome;
  var loja = request.query.loja;

  var documentClient = new AWS.DynamoDB.DocumentClient();

  var params = {
    RequestItems: {
      clients: {
        Keys: [
          {
            email: e_mail,
            nome: nome,
          },
        ],
      },
      clients_store: {
        Keys: [
          {
            email: e_mail,
            nome: loja,
          },
        ],
      },
    },
  };

  documentClient.batchGet(params, function (err, data) {
    if (err) {
      console.log(err);
      response.send(err);
    } else {
      response.send(data);
    }
  });
});

// gravação em batch de dados no DynamoDB
app.get("/gravarEmBatch", function (request, response) {
  var e_mail = request.query.email;
  var nome = request.query.nome;
  var loja = request.query.loja;

  var documentClient = new AWS.DynamoDB.DocumentClient();

  var params = {
    RequestItems: {
      clients: [
        {
          PutRequest: {
            Item: {
              email: e_mail,
              nome: nome,
            },
          },
        },
      ],
      clients_store: [
        {
          PutRequest: {
            Item: {
              email: e_mail,
              nome: loja,
              store: "Loja SP",
            },
          },
        },
      ],
    },
  };
  
    documentClient.batchWrite(params, function (err, data) {
    if (err) {
      console.log(err);
      response.send(err);
    } else {
      response.send(data);
    }
  });
});

let PORT = process.env.PORT || 3000

const listener = app.listen(PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
