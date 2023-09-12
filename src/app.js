const express = require('express'); //referencia a framework express
const app = express(); //se conecta la apliccacion a express
const log = require('morgan'); //para saber los clientes conectados
const bodyParser = require('body-parser');
const path = require('path');
const IndexRouters = require('./routers/index.js');
const { default: mongoose } = require('mongoose');

app.set('port', process.env.PORT || 3000); // asigna puerto 3000

//middleware utiliza morgan
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));
//rutas
app.use('/',IndexRouters);

app.listen(app.get('port'), () =>{
    console.log('el servidor ta funcionando en el puerto', app.get('port'));
    }
    );
    mongoose.connect("mongodb+srv://node:favela03@cluster0.wxos6ze.mongodb.net/punto-venta?retryWrites=true&w=majority")
    .then(bd=>console.log('bd conectada'))
    .catch(err=>console.log(err));

    //establecer sistema de ventas
    app.set('views',path.join(__dirname,'views'));
    app.set('view engine', 'ejs');
    
    //despliega mensaje de conectado