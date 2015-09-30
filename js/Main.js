$("#btnIngresar").click(function(event){
    
    event.preventDefault();
    
    $.ajax({
        url: 'controllers/usuariosController.php?action=validarUsuario',
        method: 'GET',
        data: { 
            Login: $("#inputLogin").val(),
            Pass: $("#inputPass").val()  
        },
        dataType: 'json'        
        }).done(function(res){
        
            if(!res.error && res.data["_idUsuario"]){
                
                var html = '<div class="col-md-10"> ';
                
                $.each(res.data["_permisos"],function(index,contenido){
                    html += '<a id="'+contenido["ID"]+'" class="btn btn-info" role="button">'+contenido["NOMBRE"]+'</a>'
                });
                
                html += '</div>'+
                    '<div class="col-md-2">'+
                        '<a id="btnSalir" class="btn btn-info" role="button">Salir</a>'+
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
            }else{
                alert("Nombre de usuario o contraseña invalidos");
            }
    });                    
});