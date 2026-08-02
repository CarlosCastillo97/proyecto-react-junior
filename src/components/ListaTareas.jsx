import { useState } from "react";

function ListaTareas() {
    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea] = useState("");

    const agregarTarea = () => {
        if (tarea.trim() === "") return;
        setTareas([...tareas, tarea]);
        setTarea("");
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
    };

    return (
        <div>
            <div className="fila-formulario">
                <input 
                type="text"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                placeholder="Nueva tarea"
                />
                <button onClick={agregarTarea}>Agregar</button>
            </div>

            <ul className="lista-react">
                {tareas.map((t, index) => (
                    <li key={index} className="item-react">
                        <span>{t}</span>
                        <button onClick={() =>
                            eliminarTarea(index)}>Eliminar
                        </button> 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaTareas;