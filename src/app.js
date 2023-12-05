const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const log = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routers/index');

const app = express();

// Configuración de mongoose y otras configuraciones de Express...

// Configuración de express-session
app.use(session({
  secret: 'tu_secreto',
  resave: false,
  saveUninitialized: true
}));

// Middleware utiliza morgan
app.use(log('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
app.use('/', indexRouter);

// Configuración del puerto y arranque del servidor
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log('El servidor está funcionando en el puerto', app.get('port'));
});

mongoose
  .connect("mongodb+srv://node:favela03@cluster0.wxos6ze.mongodb.net/punto-venta?retryWrites=true&w=majority")
  
  .then(() => {
    console.log('Conexión a la base de datos establecida');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

// Establecer sistema de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Despliega mensaje de conectado
