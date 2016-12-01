var colors = require("colors");
colors.setTheme(require("../config/config").colorTheme);
var fortune = require("./fortune");

// Creando el handler
// getfortune
var _crackTheCookie = function(req, res){
    console.log("> Cookie crash requested...".data);
    fortune.getFortune(function(fortunePaperObj){
        // Preparando encabezados para contestar
        // Json
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        // Respondiendo con el objeto
        res.end(fortunePaperObj);
    });
};

var _getAuthor = function(req, res){
    console.log("> Se solicito: Author..".data);
    res.end("Author: Ivan Rivalcoba");
};


// Creando Objeto manejador
var handlers = {};

// Registrando manejadores
<<<<<<< HEAD
handlers["/getthecookie"] = _crackTheCookie;
=======
handlers["/crackthecookie"] = _crackTheCookie;
>>>>>>> dba29a1e4293ee90cd34a0d984526551c1f8ec1d
handlers["/getAuthor"] = _getAuthor;

// Exportando objeto manejador
module.exports = handlers;