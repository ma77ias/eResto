$("#btnIngresar").click(function(event){
    
        var html = '<div class="col-md-10"> '+
                        '<a id="mesasLink" class="btn btn-info" role="button">Mesas</a>'+
                        '<a id="personalLink" class="btn btn-info" role="button">Personal</a>'+
                        '<a id="menuLink" class="btn btn-info" role="button">Menu</a>'+
                        '<a id="listasPreciosLink" class="btn btn-info" role="button">Listas de precios</a>'+
                        '<a id="clientesLink" class="btn btn-info" role="button">Clientes</a>'+
                        '<a id="ventasLink" class="btn btn-info" role="button">Ventas</a>'+
                        '<a id="gestionLink" class="btn btn-info" role="button">Gestion</a>'+
                    '</div>'+
                    '<div class="col-md-2">'+
                        '<a href="#" class="btn btn-info" role="button">Salir</a>'+
                    '</div>';
        $("#botonera").html(html);
        $("#FormLogIn").remove();
       //Mesas
        $("#mesasLink").click(function(){
            $.get("views/mesas.php",function(data){
                $("#CuerpoPagina").html(data);
            });
        });

        //Personal
        $("#personalLink").click(function(){
            $.get("views/personal.php",function(data){
                $("#CuerpoPagina").html(data);
            });
        });

        //Menu
        $("#menuLink").click(function(){
            $.get("views/menu.php",function(data){
                $("#CuerpoPagina").html(data);
            });
        });

        //Listas de precios
        $("#listasPreciosLink").click(function(){
            $.get("views/ListasDePrecios.php",function(data){
                $("#CuerpoPagina").html(data);
            });
        });

        //Clientes
        $("#clientesLink").click(function(){
            $.get("views/Clientes.php",function(data){
                $("#CuerpoPagina").html(data);
            });
        });

        //Ventas
        $("#ventasLink").click(function(){
            $.get("views/Ventas.php",function(data){
                $("#CuerpoPagina").html(data);
            });
        });

        //Gestion
        $("#gestionLink").click(function(){
            $.get("views/Gestion.php",function(data){
                $("#CuerpoPagina").html(data);
            });
        });
});

