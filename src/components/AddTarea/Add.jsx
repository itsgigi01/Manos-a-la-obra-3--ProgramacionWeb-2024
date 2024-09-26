import '../../App.css';

import React from "react";


function AddTarea({ nuevaTarea, setNTarea, handleAddTarea }) {
    const handleChange = (e) => {
        setNTarea(e.target.value);
    }

    return (
        <div className='formulario'>
            <input 
                type="text"
                placeholder="Nueva tarea..." 
                value={nuevaTarea}
                onChange={handleChange}
            />
            <button type="submit" onClick={handleAddTarea}>ADD</button>
        </div>
    );

}

export default AddTarea;