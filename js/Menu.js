var heightDerecho = 205;
var widthDerecho = 655;

//Materia prima----------------------------------------------------------------------------------------------
$("#MenuMateriaPrima").jqGrid({
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
   	pager: '#MenuMateriaPrima_pagger',
   	sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    caption:"Materias prima",
    gridComplete: function(){
        alert("complete");
    }
});
$("#MenuMateriaPrima").jqGrid('navGrid','#MenuMateriaPrima_pagger',{edit:false,add:false,del:false});
$("#MenuMateriaPrima").jqGrid('setGridWidth', '685');
$("#MenuMateriaPrima").jqGrid('setGridHeight', '505');

//Receta----------------------------------------------------------------------------------------------
$("#MenuReceta").jqGrid({
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
   	pager: '#MenuReceta_pagger',
   	sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    caption:"Recetas",
    gridComplete: function(){
        alert("complete");
    }
});
$("#MenuReceta").jqGrid('navGrid','#MenuReceta_pagger',{edit:false,add:false,del:false});
$("#MenuReceta").jqGrid('setGridWidth', widthDerecho);
$("#MenuReceta").jqGrid('setGridHeight', heightDerecho);
//Receta - Materia Prima---------------------------------------------------------------------------------------------
$("#MenuRecetaMateriaPrima").jqGrid({
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
   	pager: '#MenuRecetaMateriaPrima_pagger',
   	sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    caption:"Composicion Receta",
    gridComplete: function(){
        alert("complete");
    }
});
$("#MenuRecetaMateriaPrima").jqGrid('navGrid','#MenuRecetaMateriaPrima_pagger',{edit:false,add:false,del:false});
$("#MenuRecetaMateriaPrima").jqGrid('setGridWidth', widthDerecho);
$("#MenuRecetaMateriaPrima").jqGrid('setGridHeight', heightDerecho);