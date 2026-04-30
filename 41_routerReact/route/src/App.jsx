// Importa o CSS global da aplicação
// Tudo aqui pode afetar o layout geral
import "./App.css";

// Importa o Outlet do react-router-dom
// Ele é o "buraco" onde as páginas vão aparecer
import { Outlet } from "react-router-dom";

// Importa o componente Navbar (menu de navegação)
import Navbar from "./components/Navbar";

// Importa o formulário de busca
import SearchForm from "./components/SearchForm";

// Cria o componente principal App
function App() {

  // JSX principal
  return (

    // Container geral da aplicação
    <div className="App">

      {/* Navbar aparece em TODAS as páginas */}
      <Navbar />

      {/* Campo de busca também aparece em TODAS as páginas */}
      <SearchForm />

      {/* 
        Aqui é onde o conteúdo das rotas será renderizado
        
        Exemplo:
        - Home
        - Product
        - Search
        - Info
        
        Tudo isso entra aqui dentro
      */}
      <Outlet />

      {/* Footer simples */}
      <p>Footer</p>

    </div>
  );
}

// Exporta o App
export default App;