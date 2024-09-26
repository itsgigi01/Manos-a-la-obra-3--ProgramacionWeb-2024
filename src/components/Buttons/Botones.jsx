import React, { useState } from 'react';
import '../../App.css';

function Botones({ name, id, onDelete }) {

    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setChecked(!checked);
    };

    const handleDelete = () => {
        onDelete(id);
    }

    console.log(onDelete);

    return (
        <>
            <input type="checkbox" onClick={handleClick} />
            <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>
                {name}
            </span>
            <button onClick={handleDelete} className="delete-btn">🗑️</button>
        </>
    );
}

export default Botones;