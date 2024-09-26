import React from "react";
import '../../App.css';
import Botones from "../Buttons/Botones";
 // Importa desde src

 function Lista({ tareas, onDelete }) { // Recibe la lista de tareas como prop
  return (
    <div className='lista'>
      {tareas.length === 0 ? (
        <h2>No hay tareas por hacer</h2>
      ) : (
      <ul>
        
        {tareas.map((tarea) => (
          <li  key={tarea.id} className="lista">
            <Botones id={tarea.id}name={tarea.text} onDelete={onDelete}/>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default Lista;
