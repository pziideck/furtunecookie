//conexion a mongo
var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

// modulo getfortune con conexion a base de datos
module.exports= { 
    "getFortune" : function (cb) {
        //conectando a la base de datos
        mongoClient.connect('mongodb://127.0.0.1:27017/fortunecookie', 
        function(err, db)
        {
            if(err)
            {
                console.log(">Error de conexion con la base de datos");

                var fortunePaper = {
                    "paper" : "life is a risk, cainal"
                };
                //--Convertir la fortuna a un string.--
                var fortunePaperObject = JSON.stringify(fortunePaper);
                //--Ejecuto mi callback y le paso como parametro mi string--
                cb(fortunePaperObject);
            }
            else{
            var fortunesCollection = db.collection("fortunes");
            // encontrar mis paper en mi bd
            var busca = fortunesCollection.find({});

                busca.toArray(function(err, paper)
                {

                var paperRandom = Math.round(Math.random(0)* paper.length);
                
                var fortunePaperObject = JSON.stringify(paper[paperRandom]);

                db.close();

                console.log(">fortuna servida:"+fortunePaperObject);

                cb(fortunePaperObject);

                });
            }
        });
    }
};

var fortunes1 = [
    "life is a risk, cainal",
    "vive la vida loca",
    "La felicidad y la tristeza son dos caras de la misma moneda.",
    "Socorro me tienen encerrado en una fabrica de galletas de la fortuna",
    "Al mal tiempo buena cara",
    "puto el que lo lea",
    "rendirse jamas",
    "tatuate - INK KING MX",
    "dile que no",
    "dile que si",
    "¿Por que no?",
    "Cámbiate de carrera",
    "Chingue su madre…",
    "Porque no estudie Cheff",
    "porque… fin de semestre",
    "yo que sé solo soy una galleta",
    "que chingue su madre el america",
    "cambiate a ambiental",
    "¿que me lees? te gusto o que",
    "¿Es neta?",
    "dale a tu cuerpo alegria macarena"];

    function getIntRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }

// modulo getfortune con conexion local con fortunes1
module.exports = {
    "getFortune1" : function(cb){
        // Construyo objeto respuesta
        var selector = getIntRandomNumber(0,fortunes1.length -1);
        var fortuneMessage = fortunes1[selector];
        var fortunePaperObject = {
            "paper" : fortuneMessage
        };
        cb(JSON.stringify(fortunePaperObject));
    }
};