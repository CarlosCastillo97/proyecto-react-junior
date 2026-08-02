import {useState} from "react";
import Contador from "./components/Contador";
import ListaTareas from "./components/ListaTareas";
import BuscadorAnime from "./components/BuscadorAnime";
import "./index.css";

function App() {
const [temaClaro, setTemaClaro] = useState(false);

  return (
    <div className={temaClaro ? "tema-claro" : ""}>
      <button onClick={() => setTemaClaro(!temaClaro)}>
        Cambiar tema
      </button>
      
      <h1>Mi Proyecto React</h1>

      <div className="bloque">
        <Contador />
      </div>

      <div className="bloque">
        <ListaTareas />
      </div>

      <div className="bloque">
        <BuscadorAnime />
      </div>
    </div>
  );
}

export default App;