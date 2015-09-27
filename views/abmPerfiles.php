<table id="tabPerfiles" class="table">  
    <thead>
        <tr>
            <th class="thUsuario">Perfil</th>
            <th class="thUsuario">Activo</th>
        </tr>
    </thead>        
    <tbody>   
        <tr>
            <th>Administrador</th>
            <th>Si</th>
        </tr>
        <tr>
            <th>Cajero</th>
            <th>Si</th>
        </tr>
        <tr>
            <th>Mozo</th>
            <th>Si</th>
        </tr>
    </tbody>
</table>

<div id="botoneraPerfiles">
    <button id="perfilAlta" type="button" class="btn btn-default">Alta</button>
    <button id="perfilBaja" type="button" class="btn btn-default">Baja</button>
    <button id="perfilModif" type="button" class="btn btn-default">Modificacion</button>
</div>

<div id="admPerfiles">
    <form id="formPefiles">
        <div id="divNombrePerfil" class="form-group">
            <label>Nombre <label>
            <input id="nombrePerfil" type="text" class="form-control">
        </div>
        <div id="divPermisos" class="form-group">
           <fieldset>
               <legend>Permisos</legend>
               <input type="checkbox" name="Mesas" value="Mesas">Mesas<br>
               <input type="checkbox" name="Personal" value="Personal">Personal<br>
               <input type="checkbox" name="Menu" value="Bike">Menu<br>
               <input type="checkbox" name="Listas de precios" value="Listas de precios">Listas de precios<br>
               <input type="checkbox" name="Clientes" value="Clientes">Clientes<br>
               <input type="checkbox" name="Ventas" value="Ventas">Ventas<br>
            </fieldset>
            
        </div>
    </form>
</div>