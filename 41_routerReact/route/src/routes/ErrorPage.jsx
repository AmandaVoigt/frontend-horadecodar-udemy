// Importa o hook useRouteError do react-router-dom
// Esse hook permite acessar erros que aconteceram durante a navegação
import { useRouteError } from "react-router-dom";

// Cria o componente ErrorPage
// Ele será exibido quando alguma rota der erro
const ErrorPage = () => {

  // Pega o erro da rota atual
  // Esse erro vem do React Router (ex: falha de loader, rota inexistente, etc.)
  const error = useRouteError();

  // Mostra o erro no console do navegador (útil para debug)
  console.error(error);

  // JSX que será exibido na tela
  return (

    // Container principal
    <div>

      {/* Título principal */}
      <h1>Ops!</h1>

      {/* Mensagem genérica */}
      <p>Temos um problema</p>

      {/* Mostra o texto de status do erro (ex: "Not Found") */}
      <p>{error.statusText}</p>

      {/* Mostra a mensagem detalhada do erro */}
      {/* Ex: "Cannot read properties of undefined" */}
      <p>{error.error.message}</p>

    </div>
  );
};

// Exporta o componente
export default ErrorPage;