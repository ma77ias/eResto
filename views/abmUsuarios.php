<table id="tabUsuarios" class="table">  
    <thead>
        <tr>
            <th class="thUsuario">Usuario</th>
            <th class="thUsuario">Perfil</th>
            <th class="thUsuario">Activo</th>
        </tr>
    </thead>        
    <tbody>   
        <tr>
            <th>adm</th>
            <th>Administrador</th>
            <th>Si</th>
        </tr>
        <tr>
            <th>Matias</th>
            <th>Cajero</th>
            <th>Si</th>
        </tr>
        <tr>
            <th>Hernan</th>
            <th>Mozo</th>
            <th>Si</th>
        </tr>
    </tbody>
</table>

<div id="botoneraUsuarios">
    <button id="usuarioAlta" type="button" class="btn btn-default">Alta</button>
    <button id="usuarioBaja" type="button" class="btn btn-default">Baja</button>
    <button id="usuarioModif" type="button" class="btn btn-default">Modificacion</button>
</div>

<div id="admUsuario">
    <form id="formAdmUsuario">
        <div id="divNombreUssuario" class="form-group">
            <label>Nombre <label>
            <input id="nombreUsuario" type="text" class="form-control">
        </div>
        <div id="divPerfilUsuario" class="form-group">
            <label>Perfil </label>
            <select id="selectPefil" class="selectpicker">
                <option value="Administrador">Administrador</option>
                <option value="Mozo">Mozo</option> 
                <option value="Cajero">Cajero</option>
                <option value="Metre">Metre</option>             
            </select>
        </div>
    </form>
</div>