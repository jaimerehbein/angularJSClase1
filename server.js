var express = require('express');
var app = express();
var path = require('path');

// en public vamos a colgar todos nuestro html y javascript.

app.use(express.static(__dirname)); // Directorio donde estamos parados
app.use(express.static(path.join(__dirname, 'public'))); 

app.listen(80);
console.log('esuchando el puerto 80');

