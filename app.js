var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

app.set('view engin' , 'ejs');

app.use(express.static('./public'))

todoController(app);

app.listen(3000);
console.log("ypu ar listening port 3000");
