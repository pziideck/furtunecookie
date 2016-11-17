//Importando dependencias
var http = require('http');
var fs = require('fs');
var mime=require('mime');
var staticServer=require("./internals/static-server");

//estableciendo tema de colores
var colors = require('colors');
//Importando el objeto configurador
var config = require ('./config/config');

colors.setTheme(config.colorTheme);
//importando configuraciones 
    var IP = config.IP,
        PORT = config.PORT;

var server = http.createServer(function (req, res) {
    var url  = req.url;
    if(url === "/"){
        url = '/index.html';
    }
    // Generar la ruta real del archivo socilitado
    console.log(`>Recurso solicitado >${url}`.data);
    staticServer.serve(url, res);
 
});

server.listen(PORT, IP, function () {
    console.log(`>Server corriendo en http://${IP}:${PORT}...`.info);

});
