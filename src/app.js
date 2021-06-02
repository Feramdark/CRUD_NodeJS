const express = require('express');
const log = require('morgan');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index.js');//
const mongo = require('mongoose');




//Variables de conexion con MONGODB usando Moongose
const usser = "ferami_PC";
const password = "ferami0898";
const dbName = "iot_fer";
const url = `mongodb+srv://${usser}:${password}@ferambase.yxuvm.mongodb.net/${dbName}?retryWrites=true&w=majority`;





//listen to server
app.set('port',process.env.PORT|| 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view egine','ejs');

//connection to DB
mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }) // parametros del metodo connect de mongoose
  .then(() => console.log("Conectado")) /*mensajes de confirmacion */
  .catch((e) => console.log("Error de conexion", e));

//middleware
app.use(log('dev')); 
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/',indexRoutes);


app.listen(app.get('port'),()=>{
    console.log('Servidor funcionando puerto', app.get('port'));
});

