import {useState} from 'react';

function Contador() {
    const [numero, setNumero] = useState(0);

    return (
        <div className="contenido-centro">
            <p className="contador-numero">{numero}</p>
            <div className="fila-botones">
                <button onClick={() => setNumero(numero + 1)}>Sumar</button>
                <button onClick={() => setNumero(numero - 1)}>Restar</button>
            </div>
        </div>
    );
}

export default Contador;
