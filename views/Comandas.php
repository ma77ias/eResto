<div id="pantallaComanda">
    <div id="headComanda">
    </div>
    <div class="row" id="detalleComanda">
        <div id="tablaDerecha" class="col-md-7">
            <div class="row">
                <div class="col-md-6">                    
                    Cantidad:<input id="cantidadProdComanda" type="number" class="form-control" min="1" max="999"> 
                </div>
                <div class="col-md-6">
                    <button id="agregarProductoComanda" type="text" class="btn">Agregar</button>  
                </div>
            </div>
            <div id="panelDerechoTabla">
                <div id="contenedorTablaRecetasComanda">
                    <table id="TablaRecetasComanda"></table>
                    <div id="TablaRecetasComanda_pagger"></div>
                </div>
            </div>
        </div>
        <div class="col-md-5">     
            <div id="tablaComanda">
                <table id="comanda" class="table">  
                    <thead>
                        <tr>
                            <th class="thComanda">Cantidad</th>
                            <th class="thComanda">Descripcion</th>
                            <th class="thComanda">Valor</th>
                        </tr>
                    </thead>        
                    <tbody>
                      
                    </tbody>
                </table>
            </div>
            <div id="botoneraComanda">
                <button id="btnEnviarComanda" type="text" class="btn btn-default">Enviar</button> 
                <button id="btnCerrarMesa" type="text" class="btn btn-default">Cerrar Mesa</button> 
            </div>
        </div>        
    </div>
</div>
<script src="js/Mesas.js"></script>
