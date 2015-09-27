<div id="ContenedorCambiarTurno">
    <form id="FormCambioTurno">           
        <div id="TurnoTotalVentaPesos" class="form-group">
            <label>Pesos <label>
            <input id="VentPesos" type="text" class="form-control">
        </div>
        <div id="TurnoTotalVentaDolares" class="form-group">
             <label>Dolares <label>
             <input id="VentDolares" type="text" class="form-control">
        </div>
        <div id="TurnoTotalVentaTarjetas" class="form-group">
            <label>Tarjetas <label>
            <input id="VentTarjetas" type="text" class="form-control">
        </div>
        <div id="TurnoTotalVentaCtaCte" class="form-group">
            <label>Cuentas Corriente <label>
            <input id="VentCtaCte" type="text" class="form-control">
        </div>
        <hr/>
        <div id="TurnoTotal" class="form-group">
            <label>Total <label>
            <input id="TotalVentas" type="text" class="form-control">
        </div>
        <hr/>
        <div id="Turnos" class="form-group">
            <label>Nuevo Turno </label>
            <select id="selectTturno" class="selectpicker">
                <option value="TMañana">Mañana</option>
                <option value="TMedioDia">Medio dia</option> 
                <option value="TTarde">Tarde</option>
                <option value="TNoche">Noche</option>             
            </select>
            <br/>
        <button id="btnCambiarTurno" type="button" class="btn btn-default">Cambiar Turno!</button> 
        </div>
    </form>
</div>