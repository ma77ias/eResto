//Turnos----------------------------------------------------------------------------------------------
$("#LPTurnos").jqGrid({
	datatype: "local",
   	colNames:['Id','Nombre', 'Inicio', 'Fin'],
   	colModel:[
   		{name:'idTurno',index:'idTurno', width:55},
   		{name:'nombreTurno',index:'nombreTurno', width:90},
   		{name:'horaInicio',index:'horaInicio', width:100},
   		{name:'horaFin',index:'horaFin', width:80, align:"right"}
   	],  
    caption:"Turnos"
});
$("#LPTurnos").jqGrid('navGrid','#LPTurnos_pagger',{edit:false,add:false,del:false});
$("#LPTurnos").jqGrid('setGridWidth', '650');
$("#LPTurnos").jqGrid('setGridHeight', '505');

var mydata = [
	{idTurno:"1",nombreTurno:"Mañana",horaInicio:"09",horaFin:"12"},
    {idTurno:"2",nombreTurno:"Medio Dia",horaInicio:"12",horaFin:"15"},
    {idTurno:"3",nombreTurno:"Tarde",horaInicio:"15",horaFin:"18"},
    {idTurno:"4",nombreTurno:"Noche",horaInicio:"18",horaFin:"21"}
];

for(var i=0;i<=mydata.length;i++)
	jQuery("#LPTurnos").jqGrid('addRowData',i+1,mydata[i]);

//Listas de precios----------------------------------------------------------------------------------------------
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
$("#LPListasDePrecios").jqGrid('setGridWidth', '650');
$("#LPListasDePrecios").jqGrid('setGridHeight', '505');