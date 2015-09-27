//Turnos----------------------------------------------------------------------------------------------
$("#Clientes").jqGrid({
	datatype: "local",
   	colNames:['Id','Nombre','Apellido','DNI','Direccion','CP'],
   	colModel:[
   		{name:'idCliente',index:'idTurno', width:55,editable:true},
   		{name:'nombreCliente',index:'nombreTurno', width:90,editable:true},
   		{name:'apellidoCliente',index:'horaInicio', width:100,editable:true},
   		{name:'dni',index:'horaFin', width:80, align:"right",editable:true},
        {name:'direccion',index:'idTurno', width:55,editable:true},
   		{name:'cp',index:'nombreTurno', width:90,editable:true},
   	],  
    caption:"Clientes"
});
$("#Clientes").jqGrid('navGrid','#Clientes_pagger',{edit:false,add:false,del:false});
$("#Clientes").jqGrid('setGridWidth', '1347');
$("#Clientes").jqGrid('setGridHeight', '600');

var mydata = [
    {idCliente:'1',nombreCliente:'Matias',apellidoCliente:'Braylan',dni: '34368940', direccion: '20 de septiembre', cp:'123'}
];

for(var i=0;i<=mydata.length;i++)
	jQuery("#Clientes").jqGrid('addRowData',i+1,mydata[i]);

$("#addCliente").click(function(){
	jQuery("#Clientes").jqGrid('editGridRow',"new",{height:280,reloadAfterSubmit:false});
});

$("#editCliente").click(function(){
	var gr = jQuery("#Clientes").jqGrid('getGridParam','selrow');
	if( gr != null ) jQuery("#Clientes").jqGrid('editGridRow',gr,{height:280,reloadAfterSubmit:false});
	else alert("Seleccione una fila");
});
$("#delCliente").click(function(){
	var gr = jQuery("#Clientes").jqGrid('getGridParam','selrow');
	if( gr != null ) jQuery("#Clientes").jqGrid('delGridRow',gr,{reloadAfterSubmit:false});
	else alert("Seleccione una fila!");
});