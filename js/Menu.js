<<<<<<< HEAD
//Menu----------------------------------------------------------------------------------------------
=======
<<<<<<< HEAD
//Menu----------------------------------------------------------------------------------------------
=======
//Materia prima----------------------------------------------------------------------------------------------
>>>>>>> origin/master
>>>>>>> origin/master
$("#Menu").jqGrid({
	datatype: "local",
   	colNames:['Nombre','Precio', 'Stock', 'Categoria'],
   	colModel:[
   		{name:'nombre',index:'id', width:55},
   		{name:'precio',index:'invdate', width:90},
   		{name:'stock',index:'name asc, invdate', width:100},
   		{name:'categoria',index:'amount', width:80, align:"right"}
   	],
    caption:"Recetas"
});
$("#Menu").jqGrid('navGrid','#Menu_pagger',{edit:false,add:false,del:false});
$("#Menu").jqGrid('setGridWidth', '1346');
$("#Menu").jqGrid('setGridHeight', '505');

var mydata = [
	{nombre:"Milanesas con Papas fritas",precio:"150",stock:"150",categoria:"Rapidas"},
    {nombre:"Parrillada",precio:"500",stock:"150",categoria:"Compartir"},
    {nombre:"Fideos",precio:"100",stock:"150",categoria:"Rapidas"},
    {nombre:"Coca-Cola",precio:"40",stock:"150",categoria:"Bebidas"},
    {nombre:"Frutillas",precio:"100",stock:"150",categoria:"Postre"},
    {nombre:"Sushi",precio:"300",stock:"150",categoria:"note"}
		];
for(var i=0;i<=mydata.length;i++)
	jQuery("#Menu").jqGrid('addRowData',i+1,mydata[i]);

