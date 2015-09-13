//Materia prima----------------------------------------------------------------------------------------------
$("#LPTurnos").jqGrid({
   	url:'',
	datatype: "json",
   	colNames:['Nombre','Precio', 'Stock', 'Categoria'],
   	colModel:[
   		{name:'nombre',index:'id', width:55},
   		{name:'precio',index:'invdate', width:90},
   		{name:'stock',index:'name asc, invdate', width:100},
   		{name:'categoria',index:'amount', width:80, align:"right"}
   	],
   	rowNum:10,
   	rowList:[10,20,30],
   	pager: '#LPTurnos_pagger',
   	sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    caption:"Turnos",
    gridComplete: function(){
        alert("complete");
    }
});
$("#LPTurnos").jqGrid('navGrid','#LPTurnos_pagger',{edit:false,add:false,del:false});
$("#LPTurnos").jqGrid('setGridWidth', '685');
$("#LPTurnos").jqGrid('setGridHeight', '505');

//Receta----------------------------------------------------------------------------------------------
$("#LPListasDePrecios").jqGrid({
   	url:'',
	datatype: "json",
   	colNames:['Nombre','Valor', 'Categoria','Estado'],
   	colModel:[
   		{name:'nombre',index:'id', width:55},
   		{name:'valor',index:'invdate', width:90},
   		{name:'categoria',index:'name asc, invdate', width:100},
   		{name:'Estado',index:'tax', width:80, align:"right"}
   	],
   	rowNum:10,
   	rowList:[10,20,30],
   	pager: '#LPListasDePrecios_pagger',
   	sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    caption:"Listas de precios",
    gridComplete: function(){
        alert("complete");
    }
});
$("#LPListasDePrecios").jqGrid('navGrid','#LPListasDePrecios_pagger',{edit:false,add:false,del:false});
$("#LPListasDePrecios").jqGrid('setGridWidth', '685');
$("#LPListasDePrecios").jqGrid('setGridHeight', '505');