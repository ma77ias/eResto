<?php
        
    require("../utils/request.php");
    
function sendResponse($response){
    echo json_encode($response);
}

$request = new Request();
$action = $request->action;
switch($action){   
    case "validarUsuario":
        validarUsuario($request);
        break;   
    default:
        sendResponse(array(
            "error" => true,
            "mensaje" => "Request mal formado"
        ));
        break;
}

function validarUsuario($request){
    
    require("../data/UsuarioData.php");
    
    $UsuarioData = new UsuarioData();
    
    $login = $request->Login;
    $pass = $request->Pass;    
    
    if($usuario = $UsuarioData->validar($login, $pass)){
        sendResponse(array(
            "error" => false,
            "mensaje" => "Usuario validado",
            "data" => $usuario
        ));
    }else{
        sendResponse(array(
            "error" => true,
            "mensaje" => "Error..."
        ));
    }
    
    
}
