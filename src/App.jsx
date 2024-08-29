import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='contenedor'>
        <h1 className='titulo'>LISTA DE TAREAS DE GIGI</h1>

        <div class="formulario">
          <input type="text" name="nuevaTarea" placeholder="Nueva tarea..." required />
          <button type="submit">ADD</button>
        </div>


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

      </div>

    </>
  )
}

export default App
