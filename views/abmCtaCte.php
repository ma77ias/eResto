<table id="tabCtaCte" class="table">  
    <thead>
        <tr>
            <th class="thCtaCte">Nro cuenta</th>
            <th class="thCtaCte">Cliente</th>
            <th class="thCtaCte">Limite</th>
            <th class="thCtaCte">Pendiente</th>
            <th class="thCtaCte">Estado</th>
        </tr>
    </thead>        
    <tbody>   
        <tr>
            <th>1</th>
            <th>Matias</th>
            <th>1500</th>
            <th>200</th>
            <th>Activa</th>
        </tr>
         <tr>
            <th>2</th>
            <th>Micalea</th>
            <th>1500</th>
            <th>200</th>
            <th>Activa</th>
        </tr>
         <tr>
            <th>3</th>
            <th>Hernan</th>
            <th>1500</th>
            <th>200</th>
            <th>Activa</th>
        </tr>
    </tbody>
</table>

<div id="botoneraCtaCte">
    <button id="ctaCteAlta" type="button" class="btn btn-default">Alta</button>
    <button id="ctaCteBaja" type="button" class="btn btn-default">Baja</button>
    <button id="ctaCteModif" type="button" class="btn btn-default">Modificacion</button>
</div>

<div id="admCtaCte">
    <form id="formCtaCte">
        <div id="divNombreCtaCte" class="form-group">
            <label>Nombre <label>
            <input id="nombreCtaCte" type="text" class="form-control">
        </div>
        <div id="divLimiteCtaCte" class="form-group">
            <label>Limite <label>
            <input id="LimiteCtaCte" type="text" class="form-control">
        </div>    
        <div id="divClienteCtaCte" class="form-group">
            <label>Cliente </label>
            <select id="selectClienteCuenta" class="selectpicker">
                <option value="Juan">Juan</option>
                <option value="Marcela">Marcela</option> 
                <option value="Raul">Raul</option>
                <option value="Lucas">Lucas</option>             
            </select>
        </div>
    </form>
</div>