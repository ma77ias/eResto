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
    case "agregarMesa":
        agregarMesa($request);
        break;   
    default:
        sendResponse(array(
            "error" => true,
            "mensaje" => "Request mal formado"
        ));
        break;
}

function TraerRecetas($request){};

function agregarMesa($request){    
    require("../data/MesasData.php");
    
    $MesasData = new MesasData();
    
    $Cubiertos = $request->Cubiertos;
    
    if($cubiertosAgregar = $MesasData->Agregar($Cubiertos)){
        sendResponse(array(
            "error" => false,
            "mensaje" => "Mesa agregada",
            "data" => $cubiertosAgregar
        ));
    }else{
        sendResponse(array(
            "error" => true,
            "mensaje" => "Error..."
        ));
    }
}
