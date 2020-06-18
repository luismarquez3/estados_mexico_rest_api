/**
 * Configuracion principal para el servidor
 */

require('dotenv').config();

const express = require('express');

const path = require('path');

//Libreria de parcer de form a json
const bodyParser = require('body-parser');

//recibimos app de la ruta usuario
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//Habilitar carpeta public
app.use( express.static(path.resolve(  __dirname, '../public')));

//configuracion global de rutas
app.use( require('./routes/index') );

app.listen(process.env.PORT, () =>{
    console.log('Escuchando puerto:', process.env.PORT);
});