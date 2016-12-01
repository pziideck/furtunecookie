
<<<<<<< HEAD
        function saludar(){
            swal("Hola chaca...");
        }

        function getFortuneFromServer(){
            //Realizando una peticion get asincrona con ajax asistida con jquery
            $.get(url,"/getthecookie","",function(cookie, status){
                //Contenido del callback
                console.log('>status'+status);
                //Presentando el mensaje
                swal(cookie.paper);
            },'json')
=======
        function saludar (){
            swal("Hola chaca...");
>>>>>>> dba29a1e4293ee90cd34a0d984526551c1f8ec1d
        }