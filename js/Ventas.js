$("#VentasCambiarTurno").click(function(){
    $.get("views/Ventas_CambiarTurno.php",function(data){
        $("#ContenedorVentasDerecho").html(data);
    });
});


$("#VentasVentaDiaria").click(function(){
       
    $.get("views/Ventas_VentaDiaria.php",function(data){
        $("#ContenedorVentasDerecho").html(data);
        
        //Venta Diaria----------------------------------------------------------------------------------------------
        $("#VentaDIaria").jqGrid({
            datatype: "local",
            colNames:['Fecha', 'Cliente', 'Receta', 'Cantidad', 'Turno', 'Pago', 'Total' ],
            colModel:[
                {name:'fecha',index:'fecha', width:55},
                {name:'cliente',index:'cliente', width:90},
                {name:'receta',index:'receta', width:100},
                {name:'cantidad',index:'cantidad', width:80, align:"right"},
                {name:'turno',index:'turno', width:55},
                {name:'pago',index:'pago', width:90},
                {name:'total',index:'total', width:100},
            ],
            caption:"Recetas"
        });
        $("#VentaDIaria").jqGrid('navGrid','#VentaDIaria_pagger',{edit:false,add:false,del:false});
        $("#VentaDIaria").jqGrid('setGridWidth', '1100');
        $("#VentaDIaria").jqGrid('setGridHeight', '505');

        var mydata = [
            {fecha: '15-09-2015', cliente: 'Micaela Feldstein', receta: 'sushi', cantidad: '10', pago: 'pesos', total:'300'},
            {fecha: '15-09-2015', cliente: 'Hernan Braylan', receta: 'Fideos', cantidad: '1', pago: 'pesos', total:'50'},
            {fecha: '15-09-2015', cliente: 'Matias Gonzalez', receta: 'Milanesa con papas fritas', cantidad: '1', pago: 'pesos', total:'50'},
                ];

        for(var i=0;i<=mydata.length;i++)
            jQuery("#VentaDIaria").jqGrid('addRowData',i+1,mydata[i]);
    });
});



