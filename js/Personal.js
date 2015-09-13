$("#tablaPersonal").jqGrid({
   	url:'',
	datatype: "json",
   	colNames:['Nombre','Telefono', 'Fecha ingreso', 'Perfil','Estado'],
   	colModel:[
   		{name:'nombre',index:'id', width:55},
   		{name:'telefono',index:'invdate', width:90},
   		{name:'FechaInreso',index:'name asc, invdate', width:100},
   		{name:'perfil',index:'amount', width:80, align:"right"},
   		{name:'Estado',index:'tax', width:80, align:"right"}
   	],
   	rowNum:10,
   	rowList:[10,20,30],
   	pager: '#tablaPersonal_pagger',
   	sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    caption:"Personal",
    gridComplete: function(){
        alert("complete");
    }
});
$("#tablaPersonal").jqGrid('navGrid','#tablaPersonal_pagger',{edit:false,add:false,del:false});
$("#tablaPersonal").jqGrid('setGridWidth', '1363');
$("#tablaPersonal").jqGrid('setGridHeight', '505');