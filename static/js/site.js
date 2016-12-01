
        function saludar(){
            swal("Hola chaca...");
        }

        function getFortuneFromServer()
        {
            //Realizando una peticion get asincrona con ajax asistida con jquery
            $.get("/getthecookie","",function(cookie, status){
                //Contenido del callback
                console.log('> status'+status);
                //Presentando el mensaje
                swal(cookie.paper);
             },'json');
       }