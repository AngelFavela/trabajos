const express = require('express'); //referencia a framework express
const app = express(); //se conecta la apliccacion a express
const log = require('morgan'); //para saber los clientes conectados
const bodyParser = require('body-parser');
const IndexRouters = require('./routers/index.js');
app.set('port', process.env.PORT || 3000); // asigna puerto 3000

//middleware utiliza morgan
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));
//rutas
app.use('/',IndexRouters);

app.listen(app.get('port'), () =>{
    console.log('el servidor ta funcionando en el puerto', app.get('port'));
    }
    ); //despliega mensaje de conectado