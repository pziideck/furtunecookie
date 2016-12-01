var colors = require("colors");
    colors.setTheme(require("../config/config").colorTheme);
var fortune = require("./fortune");

var _getAuthor = function(req, res){
    console.log("> Se solicito: Author..".data);
    res.end("Author: Diego Galindo");
};

// Creando el handler getfortune
var _crackTheCookie = function(req, res){
    console.log("> Cookie crash requested...");
    fortune.getFortune1(function(fortunePaperObject){
        // Preparando encabezados para contestar Json
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        // Respondiendo con el objeto
        res.end(fortunePaperObject);
    });
};



// Creando Objeto manejador
var handlers = {};

// Registrando manejadores

handlers["/getthecookie"] = _crackTheCookie;

handlers["/getAuthor"] = _getAuthor;

// Exportando objeto manejador
module.exports = handlers;