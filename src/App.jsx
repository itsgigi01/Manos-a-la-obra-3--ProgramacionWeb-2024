/* INTEGRANTES
  - Gil, Maria de los Angeles
  - Pedernera Cañadas, Candela Nahir
*/

import { useState } from 'react';
import './App.css';
import AddTarea from './components/AddTarea/Add';
import Lista from './components/Tarea/Lista';
import Titulo from './components/Titulo';
import Botones from './components/Buttons/Botones';

function App() {
  const [nuevaTarea, setNuevaTarea] = useState('');  // Corregido para que sea una cadena
  const [tareas, setTareas] = useState([]);          // Cambiado el nombre de "tarea" a "tareas"

  const handleAddTarea = () => {
    if (nuevaTarea.trim()) {  // Asegurarse de que nuevaTarea sea una cadena
      const nuevaT = { id: Date.now(), text: nuevaTarea, completed: false };
      setTareas([nuevaT, ...tareas]);  // Agregar la nueva tarea a la lista de tareas
      setNuevaTarea('');  // Limpiar el campo de nuevaTarea
    }
  };
  const onDelete = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };


  return (
    <>
      <div className='contenedor'>
        <Titulo />
        <AddTarea
          nuevaTareas={nuevaTarea}
          setNTarea={setNuevaTarea}
          handleAddTarea={handleAddTarea}
        />
        <Lista tareas={tareas} onDelete={onDelete}/>
      </div>
    </>
  );
}

export default App;
