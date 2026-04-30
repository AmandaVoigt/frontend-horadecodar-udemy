// Importa o hook de fetch
// Responsável por buscar dados da API
import { useFetch } from "../hooks/useFetch";

// Importa:
// Link → navegação entre páginas
// useSearchParams → lê parâmetros da URL (query string)
import { Link, useSearchParams } from "react-router-dom";

// Cria o componente Search
const Search = () => {

  // useSearchParams retorna um objeto com os parâmetros da URL
  // Exemplo: /search?q=react
  // searchParams = { q: "react" }
  const [searchParams] = useSearchParams();

  // Monta a URL da API com os parâmetros da busca
  // searchParams vira string automaticamente
  // Ex: "q=react"
  
  // Resultado final:
  // http://localhost:3000/products?q=react
  const url = "http://localhost:3000/products?" + searchParams;

  // Busca os produtos com base na query
  const { data: items } = useFetch(url);

  // JSX renderizado
  return (
    <div>

      {/* Título da página */}
      <h1>Resultados da pesquisa</h1>

      {/* Lista de produtos */}
      <ul className="products">

        {/* Só renderiza se items existir */}
        {items &&

          // Percorre os resultados
          items.map((item) => (

            // Cada item precisa de key única
            <li key={item.id}>

              {/* Nome do produto */}
              <h2>{item.name}</h2>

              {/* Preço */}
              <p>R$: {item.price}</p>

              {/* Link para página do produto */}
              <Link to={`/products/${item.id}`}>
                Detalhes
              </Link>

            </li>
          ))
        }

      </ul>
    </div>
  );
};

// Exporta o componente
export default Search;