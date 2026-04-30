// Importa o hook de fetch que você criou
import { useFetch } from "../hooks/useFetch";

// Importa hooks e componentes do React Router
// useParams → pega parâmetros da URL
// Link → navegação sem reload
import { useParams, Link } from "react-router-dom";

// Cria o componente Product
const Product = () => {

  // Pega o id da URL
  // Ex: /products/5 → id = "5"
  const { id } = useParams();

  // Monta a URL da API com o id
  // Ex: http://localhost:3000/products/5
  const url = "http://localhost:3000/products/" + id;

  // Busca os dados do produto
  // data foi renomeado para "product"
  const { data: product } = useFetch(url);

  // Se ainda não carregou, mostra mensagem
  if (!product) return <p>Carregando...</p>;

  // JSX renderizado quando já tem dados
  return (
    <div>

      {/* Mostra o ID (mais útil pra debug do que pro usuário) */}
      <p>ID do produto: {id}</p>

      <div>

        {/* Nome do produto */}
        <h1>{product.name}</h1>

        {/* Preço do produto */}
        <p>R${product.price}</p>

        {/* Link para rota aninhada (nested route) */}
        {/* Ex: /products/5/info */}
        <Link to={`/products/${product.id}/info`}>
          Mais informações
        </Link>

      </div>
    </div>
  );
};

// Exporta o componente
export default Product;