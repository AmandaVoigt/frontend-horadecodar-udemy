// Importa o custom hook que você criou anteriormente
// Ele serve para buscar dados de uma API
import { useFetch } from "../hooks/useFetch";

// Define a URL da API que será usada
// Aqui você está pegando produtos de um servidor local
const url = "http://localhost:3000/products";

// Importa o Link do react-router-dom
// Ele serve para navegar entre páginas sem recarregar
import { Link } from "react-router-dom";

// Cria o componente Home
const Home = () => {

  // Usa o hook useFetch passando a URL
  // data está sendo renomeado para "items"
  // (isso é só um apelido para ficar mais semântico)
  const { data: items } = useFetch(url);

  // JSX que será renderizado
  return (
    <div>

      {/* Título da página */}
      <h1>Home</h1>

      {/* Lista de produtos */}
      <ul className="products">

        {/* 
          Só executa o map se items existir
          (evita erro quando ainda não carregou)
        */}
        {items &&

          // Percorre cada item do array
          items.map((item) => (

            // Cada item precisa de uma chave única (key)
            <li key={item.id}>

              {/* Nome do produto */}
              <h2>{item.name}</h2>

              {/* Preço do produto */}
              <p>R$: {item.price}</p>

              {/* Link dinâmico */}
              {/* Vai gerar algo como:
                  /products/1
                  /products/2
              */}
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
export default Home;