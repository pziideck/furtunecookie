var fortunes = [
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