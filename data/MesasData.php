<?php
    require("connection.php");
    
    class MesasData{
        
        private $connection;
    
        public function __construct(){
            $this->connection = Connection::getInstance();
        }
        
        public function Agregar($Cubiertos){
            
            $query = "insert into mesas(cubiertos,estado,idMesaUnida,personas) 
                        values($Cubiertos,1,null,0); 
                        update mesas set num_mesa = last_insert_id() where idmesa = last_insert_id();";
            
            
            if($this->connection->multi_query($query)){
                return true;
            }else{
                return false;
            }            
        }
    }
?>