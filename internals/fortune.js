var fortunes = [
    "In order to succeed, we must first believe that we can",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best",
    "Always do your best. What you plant now, you will harvest later",
    "If you can dream it, you can do it.",
    "It always seems impossible until it's done."
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