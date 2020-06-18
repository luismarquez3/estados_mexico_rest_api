/**
 * Aqui defininimos la configuracion de las rutas o archivos que contiene las rutas
 * @require express
 * @require path
 * 
 */
const express = require('express');
const path = require('path');
const app = express();

//app.use(require(/*'tu archivo'*/));
app.use(require('./estados'));

module.exports = app;