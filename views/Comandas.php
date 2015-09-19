<div id="pantallaComanda">
    <div id="headComanda">
    </div>
    <div class="row" id="detalleComanda">
        <div class="col-md-7">
            <div class="row">
                <div class="col-md-6">                    
                    Cantidad:<input id="cantidadProdComanda" type="number" class="form-control" min="0" max="99"> 
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
                       <!-- <tr class="trTablaComanda">
                            <td>1</td>
                            <td>Milanesa Napolitana</td>
                            <td>100</td>
                        </tr>
                        <tr class="trTablaComanda">
                            <td>2</td>
                            <td>Coca-Cola</td>
                            <td>2000</td>
                        </tr>  
                        <tr class="trTablaComanda">
                            <td>1</td>
                            <td>Fideos</td>
                            <td>1111111111</td>
                        </tr>
                        <tr class="trTablaComanda">
                            <td>7</td>
                            <td>Guiso</td>
                            <td>123123123</td>
                        </tr>  -->                    
                    </tbody>
                </table>
            </div>
            <div id="">
                <div id="botoneraComanda">
                    <button id="btnEnviarComanda" type="text" class="btn btn-default">Enviar</button> 
					<button id="btnCerrarMesa" type="text" class="btn btn-default">Cerrar Mesa</button> 
                </div>
            </div>
        </div>        
    </div>
</div>
<script src="js/Mesas.js"></script>
