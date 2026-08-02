import Contador from "./components/Contador";
import ListaTareas from "./components/ListaTareas";
import BuscadorAnime from "./components/BuscadorAnime";
import "./index.css";

function App() {
  return (
    <div>
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