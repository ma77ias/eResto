$("#admMesas").hide();
$("#cubiertosMesa").hide();

$(".mesa").dblclick(function(){
    
    if($(this).attr("id") == "mesaRoja"){
        mesaOcupada();
    }else{
     $("#admMesas").dialog({
        width: 600,
        height: 415,
		 buttons: {
			"Abrir mesa": function() {
				$("#admMesas").dialog("close");
				mesaOcupada();
			}
		 }
	 });
	}
});

var mesaOcupada = function(){     
    $.get("views/Comandas.php",function(data){
        $("#CuerpoPagina").html(data);
    });
};
//Comandas-------------------------------------------------------------------------------------------------
jQuery("#TablaRecetasComanda").jqGrid({
	datatype: "local",
	height: 250,
   	colNames:['numeroReceta','Nombre','Precio', 'categoria', 'Estado'],
   	colModel:[
		{name:'numeroReceta',index:'numeroReceta', width:100},
   		{name:'nombre',index:'id', width:200},
   		{name:'valor',index:'valor', width:90},
   		{name:'categoria',index:'categoria', width:100},
   		{name:'Estado',index:'Estado', width:80, align:"right"}
   	],
   	caption: "Recetas"
});
var mydata = [
	{numeroReceta:"1",nombre:"Milanesas con papas fritas",valor:"150",categoria:"Rapidas",Estado:"note"},
	{numeroReceta:"2",nombre:"Parrillada",valor:"500",categoria:"Compartir",Estado:"note"},
	{numeroReceta:"3",nombre:"Fideos",valor:"100",categoria:"test",Estado:"note"},
	{numeroReceta:"4",nombre:"Coca-Cola",valor:"40",categoria:"test",Estado:"note"},
	{numeroReceta:"5",nombre:"Frutillas",valor:"35",categoria:"test",Estado:"note"},
	{numeroReceta:"6",nombre:"Sushi",valor:"300",categoria:"test",Estado:"note"}
		];
for(var i=0;i<=mydata.length;i++)
	jQuery("#TablaRecetasComanda").jqGrid('addRowData',i+1,mydata[i]);

$("#agregarProductoComanda").click(function(){

	var selectedRowId = $('#TablaRecetasComanda').jqGrid ('getGridParam', 'selrow');
    var NumReceta = $('#TablaRecetasComanda').jqGrid('getCell', selectedRowId, 'numeroReceta');
	var NombreProd = $('#TablaRecetasComanda').jqGrid('getCell', selectedRowId, 'nombre');
	var PrecioProd = $('#TablaRecetasComanda').jqGrid('getCell', selectedRowId, 'valor');
	var cantidad = $("#cantidadProdComanda").val();
	
	if(cantidad == ''){
		alert("Debe seleccionar la cantidad");
	}else{
		var agregar = '<tr id="'+NumReceta+'" class="trTablaComanda">'+ 
							'<td>'+cantidad+'</td>'+
                            '<td>'+NombreProd+'</td>'+
                            '<td>'+cantidad * PrecioProd+'</td>'+
                            '<td><span id="'+NumReceta+'" class="glyphicon glyphicon-remove eliminarProdComanda" aria-hidden="true"></span></td>'+
                            '<td class="chk"><input class="chkEnviar" type="checkbox"></td>'+                   
                        '</tr>';
	
		$("#comanda tr:last").after(agregar);
        
        agregarControladorEvento();
	}

	
});

var agregarControladorEvento = function(){
    $(".trTablaComanda").click(function(){
        
    });                                                                                             
    
    $(".eliminarProdComanda").click(function(){
         
        var id = $(this).attr("id");
            
        $("#comanda tbody tr#4").hide();
        
    });
};

$("#btnEnviarComanda").click(function(){
     
    $('#comanda tr').each(function () {

        var pk = $(this).find("td").eq(4).children();

        alert(pk);
        
        if( $(pk).attr('checked') ) {
            alert("check");
        }
        
    });
    
    
});

$("#btnCerrarMesa").click(function(){    
    $.get("views/formasDePago.php", function(data){
        $("#tablaDerecha").html(data);
        
        var ticket = '<button id="btnImprimirTicket" type="text" class="btn btn-default">Imprimir Ticket</button>';
        
        $("#botoneraComanda").html(ticket);
    });
});

$("#addMesa").click(function(){
  
    $("#cubiertosMesa").dialog({
        width: 300,
        height: 300,
		 buttons: {
			"Agregar": function() {
                
                var mesa = '<div class="Mesa"><label>Mesa 17</label><label>Cubiertos: '+ $("#CantCubiertos").val() +'</label></div>';
    
                $("#ContenedorMesas").append(mesa);
				$("#cubiertosMesa").dialog("close");
			
			}
		 }
	 });

});







