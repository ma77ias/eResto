<?php
    function getConnection(){
        $mysqli = new mysqli("localhost", "root", "34368940", "ventasdb");
        if( $mysqli->connect_errno ){
            die("Error al intentar establecer la conexión con MySQL");
        }else{
            $mysqli->query("SET NAMES 'utf8'");
            return $mysqli;
        }
    }
?>