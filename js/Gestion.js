$("#opcUsuarios").click(function(){
    $.get("views/abmUsuarios.php",function(data){
        $("#ContenedorGestionDerecho").html(data);
        
        $("#admUsuario").hide();
        
        cargarManejadorBotonUsuarios();
    });
});

$("#opcPerfiles").click(function(){
    $.get("views/abmPerfiles.php",function(data){
        $("#ContenedorGestionDerecho").html(data);        
        
        $("#admPerfiles").hide();
        
        cargarManejadorBotonPerfiles();
    });
});

$("#opcCtaCte").click(function(){
    $.get("views/abmCtaCte.php",function(data){
        $("#ContenedorGestionDerecho").html(data);        
        
        $("#admCtaCte").hide();
        
        cargarManejadorBotonCtaCte();
    });
});



var cargarManejadorBotonUsuarios = function(){
    
    $("#usuarioAlta").click(function(){
        $("#admUsuario").dialog({
        width: 600,
        height: 415,
        buttons: {
			"Aceptar": function() {
			}
		 }
    });
    });    
}

var cargarManejadorBotonPerfiles = function(){

     $("#perfilAlta").click(function(){
        $("#admPerfiles").dialog({
        width: 600,
        height: 415,
        buttons: {
			"Aceptar": function() {
			}
		 }
    });
    });
    
}


var cargarManejadorBotonCtaCte = function(){

     $("#ctaCteAlta").click(function(){
        $("#admCtaCte").dialog({
        width: 600,
        height: 415,
        buttons: {
			"Aceptar": function() {
			}
		 }
    });
    });
    
}