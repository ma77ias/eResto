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
    $recetas = array(
            'nombre' => 'Rojo',
            'valor' => 'verde',
            'categoria' => 'verde',
            'Estado' => 'amarillo'
            );
    
    sendResponse(array(
            "error" => false,
            "mensaje" => "Pedido Cargado",
            "data" => $recetas
        ));
}
