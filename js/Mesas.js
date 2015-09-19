$("#admMesas").hide();

$(".mesa").dblclick(function(){
    
    if($(this).attr("id") == "mesaRoja"){
        mesaOcupada();
    }else{
     $("#admMesas").dialog({
        width: 600,
        height: 415
    });
    }
   
});

var mesaOcupada = function(){     
    $.get("views/Comandas.php",function(data){
        $("#CuerpoPagina").html(data);
    });
};
//Comandas-------------------------------------------------------------------------------------------------
$("#TablaRecetasComanda").jqGrid({
   	url:'controllers/mesasController.php?action=TraerRecetas',
	datatype: "json",
   	colNames:['Nombre','Precio', 'categoria', 'Estado'],
   	colModel:[
   		{name:'nombre',index:'id', width:55},
   		{name:'valor',index:'invdate', width:90},
   		{name:'categoria',index:'name asc, invdate', width:100},
   		{name:'Estado',index:'tax', width:80, align:"right"}
   	],
   	rowNum:10,
   	rowList:[10,20,30],
   	pager: '#TablaRecetasComanda_pagger',
   	sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    caption:"Materias prima",
    multiselect: true,
    multiboxonly: true,
    gridComplete: function(){
        alert("complete");
    }
});
$("#TablaRecetasComanda").jqGrid('navGrid','#TablaRecetasComanda_pagger',{edit:false,add:false,del:false});
$("#TablaRecetasComanda").jqGrid('setGridWidth', '685');
$("#TablaRecetasComanda").jqGrid('setGridHeight', '505');
