$("#divMoneda").hide();
$("#divTarjeta").hide();
$("#divCtaCte").hide();

$("#Moneda").click(function(){
    $("#divMoneda").dialog({
        width: 600,
        height: 415,
        buttons: {
			"Agregar": function() {
                
                var tipo = "Moneda";
                var descripcion= $("#selectMoneda").val();
                var cantidad = $("#CantidadMonedaInput").val();
                
                var cantidadActual = $("#CantidadPagoTotal").val();
                
                var agregar = '<tr>'+ 
							'<td>'+tipo+'</td>'+
                            '<td>'+descripcion+'</td>'+
                            '<td>'+cantidad+'</td>'+
                            '<td><span class="glyphicon glyphicon-remove eliminarProdComanda" aria-hidden="true"></span></td>'+  
                        '</tr>';
                
                $("#tablaPagos tr:last").after(agregar);
                
                $("#CantidadPagoTotal").html(cantidadActual + cantidad);
                
				$("#divMoneda").dialog("close");
			}
		 }
    });
});

$("#Tarjeta").click(function(){
   $("#divTarjeta").dialog({
        width: 600,
        height: 415,
        buttons: {
			"Agregar": function() {
                var tipo = "Tarjeta";
                var descripcion= $("#selectTarjeta").val();
                var cantidad = $("#CantidadTarjetaInput").val();
                
                var cantidadActual = $("#CantidadPagoTotal").val();
                
                var agregar = '<tr>'+ 
							'<td>'+tipo+'</td>'+
                            '<td>'+descripcion+'</td>'+
                            '<td>'+cantidad+'</td>'+
                            '<td><span class="glyphicon glyphicon-remove eliminarProdComanda" aria-hidden="true"></span></td>'+  
                        '</tr>';
                
                $("#tablaPagos tr:last").after(agregar);
                
                $("#CantidadPagoTotal").html(cantidadActual + cantidad);
                
				$("#divTarjeta").dialog("close");
			}
		 }
    });
});

$("#CtaCte").click(function(){
   $("#divCtaCte").dialog({
        width: 600,
        height: 415,
        buttons: {
			"Agregar": function() {
                var tipo = "Cuenta Corriente";
                var descripcion= "";
                var cantidad = $("#CantidadCtaCteInput").val();
                
                var cantidadActual = $("#CantidadPagoTotal").val();
                
                var agregar = '<tr>'+ 
							'<td>'+tipo+'</td>'+
                            '<td>'+descripcion+'</td>'+
                            '<td>'+cantidad+'</td>'+
                            '<td><span class="glyphicon glyphicon-remove eliminarProdComanda" aria-hidden="true"></span></td>'+  
                        '</tr>';
                
                $("#tablaPagos tr:last").after(agregar);
                
                $("#CantidadPagoTotal").html(cantidadActual + cantidad);
                
				$("#divCtaCte").dialog("close");
			}
		 }
    });
});