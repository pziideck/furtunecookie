var fortunes = [
<<<<<<< HEAD
    "life is a risk, carnal","vive la vida loca","La felicidad y la tristeza son dos caras de la misma moneda.",
    "Socorro me tienen encerrado en una fabrica de galletas de la fortuna","Al mal tiempo buena cara",
    "puto el que lo lea","rendirse jamas","tatuate - INK KING MX","dile que no","dile que si","¿Por que no?",
    "Cámbiate de carrera","Chingue su madre…","Porque no estudie Cheff","porque… fin e semestre","yo que sé solo soy una galleta",
    "que chingue su madre el america"
=======
    "In order to succeed, we must first believe that we can",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best",
    "Always do your best. What you plant now, you will harvest later",
    "If you can dream it, you can do it.",
    "It always seems impossible until it's done."
>>>>>>> dba29a1e4293ee90cd34a0d984526551c1f8ec1d
    ];

    function getIntRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
module.exports = {
    "getFortune" : function(cb){
        // Construyo objeto respuesta
        var selector = getIntRandomNumber(0,fortunes.length -1);
        var fortuneMessage = fortunes[selector];
        var fortunePaperObject = {
            "paper" : fortuneMessage
        };
        cb(JSON.stringify(fortunePaperObject));
    }
};