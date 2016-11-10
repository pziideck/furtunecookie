var http = require('http');
var fs = require('fs');
var mime=require('mime');

var colors = require('colors');
//estableciendo tema de colores
//Importando el objeto configurador
var config = require ('./config/config');



colors.setTheme(config.colorTheme);
//importando configuraciones 
    var IP = config.IP,
        PORT = config.PORT;

var server = http.createServer(function (req, res) {
    var url  = req.url;
    if(url === "/"){
        url = '/index.html'
    }
    // Generar la ruta real del archivo socilitado

    

    console.log(`>Recurso solicitado >${url}`.data);
    var filePath = './static' + url;
    console.log(`> Se servira archivo: ${filePath}`.data);
    //Seleccionar el tipo mime
    var mimeType = mime.lookup(filePath);
    fs.readFile(filePath,
        function (err, content) {

            if (err) {//hubo error
                res.writeHead(500, {
                    'Content-Type': "text/html"

                });
                console.log('>error en la lectura de'.error +
                    'un archivo: ln20 server.js'.error);

                res.end("<h1>Error Interno</h1>")

            } else {//no hubo error
                res.writeHead(200, {
                    'Content-Type': mimeType
                });
                console.log(`>sirviendo: ${filePath}` .data);
                res.end(content);
            }
        });
});

server.listen(3000, '127.0.0.1', function () {
    console.log(`>Server corriendo en http://${IP}:${PORT}...`.info);


});
