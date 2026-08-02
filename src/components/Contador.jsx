import {useState} from 'react';

function Contador() {
    const [numero, setNumero] = useState(0);

    return (
        <div>
            <h2>Contador: {numero}</h2>
            <button onClick={() => setNumero(numero + 1)}>Sumar</button>
            <button onClick={() => setNumero(numero - 1)}>Restar</button>
        </div>
    );
}

export default Contador;
