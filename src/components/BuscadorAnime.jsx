import { useState } from "react";

function BuscadorAnime() {
  const [busqueda, setBusqueda] = useState("");
  const [animes, setAnimes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const buscarAnime = async () => {
    const texto = busqueda.trim();

    if (texto === "") {
      setAnimes([]);
      setError("Escribe un anime para buscar.");
      return;
    }

    try {
      setCargando(true);
      setError("");

      const respuesta = await fetch(
        `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(texto)}&limit=8`
      );

      if (!respuesta.ok) {
        throw new Error("Error al consultar la API");
      }

      const datos = await respuesta.json();
      setAnimes(datos.data || []);
    } catch (error) {
      setError("La API no respondió bien. Intenta con otra búsqueda en unos segundos.");
      setAnimes([]);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div>
      <h2>Buscador de Anime</h2>

      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar anime..."
      />

      <button onClick={buscarAnime}>Buscar</button>

      {cargando && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      {!cargando && !error && animes.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {animes.map((anime) => (
            <div key={anime.mal_id} style={{ width: "150px" }}>
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                width="150"
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