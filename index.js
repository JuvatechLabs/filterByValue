const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const port = 3030;

let router = express.Router();
const db = require('./app/config/db.config.js'); 
//const filter = require('./app/controllers/controller.js');

let path = __dirname + '/views/';

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
    response.sendFile(path+"index.html");
  })
  
//app.get('/getTransactions', db.getTransactions)
app.get('/getTransactionsBySex/:Sex' , db.getTransactionsBySex)

  const server = app.listen(3030, function () {
    let host = server.address().address
    let port = server.address().port
  
    console.log("App listening at http://%s:%s", host, port); 
  })