<?php 
    class usuario{
        
        var $_idUsuario;
        var $_idEmpleado;
        var $_permisos;
        var $_login; 
        var $_pass;
        
        function get_idUsuario(){
            return $this->_idUsuario;
        }
        
        function set_idUsuario($idUsuario){
            $this->_idUsuario = $idUsuario;
        }
        
        function get_idEmpleado(){
            return $this->_idEmpleado;
        }
        
        function set_idEmpleado($idEmpleado){
            $this->_idEmpleado = $idEmpleado;
        }
        
        function get_permisos(){
            return $this->_permisos;
        }
        
        function set_permisos($permisos){
            $this->_permisos = $permisos;
        }
        
        function get_login(){
            return $this->_login;
        }
        
        function set_login($login){
            $this->_login = $login;
        }
        
        function get_pass(){
            return $this->_pass;
        }
        
        function set_pass($pass){
            $this->_pass = $pass;
        }
    }
?>
    
    