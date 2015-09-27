<div id="mesas">
    <div id="botoneraMesas">
        <a id="addMesa" class="btn btn-info" role="button">Agregar Mesa</a>
        <br/>
        <a id="UnirMesa" class="btn btn-info" role="button">Unir Mesas</a>
    </div>
    <div id="ContenedorMesas">
        <div id="mesaRoja" class="Mesa"><label>Mesa 1</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 1</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 2</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 3</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 4</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 5</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 6</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 7</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 8</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 9</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 10</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 11</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 12</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 13</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 14</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 15</label><label>Cubiertos: 0</label></div>
        <div class="Mesa"><label>Mesa 16</label><label>Cubiertos: 0</label></div> 
        <div class="Mesa"><label>Mesa 17</label><label>Cubiertos: 0</label></div> 
    </div>
    <div id="ContenedorDetalle">
        <div class="conRef">
            <div class="referencia" id="refRojo"></div>
            <label>Total de personas: ...</label>                
        </div>
        <div class="conRef">
            <div class="referencia" id="refAmarillo"></div>
            <label>Cubiertos por liberarse: ...</label>   
        </div>
        <div class="conRef">
            <div class="referencia" id="refVerde"></div>
            <label>Cubiertos libres: ...</label>   
        </div>
    </div>
</div>
<div id="admMesas" title="Administracion de mesa">  
    <form id="FormAdmMesas">
        <div id="MesaPersona" class="form-group">
            <label>Personas</label>
            <input type="text" class="form-control">
        </div>
        <div id="MesaCliente" class="form-group">
            <label>Cliente</label>
            <input type="text" class="form-control">
        </div>
        <div id="MesaMozo" class="form-group">
            <label>Mozo</label>
            <input type="text" class="form-control">
        </div>
        <div id="MesaComentario" class="form-group">
            <label>Comentario</label>
            <input type="text" class="form-control">
        </div>
    </form>
</div>
<div id="cubiertosMesa">
    <form id="FormCubiertosMesa">
        <div id="cubiertosCant" class="form-group">
            <label>Cantidad de cubiertos</label>
            <input id="CantCubiertos" type="text" class="form-control">
        </div>
    </form>
</div>
<script src="js/Mesas.js"></script>