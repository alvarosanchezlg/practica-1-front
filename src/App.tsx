import { useEffect, useState } from "react";
import { api } from "./api/api";
import CharacterCard from "./components/Character/index.tsx";
import type { ApiResponse, Character } from "./types";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);

  const fetchCharacters = async (url?: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = url
        ? await api.get<ApiResponse>(url)
        : await api.get<ApiResponse>("/people/");

      const data = response.data;

      setCharacters((prev) => [...prev, ...data.results]);
      setNextPage(data.next);
    } catch {
      setError("No se pudieron cargar los personajes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Personajes Star Wars</h1>
        <p className="subtitle">SWAPI · Mostrando {characters.length} personajes</p>
      </header>

      {loading && characters.length === 0 && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="cards">
        {characters.map((c) => (
          <CharacterCard key={c.url} character={c} />
        ))}
      </div>

      {nextPage && (
        <button onClick={() => fetchCharacters(nextPage)}>
          Siguiente Página
        </button>
      )}

      {loading && characters.length > 0 && <p>Cargando...</p>}
    </div>
  );
}

export default App;