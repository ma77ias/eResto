<div id="FormasDePagoContainer">
    <div id="FormasDePagoOpciones">
        <button id="Moneda" type="text" class="btn btn-default">Moneda</button> 
        <button id="Tarjeta" type="text" class="btn btn-default">Tarjeta</button> 
        <button id="CtaCte" type="text" class="btn btn-default">Cuenta Corriente</button> 
    </div>
    <div id="FormasDePagoElegidas">
        <table id="tablaPagos" class="table">  
            <thead>
                <tr>
                    <th class="thPagos">Tipo</th>
                    <th class="thPagos">Descripcion</th>
                    <th class="thPagos">Cantidad</th>
                </tr>
            </thead>        
            <tbody>
            </tbody>
        </table>
    </div>
    <div id="FormaDePagoTotal">
        <input id="CantidadPagoTotal"type="text" class="form-control">
    </div>
</div>

<div id="divMoneda" title="Elija la moneda en la que desea abonar">  
    <form id="FormMoneda">
        <div id="TipoMoneda" class="form-group">
            <label>Moneda</label>
            <select id="selectMoneda" class="selectpicker">
              <option value="pesos">Pesos</option>
              <option value="Dolares">Dolares</option>             
            </select>
        </div>
        <div id="CantidadMoneda" class="form-group">
            <label>Cantidad</label>
            <input id="CantidadMonedaInput" type="text" class="form-control">
        </div>
    </form>
</div>

<div id="divTarjeta" title="Elija la Tarjeta en la que desea abonar">  
    <form id="FormTarjeta">
        <div id="TipoTarjeta" class="form-group">
            <label>Tarjeta</label>
            <select id="selectTarjeta" class="selectpicker">
                <option value="TVisa">Visa</option>
                <option value="TMaster">Master</option> 
                <option value="TCabal">Cabal</option>
                <option value="TAmex">American Express</option>             
            </select>
        </div>
        <div id="CantidadTarjeta" class="form-group">
            <label>Cantidad</label>
            <input id="CantidadTarjetaInput"type="text" class="form-control">
        </div>
    </form>
</div>

<div id="divCtaCte" title="Elija la Cuenta corriente con la que desea abonar">  
    <form id="FormCtaCte">
        <div id="TipoTarjeta" class="form-group">
            <table id="tablaCtaCte" class="table">  
            <thead>
                <tr>
                    <th class="thCtaCte">Numero</th>
                    <th class="thCtaCte">Nombre</th>
                    <th class="thCtaCte">Empresa</th>
                    <th class="thCtaCte">Debito</th>
                    <th class="thCtaCte">Estado</th>
                </tr>
            </thead>        
            <tbody>
                <tr>
                    <th>1</th>
                    <th>CtaCte 1</th>
                    <th>Empresa 1</th>
                    <th>0</th>
                    <th>Activa</th>
                </tr>
                <tr>
                    <th>2</th>
                    <th>CtaCte 2</th>
                    <th>Empresa 2</th>
                    <th>0</th>
                    <th>Activa</th>
                </tr>
                <tr>
                    <th>3</th>
                    <th>CtaCte 3</th>
                    <th>Empresa 3</th>
                    <th>0</th>
                    <th>Activa</th>
                </tr>
            </tbody>
        </table>
        </div>
        <div id="CantidadCtaCte" class="form-group">
            <label>Cantidad</label>
            <input id="CantidadCtaCteInput" type="text" class="form-control">
        </div>
    </form>
</div>
<script src="js/FormasDePago.js"></script>