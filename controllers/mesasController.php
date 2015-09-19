<?php
        
    require("../utils/request.php");
    
function sendResponse($response){
    echo json_encode($response);
}

$request = new Request();
$action = $request->action;
switch($action){   
    case "TraerRecetas":
        TraerRecetas($request);
        break;   
    default:
        sendResponse(array(
            "error" => true,
            "mensaje" => "Request mal formado"
        ));
        break;
}

function TraerRecetas($request){
	 $respuesta->rows['nombre']= 'a';
	 $respuesta->rows['precio']= 'b';
	 $respuesta->rows['categoria']= 'c';
	 $respuesta->rows['estado']= 'c';
    
    sendResponse(array(
            "error" => false,
            "mensaje" => "Pedido Cargado",
            "data" => json_encode($recetas);
        ));
}
