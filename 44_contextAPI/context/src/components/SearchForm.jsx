// Importa o hook useState do React
// Ele serve para guardar e atualizar valores dentro do componente
import { useState } from "react";

// Importa o hook useNavigate do react-router-dom
// Ele permite navegar entre páginas via código (sem clicar em link)
import { useNavigate } from "react-router-dom";

// Cria o componente SearchForm
const SearchForm = () => {

  // Chama o useNavigate e guarda na variável navigate
  // navigate é uma função que você usa para mudar de rota
  const navigate = useNavigate();

  // Cria um estado chamado "query"
  // query = valor atual
  // setQuery = função para atualizar esse valor
  
  // ⚠️ Aqui tem um detalhe:
  // você não colocou valor inicial → começa como undefined
  const [query, setQuery] = useState();

  // Função que será executada quando o formulário for enviado
  const handleSubmit = (e) => {

    // Impede o comportamento padrão do formulário
    // (que seria recarregar a página)
    e.preventDefault();

    // Faz a navegação para a rota "/search"
    // passando um parâmetro na URL (query string)
    
    // Exemplo final:
    // /search?q=react
    navigate("/search?q=" + query);
  };

  // JSX que será renderizado
  return (

    // Formulário HTML
    // Quando enviar (submit), chama handleSubmit
    <form onSubmit={handleSubmit}>

      {/* Input de texto */}
      <input 
        
        // Define que é um campo de texto
        type="text"

        // Toda vez que o usuário digita algo,
        // essa função é chamada
        
        // e.target.value = o que foi digitado
        
        // setQuery salva esse valor no estado
        onChange={(e) => setQuery(e.target.value)} 
      />

      {/* Botão de envio do formulário */}
      <input 
        
        // Define que é um botão de submit
        type="submit" 
        
        // Texto que aparece no botão
        value="Buscar" 
      />

    </form>
  );
};

// Exporta o componente
export default SearchForm;