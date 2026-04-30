// Importa o hook useParams do react-router-dom
// Ele permite acessar parâmetros da URL (ex: /products/5)
import { useParams } from "react-router-dom";

// Cria o componente Info
export const Info = () => {

  // useParams retorna um objeto com os parâmetros da rota
  // Exemplo:
  // URL: /products/5
  // resultado: { id: "5" }
  
  // Aqui você está pegando apenas o id
  const { id } = useParams();

  // JSX renderizado
  return (
    <div>

      {/* Mostra o id capturado da URL */}
      <h1>Mais informações sobre o produto: {id}</h1>

    </div>
  );
};