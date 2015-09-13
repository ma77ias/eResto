$("#admMesas").hide();

$(".mesa").dblclick(function(){
    $("#admMesas").dialog({
        width: 600,
        height: 415
    });
});