import React from "react";
import '../App.css'; // Importa desde src


function Lista(){
    return(
        <div className='lista'>
          <ul >
            <li className='item-tarea'> <input type="checkbox" /> <p className='nombreTarea'>Task N</p> <button class="delete-btn">🗑️</button> </li>
            <li className='item-tarea'> <input type="checkbox" /> <p className='nombreTarea'>TasK N-1</p> <button class="delete-btn">🗑️</button> </li>
            <li className='item-tarea'> <input type="checkbox" checked /> <p className='completada'>Completed Task N-2</p> <button class="delete-btn">🗑️</button> </li>
            <li className='item-tarea'> <input type="checkbox" /> <p className='nombreTarea'>TasK K</p>  <button class="delete-btn">🗑️</button> </li>
            <li className='item-tarea'> <input type="checkbox" /> <p className='nombreTarea'>TasK 2</p> <button class="delete-btn">🗑️</button> </li>
            <li className='item-tarea'> <input type="checkbox" checked /> <p className='completada'>Completed Task 1</p> <button class="delete-btn">🗑️</button> </li>
          </ul>
        </div>
    )
}
export default Lista;