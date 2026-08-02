import { useState, useEffect } from "react";

function BuscadorAnime() {
  const [textoInput, setTextoInput] = useState("naruto");
  const [busqueda, setBusqueda] = useState("naruto");
  const [animes, setAnimes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerAnimes = async () => {
      setCargando(true);
      const respuesta = await fetch(
        `https://api.jikan.moe/v4/anime?q=${busqueda}`
      );
      const datos = await respuesta.json();
      setAnimes(datos.data);
      setCargando(false);
    };

    obtenerAnimes();
  }, [busqueda]);

  const manejarBusqueda = () => {
    if (textoInput.trim() === "") return;
    setBusqueda(textoInput);
  };

  return (
    <div>
      <h2>Buscador de Anime</h2>

      <input
        type="text"
        value={textoInput}
        onChange={(e) => setTextoInput(e.target.value)}
        placeholder="Buscar anime..."
      />

      <button onClick={manejarBusqueda}>Buscar</button>

      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {animes.slice(0, 8).map((anime) => (
            <div key={anime.mal_id} style={{ width: "150px" }}>
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                width="100%"
              />
              <p>{anime.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BuscadorAnime;