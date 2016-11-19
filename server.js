//Importando dependencias
var http = require('http');
var fs = require('fs');
var mime=require('mime');
var staticServer=require("./internals/static-server");
//importando manejadores
var handlers = require('./internals/handlers');

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
    console.log(`>Recurso solicitado >${url}`.data);
    if(url === "/"){
        url = '/index.html';
    }
    //verificando si la url esta asociada  a una accion
    //que puede hacer el server
    if(typeof(handlers[url]) === "function") {
        //Si existe una funcion en handlers llamada como el contenido de la variable "URL"
        handlers[url](req, res);
    }else{
        //No se encontro un manejador para la url solicitada para el usuario
        //se intentara servir de manera estatica
    staticServer.serve(url, res);
    }

 
});

server.listen(PORT, IP, function () {
    console.log(`>Server corriendo en http://${IP}:${PORT}...`.info);

});
