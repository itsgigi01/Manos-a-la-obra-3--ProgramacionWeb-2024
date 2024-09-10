import React from "react";
import '../App.css'; // Importa desde src


function Formulario(){
    return(

        <div class="formulario">
          <input type="text" name="nuevaTarea" placeholder="Nueva tarea..." required />
          <button type="submit">ADD</button>
        </div>
    )
}

export default Formulario;