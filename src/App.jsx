import { useEffect, useState } from "react";
import Contador from "./components/Contador";
import ListaTareas from "./components/ListaTareas";
import BuscadorAnime from "./components/BuscadorAnime";
import "./index.css";

function App() {
  const [temaClaro, setTemaClaro] = useState(false);

  useEffect(() => {
    document.body.className = temaClaro ? "tema-claro" : "";
  }, [temaClaro]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mi Proyecto React</h1>
        <button onClick={() => setTemaClaro(!temaClaro)}>
          Cambiar tema
        </button>
      </header>

      <main className="app-grid">
        <section className="bloque">
          <h2>Contador</h2>
          <Contador />
        </section>

        <section className="bloque">
          <h2>Lista de Tareas</h2>
          <ListaTareas />
        </section>

        <section className="bloque bloque-completo">
          <h2>Buscador de Anime</h2>
          <BuscadorAnime />
        </section>
      </main>
    </div>
  );
}

export default App;