<?php
    require("connection.php");

    class UsuarioData
    {
        private $connection;
    
        public function __construct(){
            $this->connection = Connection::getInstance();
        }
        
        public function validar($login, $pass){
            
            require("../models/usuario.php");
            $retorno;
            
            $query = "select u.idusuario AS 'IDUSUARIO',
                            u.idempleado AS 'IDEMPLEADO',
                            u.login AS 'LOGIN',
                            u.pass AS 'PASS',
                            bot.boton AS 'ID', 
                            bot.nombre AS 'NOMBRE'
            from usuarios u 
            left join perfiles p
                on u.idperfil = p.idperfil
            left join permisos per
                on p.idpermiso = per.idpermiso
            left join botonera bot
                on bot.idBoton = per.idBoton
            where u.login = '$login' and u.pass = '$pass'
            order by bot.orden asc";

            if($result = $this->connection->query($query)){
                
                $user = new Usuario();
                $permisos = array();
                
                while($fila = $result->fetch_assoc()){   
                    
                    $user->set_idUsuario($fila["IDUSUARIO"]);
                    $user->set_idEmpleado($fila["IDEMPLEADO"]);
                    $user->set_login($fila["LOGIN"]);
                    $user->set_pass($fila["PASS"]);

                    $per['ID'] = $fila['ID'];
                    $per['NOMBRE'] = $fila['NOMBRE'];
                    
                    $permisos[] = $per;
                }
                
                $user->set_permisos($permisos);
                
                $retorno = $user;
                $result->free();                    
            }
            
            return $retorno;
        }
    }

?>