<?php 
    class mesas{
        var $_NumeroMesa;
        var $_Cubiertos;
        var $_Estado;
        var $_IdMesaUnida;
        var $_Personas;
        
        function get_NumeroMesa(){
            return $this->NumeroMesa;
        }
        
        function set_NumeroMesa($NumeroMesa){
            $this->_NumeroMesa = $NumeroMesa;
        }
        
        function get_Cubiertos(){
            return $this->_Cubiertos;
        }
        
        function set_Cubiertos($Cubiertos){
            $this->_Cubiertos = $Cubiertos;
        }
        
        function get_Estado(){
            return $this->_Estado;
        }
        
        function set_Estado($Estado){
            $this->_Estado = $Estado;
        }
        
        function get_IdMesaUnida(){
            return $this->_IdMesaUnida;
        }
        
        function set_IdMesaUnida($IdMesaUnida){
            $this->_IdMesaUnida = $IdMesaUnida;
        }
        
        function get_Personas(){
            return $this->_Personas;
        }
        
        function set_Personas($Personas){
            $this->_Personas = $Personas;
        }
    
    }
?>