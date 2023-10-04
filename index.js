const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();

// // Base de datos
// dbConnection();


// Directorio Público
app.use(express.static('public'));

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );


// Rutas
app.use( '/api', require('./routes/llama-router') );


app.listen( 1000, () => {
    console.log(`Servidor corriendo en puerto ${ 1000 }`);
});

